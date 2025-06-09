'use client';

import { useEffect } from "react";

export default function useLockHtmlScroll(lock: boolean) {
  useEffect(() => {
    if (!lock) return;

    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = originalOverflow;
    }
  }, [lock])
}