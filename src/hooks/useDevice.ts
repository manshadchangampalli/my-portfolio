"use client";

import { useEffect, useState } from "react";

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    function isMobileUserAgent() {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/android|ipad|iphone|ipod|blackberry|webos|windows phone/i.test(userAgent)) {
        return true;
      }
      return false;
    }

    function isAndroidUserAgent() {
      const userAgent = navigator.userAgent;
      if (/Android/i.test(userAgent)) {
        return true;
      }
      return false;
    }

    function isIOSUserAgent() {
      const userAgent = navigator.userAgent;
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return true;
      }
      return false;
    }

    setIsMobile(isMobileUserAgent());
    setIsAndroid(isAndroidUserAgent());
    setIsIOS(isIOSUserAgent());
  }, []);

  return {
    isMobile,
    isAndroid,
    isIOS,
    isClient,
  };
};

export default useDevice;
