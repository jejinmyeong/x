import FlexBox from "@/app/_component/FlexBox";
import Input from "@/app/_component/input/Input";
import styles from "./signUpBody.module.scss";
import classNames from "classnames";
import { useIsModalView } from "@/hooks/useIsModalView";

export default function SignUpBody() {
  const { isInit, isModalView } = useIsModalView();

  if (!isInit) return null;

  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.wrapper}>
        <FlexBox className={isModalView ? styles.innerModal : styles.inner}>
          <FlexBox className={styles.titleContainer}>
            <h1 className={isModalView ? styles.titleModal : styles.title}>
              <span>계정을 생성하세요</span>
            </h1>
          </FlexBox>
          <Input placeholder="이름" />
          <Input placeholder="휴대폰" />
          <button className={styles.button}>
            <span>대신 이메일 사용하기</span>
          </button>
          <FlexBox></FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox className={isModalView ? undefined : styles.footer}>
        <FlexBox
          className={
            isModalView ? styles.footerWrapperModal : styles.footerWrapper
          }
        >
          <FlexBox className={styles.footerInner}>
            <button className={classNames("borderRounded", styles.nextButton)}>
              <FlexBox className={styles.buttonTextBox}>
                <span>다음</span>
              </FlexBox>
            </button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
