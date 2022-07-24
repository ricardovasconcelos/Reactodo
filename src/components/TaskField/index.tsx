import { Trash } from "phosphor-react";
import { CheckBox } from "../CheckBox";

import styles from "./style.module.css";

interface TaskFieldProps {
  title: string;
  isCompleted: boolean;
  onDeleteTask: () => void;
  onChangeStatus: () => void;
}

export function TaskField({
  isCompleted,
  title,
  onDeleteTask,
  onChangeStatus,
}: TaskFieldProps) {
  return (
    <div className={styles.container}>
      <CheckBox
        type="checkbox"
        text={title}
        isCompleted={isCompleted}
        name={title}
        onChange={onChangeStatus}
      />
      <Trash size={18} className={styles.trashIcon} onClick={onDeleteTask} />
    </div>
  );
}
