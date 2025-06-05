import { initViewportObserver } from "@/lib/viewportObserver";
import { useViewportStore } from "@/stores/useViewPortStore";
import { useEffect } from "react";

export function useIsModalView() {
  useEffect(() => {
    initViewportObserver();
  }, [])

  return useViewportStore((state) => state.isModalView);
}