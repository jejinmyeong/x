import React from "react";
import ViewModeController from "../../_component/ViewModeController";

interface LayoutProps extends React.PropsWithChildren {
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <React.Fragment>
      <ViewModeController modal={modal}>{children}</ViewModeController>
    </React.Fragment>
  );
}
