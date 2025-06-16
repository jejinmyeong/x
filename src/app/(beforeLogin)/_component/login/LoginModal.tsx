"use client";

import useLockHtmlScroll from "@/hooks/useLockHtmlScroll";
import Modal from "@/app/_component/modal/Modal";
import LoginBody from "./LoginBody";
import FlexBox from "@/app/_component/FlexBox";
import styles from "./loginModal.module.scss";

export default function LoginModal() {
  useLockHtmlScroll(true);

  return (
    <Modal>
      <FlexBox className={styles.body}>
        <FlexBox>
          <LoginBody />
        </FlexBox>
      </FlexBox>
    </Modal>
  );
}
