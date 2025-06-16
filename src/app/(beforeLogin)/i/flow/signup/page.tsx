import ResponsiveView from "@/app/(beforeLogin)/_component/ResponsiveView";
import React from "react";

export default function SignUp() {
  return (
    <React.Fragment>
      <ResponsiveView responsiveChildren={<div>hello</div>}>
        <div>내가 회원가입 페이지야</div>
      </ResponsiveView>
    </React.Fragment>
  );
}
