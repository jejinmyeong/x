import React from "react";
import Main from "../_component/Main";
import RedirectToLogin from "./_component/RedirectToLogin";
import ResponsiveView from "../_component/ResponsiveView";

export default function LoginPage() {
  return (
    <React.Fragment>
      <RedirectToLogin />
      <ResponsiveView responsiveChildren={<div>hello</div>}>
        <Main />
      </ResponsiveView>
    </React.Fragment>
  );
}
