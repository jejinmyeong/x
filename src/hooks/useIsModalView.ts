import { useEffect } from "react";
import { initViewportObserver } from "@/lib/viewportObserver";
import { useViewportStore } from "@/stores/useViewPortStore";

export function useIsModalView() {
  const isInit = useViewportStore((state) => state.isInit);
  const isModalView = useViewportStore((state) => state.isModalView);

  useEffect(() => {
    initViewportObserver();
  }, [])
  return {isInit, isModalView};
}