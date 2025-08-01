import styles from "./loginPage.module.scss";
import FlexBox from "@/app/_component/FlexBox";
import ModalHeader from "@/app/_component/modal/ModalHeader";
import LoginBody from "./LoginBody";

export default function LoginPage() {
  return (
    <FlexBox className={styles.container}>
      <ModalHeader />
      <FlexBox className={styles.body}>
        <LoginBody />
      </FlexBox>
    </FlexBox>
  );
}
