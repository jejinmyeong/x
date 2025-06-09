import { useViewportStore } from "@/stores/useViewPortStore";
import { startTransition } from "react";

let initialized = false;

export function initViewportObserver() {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  const store = useViewportStore.getState();
  const setIsModalView = store.setIsModalView;
  const setIsinit = store.setIsInit;
  const currentRef = { current: window.innerWidth <= 702 };

  setIsModalView(currentRef.current);

  const onResize = () => {
    const width = window.innerWidth;

    if (!currentRef.current && width >= 718) {
      currentRef.current = true;
      startTransition(() => {
        setIsModalView(true);
      })
    } else if (currentRef.current && width <= 702) {
      currentRef.current = false;
      startTransition(() => {
        setIsModalView(false);
      })
    }

    setIsinit(true);
  }

  onResize();
  window.addEventListener('resize', onResize);
}