'use client';

import React from "react";
import styles from '@/app/(beforeLogin)/@modal/(.)i/flow/login/page.module.css';
import XIcon from 'public/x.svg';
import XLogo from 'public/x_logo.svg';

export default function Modal() {
  return(
    <div className={styles.modalGroup}>
      <div className={styles.modalBackground} />
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.headerSide}>
            <button className={styles.closeButton}>
              <div className={styles.closeButtonIconWrapper}>
                <XIcon />
              </div>
            </button>
          </div>
          <XLogo />
          <div className={styles.headerSide}></div>
        </div>
        <div className={styles.modalBody}>
          <div>로그인하세요.</div>
        </div>
      </div>
    </div>
  )
}