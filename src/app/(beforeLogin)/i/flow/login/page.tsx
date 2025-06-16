import React from "react";
import LoginModal from "../../../_component/login/LoginModal";
import ResponsiveView from "@/app/(beforeLogin)/_component/ResponsiveView";
import LoginPage from "@/app/(beforeLogin)/_component/login/LoginPage";
import Main from "@/app/(beforeLogin)/_component/main/Main";

export default function Login() {
  return (
    <React.Fragment>
      <ResponsiveView responsiveChildren={<LoginPage />}>
        <Main />
        <LoginModal />
      </ResponsiveView>
    </React.Fragment>
  );
}
