import Link from "next/link";
import styles from "./page.module.scss";
import XLogo from "public/x_logo.svg";
import ThreeDotIcon from "public/threeDot.svg";
import PostIcon from "public/post.svg";
import NavItems from "./_component/NavItems";
import Image from "next/image";
import classNames from "classnames";
import FlexBox from "../_component/FlexBox";

export default function AfterLoginLayout({ children }) {
  return (
    <FlexBox className={styles.container}>
      <header className={classNames("flexBox", styles.header)}>
        <div className={classNames("flexBox", styles.headerContainer)}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerBox}>
              <div className={styles.headerInner}>
                <div className={styles.headerLogoContainer}>
                  <h1 className={styles.headerLogoWrapper}>
                    <Link href="/home" className={styles.headerLogoBox}>
                      <div className={styles.headerLogoInner}>
                        <XLogo className={styles.headerLogo} />
                      </div>
                    </Link>
                  </h1>
                </div>
                <div className={styles.navContainer}>
                  <NavItems />
                </div>
                <div className={styles.postContainer}>
                  <Link href="/compose/post" className={styles.postButton}>
                    <div className={styles.postButtonIcon}>
                      <PostIcon />
                    </div>
                    <span className={styles.postButtonText}>Post</span>
                  </Link>
                </div>
              </div>
              <div className={styles.profileContainer}>
                <button className={styles.profileButton}>
                  <div className={styles.profileImgWrapper}>
                    <Image
                      className={styles.profileImg}
                      src="https://pbs.twimg.com/profile_images/1912042253088124928/WjdaRy8q_normal.png"
                      alt="profileImg"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.profileUser}>
                    <div className={styles.userName}>
                      <span className={styles.TextWrapper}>
                        <span>제진명</span>
                      </span>
                    </div>
                    <div className={styles.userId}>
                      <span>@jingmong20</span>
                    </div>
                  </div>
                  <div className={styles.moreButton}>
                    <ThreeDotIcon width={24} height={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.mainWrapper}>
            <div>{children}</div>
          </div>
          <div className={styles.sideWrapper}>side</div>
        </div>
      </main>
    </FlexBox>
  );
}
