'use client'

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/i/flow/login')
  }, [router])

  return (
    <Main />
  )
}