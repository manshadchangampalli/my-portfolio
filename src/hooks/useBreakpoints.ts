"use client";

import { useEffect, useState, useRef } from "react";

interface UseBreakpointsOptions {
  onBreakpointChange?: (isMd: boolean, isLg: boolean) => void;
}

export const useBreakpoints = (options?: UseBreakpointsOptions) => {
  const getInitialValues = () => {
    if (typeof window === "undefined") return { isMd: false, isLg: false };
    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");
    return {
      isMd: mdQuery.matches,
      isLg: lgQuery.matches,
    };
  };

  const initialValues = getInitialValues();
  const [isMd, setIsMd] = useState<boolean>(initialValues.isMd);
  const [isLg, setIsLg] = useState<boolean>(initialValues.isLg);
  const callbackRef = useRef(options?.onBreakpointChange);

  useEffect(() => {
    callbackRef.current = options?.onBreakpointChange;
  }, [options?.onBreakpointChange]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");

    const updateBreakpoints = () => {
      const newIsMd = mdQuery.matches;
      const newIsLg = lgQuery.matches;

      setIsMd(newIsMd);
      setIsLg(newIsLg);

      if (callbackRef.current) {
        callbackRef.current(newIsMd, newIsLg);
      }
    };

    updateBreakpoints();

    mdQuery.addEventListener("change", updateBreakpoints);
    lgQuery.addEventListener("change", updateBreakpoints);

    return () => {
      mdQuery.removeEventListener("change", updateBreakpoints);
      lgQuery.removeEventListener("change", updateBreakpoints);
    };
  }, []);

  return { isMd, isLg };
};
