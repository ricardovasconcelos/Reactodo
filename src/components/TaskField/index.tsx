import { Trash } from "phosphor-react";
import { CheckBox } from "../CheckBox";

import styles from "./style.module.css";

interface TaskFieldProps {
  text: string;
  status: string;
  onDeleteTask: () => void;
  onChangeStatus: () => void;
}

export function TaskField({
  status,
  text,
  onDeleteTask,
  onChangeStatus,
}: TaskFieldProps) {
  return (
    <div className={styles.container}>
      <CheckBox
        type="checkbox"
        text={text}
        hasDone={status === "done"}
        name={text}
        onChange={() => onChangeStatus()}
      />
      <Trash size={18} className={styles.trashIcon} onClick={onDeleteTask} />
    </div>
  );
}
