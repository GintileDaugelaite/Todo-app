import "./App.scss";
import SubmitForm from "./components/SubmitForm";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <SubmitForm />
      <Task />
      <TaskList />
    </>
  );
};

export default App;
