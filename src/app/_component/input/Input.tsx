import classNames from "classnames";
import FlexBox from "../FlexBox";
import styles from "./input.module.scss";

type InputProps = React.ComponentProps<"input">;

export default function Input({ placeholder }: InputProps) {
  return (
    <FlexBox className={styles.inputBlock}>
      <label className={classNames("flexBox", styles.inputLabel)}>
        <div className={styles.labelTextWrapper}>
          <FlexBox className={styles.labelTextInner}>
            <div className={styles.labelTextBox}>
              <span className={styles.labelText}>{placeholder}</span>
            </div>
          </FlexBox>
          <FlexBox className={styles.inputWrapper}>
            <div className={styles.inputInner}>
              <input className={styles.input} />
            </div>
          </FlexBox>
        </div>
      </label>
    </FlexBox>
  );
}
