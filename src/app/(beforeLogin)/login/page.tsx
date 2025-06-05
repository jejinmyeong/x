"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import React, { useEffect } from "react";
import { useIsModalView } from "@/hooks/useIsModalView";

export default function LoginPage() {
  const router = useRouter();
  const isModalView = useIsModalView();

  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);

  return (
    <React.Fragment>
      {isModalView && <Main />}
      {!isModalView && <div>hello</div>}
    </React.Fragment>
  );
}
