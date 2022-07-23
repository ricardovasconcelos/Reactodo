import { v4 as uuidv4 } from 'uuid';
import { Input } from "../Input";
import { Button } from "../Button";
import { TaskField } from "../TaskField";
import { useState, KeyboardEvent } from "react";

import styles from "./style.module.css";
interface Task {
  id: string;
  isCompleted: boolean;
  title: string;
}

export function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  function handleCreateTask() {
    if(!task) return;
    
    const newTask = {
      id: uuidv4(),
      isCompleted: false,
      title: task,
    };
    setTaskList((state) => [...state, newTask]);
    setTask("");
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleCreateTask();
    }
  }

  function handleChangeStatus({id, isCompleted }: Task){
    const findDoneTask = taskList.filter(task => {
      if(task.id === id){
        const newCompletedStatus = isCompleted ? false : true
        task.isCompleted = newCompletedStatus;
      }
      return task
    });
    setTaskList(findDoneTask)
  }

  function handleDeleteTask(taskID: string) {
    const tasksWithoutDeletedOne = taskList.filter(task => task.id !== taskID)
    setTaskList(tasksWithoutDeletedOne)
  }

  function countTasks() {
    const numberOfTasksPending = taskList.length
    const numberOfTasksDone = taskList.reduce((numberOfTasksDone, currentTask) => {
      if(currentTask.isCompleted){
        numberOfTasksDone++
      }
      return numberOfTasksDone
    }, 0);
    
    return `${numberOfTasksDone} de ${numberOfTasksPending}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.createTask}>
          <Input
            placeholder="Adicione um nova tarefa"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleCreateTask} disabled={!task}>Criar</Button>
        </div>

        <div className={styles.info}>
          <p className={styles.taskCount}>
            Tarefas criadas{" "}
            <span className={styles.count}>{taskList.length}</span>
          </p>

          <p className={styles.taskDone}>
            Concluidas <span className={styles.count}>{countTasks()}</span>
          </p>
        </div>

        <div className={styles.list}>
          {taskList.map((task) => (
            <TaskField
              key={task.id}
              isCompleted={task.isCompleted}
              title={task.title}
              onChangeStatus={() => handleChangeStatus(task)}
              onDeleteTask={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
