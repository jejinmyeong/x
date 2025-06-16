"use client";

import { usePathname } from "next/navigation";
import React from "react";
import ResponsiveView from "../ResponsiveView";
import SignUpPage from "../signup/SignUpPage";
import Main from "./Main";

export default function MainPageOutlet() {
  const pathname = usePathname();

  console.log(pathname);

  if (pathname === "/i/flow/signup") {
    return (
      <ResponsiveView responsiveChildren={<SignUpPage />}>
        <Main />
      </ResponsiveView>
    );
  }

  return <Main />;
}
