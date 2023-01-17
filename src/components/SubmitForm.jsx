const SubmitForm = ({ todo, setTodo, addTodo}) => {

  return (
    <div className="form">
      <form className="form-1">
        <input
          className="form__todo-input"
          type="text"
          placeholder="Add Task"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="form__add-button" onClick={addTodo}>
          +
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
