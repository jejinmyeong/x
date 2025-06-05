"use client";

import { useIsModalView } from "@/hooks/useIsModalView";
import React, { useEffect } from "react";

interface ViewModeControllerProps extends React.PropsWithChildren {
  modal: React.ReactNode;
}

export default function ViewModeController({
  children,
  modal,
}: ViewModeControllerProps) {
  const isModalView = useIsModalView();

  useEffect(() => {
    console.log(isModalView);
  }, [isModalView]);

  return (
    <React.Fragment>
      {isModalView && (
        <React.Fragment>
          {children}
          {modal}
        </React.Fragment>
      )}
      {!isModalView && children}
    </React.Fragment>
  );
}
