import Bin from "./../trash.svg"

const Task = ({ todo }) => {
  return (
    todo && <div className="task">
      <li className="task__list-item">
        {todo}
        </li>
        <img src={Bin} alt="" className="task__delete-btn" />
      
    </div>
  );
};

export default Task;
