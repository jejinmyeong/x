"use client";

import { useIsModalView } from "@/hooks/useIsModalView";
import React from "react";

interface ResponsiveViewProps extends React.PropsWithChildren {
  responsiveChildren: React.ReactNode;
}

export default function ResponsiveView({
  responsiveChildren,
  children,
}: ResponsiveViewProps) {
  const { isInit, isModalView } = useIsModalView();

  if (!isInit) return null;

  return (
    <React.Fragment>
      {isModalView && children}
      {!isModalView && responsiveChildren}
    </React.Fragment>
  );
}
