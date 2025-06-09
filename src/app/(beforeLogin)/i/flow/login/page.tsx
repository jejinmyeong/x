import React from "react";
import LoginModal from "../../../_component/login/LoginModal";
import ResponsiveView from "@/app/(beforeLogin)/_component/ResponsiveView";
import LoginPage from "@/app/(beforeLogin)/_component/login/LoginPage";

export default function Login() {
  return (
    <React.Fragment>
      <ResponsiveView responsiveChildren={<LoginPage />}>
        <LoginModal />
      </ResponsiveView>
    </React.Fragment>
  );
}
