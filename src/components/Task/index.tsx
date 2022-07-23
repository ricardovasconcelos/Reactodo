import { Trash } from 'phosphor-react';
import { CheckBox } from '../CheckBox';

import styles from "./style.module.css";

interface TaskProps {
  hasDone?: boolean;
  text: string;
}

export function Task({ hasDone, text }: TaskProps) {
  return (
    <div className={styles.container}>
      <CheckBox type="checkbox" text={text} hasDone={hasDone} />
      <Trash size={18} className={styles.trashIcon}/>
    </div>
  );
}
