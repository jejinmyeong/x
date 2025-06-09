"use client";

import { useIsModalView } from "@/hooks/useIsModalView";
import React from "react";

interface ViewModeControllerProps extends React.PropsWithChildren {
  modal: React.ReactNode;
}

export default function ViewModeController({
  children,
  modal,
}: ViewModeControllerProps) {
  const { isInit, isModalView } = useIsModalView();

  if (!isInit) return null;

  return (
    <React.Fragment>
      {children}
      {isModalView && modal}
    </React.Fragment>
  );
}
