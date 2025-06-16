'use client';

import { useEffect } from "react";

export default function useLockHtmlScroll(lock: boolean) {
  useEffect(() => {
    if (!lock) return;

    const originalOverflow = document.documentElement.style.overflow;
    const originalMarginLight = document.documentElement.style.marginRight;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.marginRight = '15px';

    return () => {
      document.documentElement.style.overflow = originalOverflow;
    document.documentElement.style.marginRight = originalMarginLight;
    }
  }, [lock])
}