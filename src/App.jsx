import "./App.scss";
import { useState } from "react";
import SubmitForm from "./components/SubmitForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    };

    if (todo !== "") {
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="wrapper">
      <SubmitForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TaskList todos={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;
