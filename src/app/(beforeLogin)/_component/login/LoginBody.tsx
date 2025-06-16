"use client";

import FlexBox from "@/app/_component/FlexBox";
import styles from "./loginBody.module.scss";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/_component/input/Input";

export default function LoginBody() {
  const router = useRouter();

  const handleClickSignUpButton = useCallback(() => {
    router.replace("./signup");
  }, [router]);

  return (
    <FlexBox className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>X 가입하기</span>
        </h1>
      </div>
      <Input placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디" />
      <Input placeholder="비밀번호" />
      <button className={styles.button}>
        <div className={styles.buttonTextWrapper}>
          <span className={styles.buttonText}>로그인</span>
        </div>
      </button>
      <div className={styles.signUpContainer}>
        <span>계정이 없으신가요? </span>
        <button
          className={styles.signUpButton}
          onClick={handleClickSignUpButton}
        >
          <span>가입하기</span>
        </button>
      </div>
    </FlexBox>
  );
}
