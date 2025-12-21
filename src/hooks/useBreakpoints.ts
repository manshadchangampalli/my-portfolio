"use client";

import { useEffect, useState, useRef } from "react";

interface UseBreakpointsOptions {
  onBreakpointChange?: (isMd: boolean, isLg: boolean) => void;
}

export const useBreakpoints = (options?: UseBreakpointsOptions) => {
  const [isMd, setIsMd] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const mdMatches = window.matchMedia("(min-width: 768px)").matches;
    const lgMatches = window.matchMedia("(min-width: 1024px)").matches;
    return mdMatches && !lgMatches;
  });
  const [isLg, setIsLg] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  const callbackRef = useRef(options?.onBreakpointChange);

  useEffect(() => {
    callbackRef.current = options?.onBreakpointChange;
  }, [options?.onBreakpointChange]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");

    const updateBreakpoints = () => {
      const newIsLg = lgQuery.matches;
      const newIsMd = mdQuery.matches && !newIsLg;

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
