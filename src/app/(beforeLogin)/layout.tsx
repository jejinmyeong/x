import styles from "@/app/(beforeLogin)/_component/main.module.scss";

export default function BeforeLoginLayout({ children, modal }) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
