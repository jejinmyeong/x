import FlexBox from "../FlexBox";
import styles from "./modal.module.scss";
import ModalHeader from "./ModalHeader";

export default function Modal({ children }: React.PropsWithChildren) {
  return (
    <FlexBox className={styles.modalGroup}>
      <FlexBox className={styles.modalBackground} />
      <FlexBox className={styles.modal}>
        <ModalHeader />
        <FlexBox className={styles.modalBody}>{children}</FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
