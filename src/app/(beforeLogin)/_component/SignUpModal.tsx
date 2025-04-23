'use client';

import styles from './modal.module.css';
import XIcon from 'public/x.svg';
import XLogo from 'public/x_logo.svg';

export default function SignUpModal() {
  return (
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
          <div className={styles.bodyInner}>
            <div className={styles.title}>
              <span>계정을 생성하세요.</span>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.inputLabel}>
                <div className={styles.labelTextWrapper}>
                  <div className={styles.labelTextInner}>
                    <div className={styles.labelTextBox}>
                      <span className={styles.labelText}>아이디</span>
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
                      <span className={styles.labelText}>닉네임</span>
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
                <span className={styles.buttonText}>가입하기</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}