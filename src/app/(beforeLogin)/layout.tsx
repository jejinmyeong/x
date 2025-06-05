import styles from "@/app/(beforeLogin)/_component/main.module.scss";
import ViewModeController from "./_component/ViewModeController";

interface BeforeLoginLayoutProps extends React.PropsWithChildren {
  modal: React.ReactNode;
}

export default function BeforeLoginLayout({
  children,
  modal,
}: BeforeLoginLayoutProps) {
  return (
    <div className={styles.container}>
      <ViewModeController modal={modal}>{children}</ViewModeController>
    </div>
  );
}
