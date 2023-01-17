import Bin from "./../images/trash.svg";
import Edit from "./../images//edit.svg";
import Check from "./../images/check.svg";
import { useState } from "react";

const TaskList = ({ todos, remove, setTodos }) => {
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const updateTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodo(null);
    setEditText("");
  };

  return todos?.length > 0 ? (
    <ul className="task-list">
      {todos.map((todo) => (
        <div className="task" key={todo.id}>
          <li className="task__list-item">
            {editTodo === todo.id ? (
              <input
                type="text"
                className="task__edit-input"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
              />
            ) : (
              <span>{todo.text}</span>
            )}

            <span className="task__buttons">
              {editTodo === todo.id ? (
                <img
                  src={Check}
                  alt=""
                  className="task__submit-btn"
                  onClick={() => updateTodo(todo.id)}
                />
              ) : (
                <img
                  src={Edit}
                  alt=""
                  className="task__edit-btn"
                  onClick={() => setEditTodo(todo.id)}
                />
              )}

              <img
                src={Bin}
                alt=""
                className="task__delete-btn"
                onClick={() => remove(todo.id)}
              />
            </span>
          </li>
        </div>
      ))}
    </ul>
  ) : (
    <div>
      <p className="task__no-task-text">No task found</p>
    </div>
  );
};

export default TaskList;
