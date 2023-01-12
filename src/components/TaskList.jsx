import Bin from "./../trash.svg";

const TaskList = ({ todos, remove }) => {
  return todos?.length > 0 ? (
    <ul className="task-list">
      {todos.map((todo) => (
        <div className="task" key={todo.id}>
          <li className="task__list-item">
            {todo.text}
            <img
              src={Bin}
              alt=""
              className="task__delete-btn"
              onClick={() => remove(todo.id)}
            />
          </li>
        </div>
      ))}
    </ul>
  ) : (
    <div>
      <p>No task found</p>
    </div>
  );
};

export default TaskList;
