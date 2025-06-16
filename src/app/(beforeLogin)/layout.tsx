import React from "react";
import ViewModeController from "./_component/ViewModeController";

interface layoutProps extends React.PropsWithChildren {
  modal: React.ReactNode;
}

export default function layout({ modal, children }: layoutProps) {
  return (
    <React.Fragment>
      <ViewModeController modal={modal}>{children}</ViewModeController>
    </React.Fragment>
  );
}
