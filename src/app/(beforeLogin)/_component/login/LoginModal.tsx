"use client";

import Link from "next/link";
import styles from "./loginModal.module.scss";
import XIcon from "public/x.svg";
import XLogo from "public/x_logo.svg";
import FlexBox from "@/app/_component/FlexBox";
import useLockHtmlScroll from "@/hooks/useLockHtmlScroll";

export default function LoginModal() {
  useLockHtmlScroll(true);

  return (
    <FlexBox className={styles.modalGroup}>
      <FlexBox className={styles.modalBackground} />
      <FlexBox className={styles.modal}>
        <FlexBox className={styles.modalHeader}>
          <div className={styles.headerSide}>
            <button className={styles.closeButton}>
              <div className={styles.closeButtonIconWrapper}>
                <XIcon />
              </div>
            </button>
          </div>
          <XLogo />
          <div className={styles.headerSide}></div>
        </FlexBox>
        <div className={styles.modalBody}>
          <div className={styles.bodyInner}>
            <div className={styles.title}>
              <span>로그인</span>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.inputLabel}>
                <div className={styles.labelTextWrapper}>
                  <div className={styles.labelTextInner}>
                    <div className={styles.labelTextBox}>
                      <span className={styles.labelText}>
                        휴대폰 번호, 이메일 주소 또는 사용자 아이디
                      </span>
                    </div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.inputInner}>
                      <input className={styles.input} />
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.inputLabel}>
                <div className={styles.labelTextWrapper}>
                  <div className={styles.labelTextInner}>
                    <div className={styles.labelTextBox}>
                      <span className={styles.labelText}>비밀번호</span>
                    </div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.inputInner}>
                      <input className={styles.input} />
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <button className={styles.button}>
              <div className={styles.buttonTextWrapper}>
                <span className={styles.buttonText}>로그인</span>
              </div>
            </button>
            <div className={styles.signInBlock}>
              <span>계정이 없으신가요?</span>
              <Link href="/i/flow/signup">
                <span>가입하기</span>
              </Link>
            </div>
          </div>
        </div>
      </FlexBox>
    </FlexBox>
  );
}
