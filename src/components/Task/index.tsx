import { Input } from "../Input";
import { Button } from "../Button";
import { TaskField } from "../TaskField";

import styles from "./style.module.css";
import { useState, KeyboardEvent } from "react";

interface Task {
  id: number;
  status: string;
  text: string;
}

export function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  function handleCreateTask() {
    if(!task) return;
    
    const newTask = {
      id: Math.random(),
      status: 'pending',
      text: task,
    };
    setTaskList((state) => [...state, newTask]);
    setTask("");
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleCreateTask();
    }
  }

  function handleChangeStatus({id, status}: Task){
    const findDoneTask = taskList.filter(task => {
      if(task.id === id){
        task.status = status === 'done' ? 'pending' : 'done';
      }
      return task
    });
    setTaskList(findDoneTask)
  }

  function handleDeleteTask(taskID: number) {
    const tasksWithoutDeletedOne = taskList.filter(task => task.id !== taskID)
    setTaskList(tasksWithoutDeletedOne)
  }

  function countTasks() {
    const numberOfTasksPending = taskList.length
    const numberOfTasksDone = taskList.reduce((numberOfTasksDone, currentTask) => {
      if(currentTask.status === 'done'){
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
              status={task.status}
              text={task.text}
              onChangeStatus={() => handleChangeStatus(task)}
              onDeleteTask={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
