import FlexBox from "@/app/_component/FlexBox";
import styles from "./signUpPage.module.scss";
import ModalHeader from "@/app/_component/modal/ModalHeader";
import SignUpBody from "./SignUpBody";

export default function SignUpPage() {
  return (
    <FlexBox className={styles.container}>
      <ModalHeader />
      <FlexBox className={styles.body}>
        <SignUpBody />
      </FlexBox>
    </FlexBox>
  );
}
