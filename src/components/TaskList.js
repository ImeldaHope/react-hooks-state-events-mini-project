import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  
  return (
    <div className="tasks">      
      {tasks.map((task, index) => (        
        <Task key={index} category={task.category} text={task.text} handleDelete={()=>handleDelete(task)}/>
      ))}      
    </div>
  );
}

export default TaskList;
