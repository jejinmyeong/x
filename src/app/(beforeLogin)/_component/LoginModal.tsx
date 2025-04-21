'use client';

import styles from './loginModal.module.css';
import XIcon from 'public/x.svg';
import XLogo from 'public/x_logo.svg';

export default function LoginModal() {
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
              <span>X 가입하기</span>
            </div>
            <div className={styles.inputBlock}>
              <label>
                <div>
                  <div>
                    <div>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <input />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

