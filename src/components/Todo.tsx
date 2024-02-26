const Todo = ({ text, deleteTodo, id, finishTodo, checked }) => {
  return (
    <article id={id} className="flex justify-between pb-2">
      <div className="flex gap-2">
        <input type="checkbox" onChange={finishTodo} />
        <p className={`text-sm ${checked ? "line-through" : ""}`}>{text}</p>
      </div>
      <button
        onClick={deleteTodo}
        className="text-sm bg-gray-900 text-white px-1 rounded-sm"
      >
        Delete
      </button>
    </article>
  );
};

export default Todo;
