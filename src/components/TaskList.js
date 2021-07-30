import React from "react";
import Task from "./Task"

function TaskList( {tasksList} ) {

  const tasks = tasksList.map((task) => (
    <Task 
    key={task.text}
    text={task.text} 
    category={task.category}
    />
  ))
  return (
    
    <div className="tasks">
      {tasks} 
    </div>
  );
}

export default TaskList;
