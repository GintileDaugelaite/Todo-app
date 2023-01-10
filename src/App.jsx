import "./App.scss";
import { useState } from "react";
import SubmitForm from "./components/SubmitForm";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos,setTodos] = useState([]);

  return (
    <div className="wrapper">
      <SubmitForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
      <Task />
      <TaskList todos={todos}/>
    </div>
  );
};

export default App;
