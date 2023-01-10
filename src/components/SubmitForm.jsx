

const SubmitForm = ({todo, setTodo, todos, setTodos}) => {

const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
    setTodos([...todos, todo]);
    setTodo("");
    }
}

  return (
    <div className="form">
        <form>
      <input
      className="form__todo-input"
      type="text"
      placeholder="Add Task"
      name="todo"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      />
       <button className="form__add-button" onClick={addTodo}>Add</button>
      </form>
     
    </div>
  );
};

export default SubmitForm;
