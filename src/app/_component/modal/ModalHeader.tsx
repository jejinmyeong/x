"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import FlexBox from "../FlexBox";
import styles from "./modalHeader.module.scss";
import XIcon from "public/x.svg";
import XLogo from "public/x_logo.svg";
import classNames from "classnames";

export default function ModalHeader() {
  const router = useRouter();

  const handleClickCloseButton = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <FlexBox className={styles.header}>
      <FlexBox className={styles.headerSide}>
        <button
          aria-label="닫기"
          className={classNames("flexBox", "borderRounded", styles.closeButton)}
          onClick={handleClickCloseButton}
        >
          <FlexBox className={styles.closeButtonIconWrapper}>
            <XIcon />
          </FlexBox>
        </button>
      </FlexBox>
      <FlexBox className={styles.logo}>
        <FlexBox className={styles.logoBox}>
          <XLogo />
        </FlexBox>
      </FlexBox>
      <FlexBox className={styles.headerSide}></FlexBox>
    </FlexBox>
  );
}
