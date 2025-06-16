import React from "react";
import Main from "../_component/main/Main";
import RedirectToLogin from "./_component/RedirectToLogin";

export default function Login() {
  return (
    <React.Fragment>
      <RedirectToLogin />
      <Main />
    </React.Fragment>
  );
}
