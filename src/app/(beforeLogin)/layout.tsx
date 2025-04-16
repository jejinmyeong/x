import styles from '@/app/(beforeLogin)/page.module.css';

export default function BeforeLoginLayout({ children, modal }) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  )
}