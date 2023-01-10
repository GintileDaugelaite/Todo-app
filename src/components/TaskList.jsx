import Task from "./Task";

const TaskList = ({todos}) => {

    return(
 todos?.length > 0 ? ( <ul className="task-list">
            {
                todos.map((todo, index) => <Task todo={todo} key={index}/>)
            }
        </ul>
        ) : (
            <div>
                <p>No task found</p>
            </div>
        )
    )
  };
  
  export default TaskList;