import Bin from "./../trash.svg"
import { useState } from "react";

const TaskList = ({todos, remove}) => {

  return todos?.length > 0 ? (
    <ul className="task-list">
      {todos.map((todo) => (
       <div className="task" key={todo.id}>
        <li className="task__list-item">{todo.text}</li>
        <img src={Bin} alt="" className="task__delete-btn" onClick={() => remove(todo.id)}/>
       </div>
        
      ))}
    </ul>
  ) : (
    <div>
      <p>No task</p>
    </div>
  );
};

export default TaskList;
