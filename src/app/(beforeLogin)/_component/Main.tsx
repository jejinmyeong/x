import styles from "./main.module.scss";
import XLogo from "public/x_logo.svg";
import Link from "next/link";
import FlexBox from "@/app/_component/FlexBox";
import classNames from "classnames";

export default function Main() {
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.wrapper}>
        <FlexBox className={styles.inner}>
          <FlexBox className={styles.signUpContainer}>
            <FlexBox className={styles.signUpWrapper}>
              <XLogo className={styles.mobileLogo} />
              <div className={styles.title}>
                <span>지금 일어나고 있는 일</span>
              </div>
              <div className={styles.subTitle}>
                <span>지금 가입하세요.</span>
              </div>
              <FlexBox className={styles.signUpInner}>
                <Link
                  className={classNames(
                    styles.button,
                    "borderRounded",
                    styles.signUpButton
                  )}
                  href="/i/flow/signup"
                >
                  <div className={styles.signUpText}>
                    <span>계정 만들기</span>
                  </div>
                </Link>
                <FlexBox className={styles.signInContainer}>
                  <div className={styles.subTitle2}>
                    <span>이미 트위터에 가입하셨나요?</span>
                  </div>
                  <Link
                    className={classNames(
                      styles.button,
                      "borderRounded",
                      styles.signInButton
                    )}
                    href="/login"
                  >
                    <div className={styles.signInText}>
                      <span>로그인</span>
                    </div>
                  </Link>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <FlexBox className={styles.logoContainer}>
            <FlexBox className={styles.logoWrapper}>
              <XLogo className={styles.logo} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
