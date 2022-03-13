import React from "react";
import {Task} from "./task"
import {TaskData} from "stores/data";

type TaskListProps = {
  color:string,
  tasks:TaskData[],
  onTaskDelete : (value:string)=>void;
  onTaskUpdate: (value1: string, value2:string) => void;
}

export const TaskList = ({
  color,
  tasks,
  onTaskDelete,
  onTaskUpdate,
}: TaskListProps) => {
  return (
    <li>
      {tasks.map(({id,title})=>(
        <Task 
          key={id} 
          id={id} 
          color={color} 
          title={title} 
          onTaskDelete={onTaskDelete}
          onTaskUpdate={onTaskUpdate}></Task>
      ))}
    </li>
  )
}