import { InputHTMLAttributes } from "react";

import styles from "./style.module.css";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  hasDone?: boolean;
}

export function CheckBox({ hasDone, text, ...props }: CheckBoxProps) {
  return (
    <div>
      <label className={styles.container}>
        <p className={hasDone ? styles.textDone : ''}>{text}</p>
        <input {...props} />
        <span className={styles.checkmark}/>
      </label>
    </div>
  );
}
