import { InputHTMLAttributes } from "react";

import styles from "./style.module.css";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  isCompleted?: boolean;
}

export function CheckBox({ isCompleted, text, ...props }: CheckBoxProps) {
  return (
    <div>
      <label className={styles.container}>
        <p className={isCompleted ? styles.isCompleted : ''}>{text}</p>
        <input {...props} />
        <span className={styles.checkmark}/>
      </label>
    </div>
  );
}
