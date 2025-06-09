"use client";

import React from "react";
import styles from "./loginPage.module.scss";
import FlexBox from "@/app/_component/FlexBox";
import XLogo from "public/x_logo.svg";
import Link from "next/link";

export default function LoginPage() {
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.headerContainer}>
        <FlexBox className={styles.headerWrapper}>
          <FlexBox className={styles.headerSide}>
            <Link href={".."}></Link>
          </FlexBox>
          <FlexBox className={styles.headerLogoContainer}>
            <FlexBox className={styles.headerLogoWrapper}>
              <XLogo />
            </FlexBox>
          </FlexBox>
          <FlexBox className={styles.headerSide}></FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
