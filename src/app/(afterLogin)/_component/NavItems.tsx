"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./navItem.module.css";
import Link from "next/link";
import HomeIcon from "public/home.svg";
import HomeFillIcon from "public/homeFill.svg";
import SearchIcon from "public/search.svg";
import SearchFillIcon from "public/searchFill.svg";
import NotificationIcon from "public/notification.svg";
import NotificationFillIcon from "public/notificationFill.svg";
import MessageIcon from "public/message.svg";
import MessageFillIcon from "public/messageFill.svg";
import ProfileIcon from "public/profile.svg";
import ProfillFillIcon from "public/profileFill.svg";
import classNames from "classnames";

export default function NavItems() {
  const segment = useSelectedLayoutSegment();

  const me = {
    id: "jinmyeong",
  };

  return (
    <nav className={styles.nav}>
      <Link href="/home" className={styles.navItem}>
        <div
          className={classNames(
            styles.navItemBox,
            segment === "home" && styles.navActive
          )}
        >
          <div className={styles.navIcon}>
            {segment === "home" ? <HomeFillIcon /> : <HomeIcon />}
          </div>
          <div className={styles.navTitle}>
            <span className={styles.titleText}>Home</span>
            <span className={styles.titleHidden}></span>
          </div>
        </div>
      </Link>
      <Link href="/explore" className={styles.navItem}>
        <div
          className={classNames(
            styles.navItemBox,
            segment === "explore" && styles.navActive
          )}
        >
          <div className={styles.navIcon}>
            {segment === "explore" ? <SearchFillIcon /> : <SearchIcon />}
          </div>
          <div className={styles.navTitle}>
            <span className={styles.titleText}>Explore</span>
            <span className={styles.titleHidden}></span>
          </div>
        </div>
      </Link>
      <Link href="/notifications" className={styles.navItem}>
        <div
          className={classNames(
            styles.navItemBox,
            segment === "notifications" && styles.navActive
          )}
        >
          <div className={styles.navIcon}>
            {segment === "notifications" ? (
              <NotificationFillIcon />
            ) : (
              <NotificationIcon />
            )}
          </div>
          <div className={styles.navTitle}>
            <span className={styles.titleText}>Notifications</span>
            <span className={styles.titleHidden}></span>
          </div>
        </div>
      </Link>
      <Link href="/messages" className={styles.navItem}>
        <div
          className={classNames(
            styles.navItemBox,
            segment === "messages" && styles.navActive
          )}
        >
          <div className={styles.navIcon}>
            {segment === "messages" ? <MessageFillIcon /> : <MessageIcon />}
          </div>
          <div className={styles.navTitle}>
            <span className={styles.titleText}>Messages</span>
            <span className={styles.titleHidden}></span>
          </div>
        </div>
      </Link>
      <Link href="/jinmyeong" className={styles.navItem}>
        <div className={styles.navItemBox}>
          <div className={styles.navIcon}>
            {segment === "jinmyeong" ? <ProfillFillIcon /> : <ProfileIcon />}
          </div>
          <div
            className={classNames(
              styles.navTitle,
              segment === "jinmyeong" && styles.navActive
            )}
          >
            <span className={styles.titleText}>Profile</span>
            <span className={styles.titleHidden}></span>
          </div>
        </div>
      </Link>
    </nav>
  );
}
