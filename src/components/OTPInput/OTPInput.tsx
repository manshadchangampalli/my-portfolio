"use client";

import React, { useRef, useEffect, useState, useCallback, KeyboardEvent, ChangeEvent, FormEvent } from "react";

interface OTPInputProps {
    length?: number;
    onComplete?: (otp: string) => void;
    onChange?: (otp: string) => void;
    className?: string;
    inputClassName?: string;
    disabled?: boolean;
}

export default function OTPInput({
    length = 6,
    onComplete,
    onChange,
    className = "",
    inputClassName = "",
    disabled = false,
}: OTPInputProps) {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const hiddenInputRef = useRef<HTMLInputElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    // Function to distribute OTP code across inputs
    const distributeOTP = useCallback((code: string) => {
        const digits = code.slice(0, length).split("");
        const newOtp = new Array(length).fill("");
        
        digits.forEach((digit, i) => {
            if (i < length && /^\d$/.test(digit)) {
                newOtp[i] = digit;
            }
        });
        
        setOtp(newOtp);
        
        const otpString = newOtp.join("");
        onChange?.(otpString);
        if (newOtp.every((digit) => digit !== "")) {
            onComplete?.(otpString);
        }
    }, [length, onChange, onComplete]);

    // Track if we've already distributed to avoid duplicate calls
    const distributedRef = useRef<string>("");

    // Handle Safari autofill - multiple detection methods for reliability
    useEffect(() => {
        const form = formRef.current;
        if (!form) return;

        const checkAndDistribute = (code: string, source: string) => {
            // Avoid duplicate distributions
            if (distributedRef.current === code) return;
            
            const trimmedCode = code.trim();
            if (trimmedCode.length === length && /^\d+$/.test(trimmedCode)) {
                distributedRef.current = trimmedCode;
                distributeOTP(trimmedCode);
                // Reset after a delay to allow re-checking if needed
                setTimeout(() => {
                    if (distributedRef.current === trimmedCode) {
                        distributedRef.current = "";
                    }
                }, 1000);
            }
        };

        const handleFormInput = (e: Event) => {
            const target = e.target as HTMLInputElement;
            
            // Check if Safari filled the hidden input
            if (target === hiddenInputRef.current && target.value) {
                checkAndDistribute(target.value, "hidden-input");
                return;
            }
            
            // Check if Safari filled any visible input with full code
            const inputIndex = inputRefs.current.indexOf(target);
            if (inputIndex !== -1 && target.value.length > 1) {
                checkAndDistribute(target.value, `input-${inputIndex}`);
            }
        };

        // Handle composition events (Safari sometimes uses these)
        const handleCompositionEnd = (e: CompositionEvent) => {
            const target = e.target as HTMLInputElement;
            if (target.value && target.value.length >= length) {
                checkAndDistribute(target.value, "composition");
            }
        };

        // Check all inputs for autofill (more aggressive polling)
        let checkInterval: NodeJS.Timeout;
        const checkAutofill = () => {
            // Check hidden input first - read actual DOM value
            const hiddenValue = hiddenInputRef.current?.value || "";
            if (hiddenValue && hiddenValue.length === length) {
                checkAndDistribute(hiddenValue, "poll-hidden");
                return;
            }
            
            // Check if any visible input has multiple characters (Safari autofill)
            // Read actual DOM values, not React state
            for (const input of inputRefs.current) {
                if (input) {
                    const domValue = input.value || "";
                    if (domValue.length >= length && /^\d+$/.test(domValue)) {
                        checkAndDistribute(domValue, "poll-visible");
                        return;
                    }
                }
            }

            // Also check if all inputs have values (Safari might fill them individually)
            // Read actual DOM values
            const allValues = inputRefs.current
                .map((input) => input?.value || "")
                .join("");
            if (allValues.length === length && /^\d+$/.test(allValues)) {
                // Check if this is different from current state
                const currentState = otp.join("");
                if (allValues !== currentState) {
                    checkAndDistribute(allValues, "poll-combined");
                }
            }
        };

        // Multiple event listeners for better coverage
        form.addEventListener("input", handleFormInput, true); // Use capture phase
        form.addEventListener("change", handleFormInput, true);
        form.addEventListener("compositionend", handleCompositionEnd as EventListener, true);
        
        // More frequent polling for Safari's delayed autofill
        checkInterval = setInterval(checkAutofill, 50);

        // Also check on focus events (Safari sometimes fills on focus)
        const handleFocus = () => {
            // Check immediately and after a short delay
            checkAutofill();
            setTimeout(checkAutofill, 50);
            setTimeout(checkAutofill, 150);
            setTimeout(checkAutofill, 300);
        };
        
        inputRefs.current.forEach((input) => {
            if (input) {
                input.addEventListener("focus", handleFocus);
            }
        });
        if (hiddenInputRef.current) {
            hiddenInputRef.current.addEventListener("focus", handleFocus);
        }

        return () => {
            form.removeEventListener("input", handleFormInput, true);
            form.removeEventListener("change", handleFormInput, true);
            form.removeEventListener("compositionend", handleCompositionEnd as EventListener, true);
            if (checkInterval) {
                clearInterval(checkInterval);
            }
            inputRefs.current.forEach((input) => {
                if (input) {
                    input.removeEventListener("focus", handleFocus);
                }
            });
            if (hiddenInputRef.current) {
                hiddenInputRef.current.removeEventListener("focus", handleFocus);
            }
        };
    }, [length, onChange, onComplete, distributeOTP, otp]);

    // Handle paste
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            e.preventDefault();
            const pastedData = e.clipboardData?.getData("text/plain").trim() || "";
            
            if (pastedData.length >= length && /^\d+$/.test(pastedData)) {
                distributeOTP(pastedData);
            }
        };

        inputRefs.current.forEach((input) => {
            if (input) {
                input.addEventListener("paste", handlePaste);
            }
        });

        return () => {
            inputRefs.current.forEach((input) => {
                if (input) {
                    input.removeEventListener("paste", handlePaste);
                }
            });
        };
    }, [length, distributeOTP]);

    // Handle Safari autofill input event
    const handleInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Handle Safari autofill - when Safari fills the first input with the entire code
        if (value.length > 1) {
            const code = value.trim();
            if (code.length >= length && /^\d+$/.test(code)) {
                distributeOTP(code);
                return;
            }
        }

        // Normal single character input
        if (value && !/^\d$/.test(value)) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < length - 1) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }

        const otpString = newOtp.join("");
        onChange?.(otpString);
        if (newOtp.every((digit) => digit !== "")) {
            onComplete?.(otpString);
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = inputRefs.current[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const handleFocus = (index: number) => {
        inputRefs.current[index]?.select();
    };

    return (
        <form
            ref={formRef}
            autoComplete="one-time-code"
            onSubmit={(e) => e.preventDefault()}
            className={className}
            style={{ position: "relative" }}>
            {/* Hidden input for Safari autofill - Safari prefers to fill a single input */}
            <input
                ref={hiddenInputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                maxLength={length}
                style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    opacity: 0,
                    pointerEvents: "none",
                }}
                tabIndex={-1}
                aria-hidden="true"
                readOnly={false}
            />
            <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="one-time-code"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleInput(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onFocus={() => handleFocus(index)}
                        disabled={disabled}
                        className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${inputClassName}`}
                    />
                ))}
            </div>
        </form>
    );
}

