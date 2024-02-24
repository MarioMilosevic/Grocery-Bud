const Todo = () => {
  return (
    <article className="flex justify-between">
      <div className="flex gap-2">
        <input type="checkbox" />
        <p className="text-sm">Odje ce da primi stejt preko propsa</p>
      </div>
      <button className="text-sm bg-gray-900 text-white px-1 rounded-sm">
        Delete
      </button>
    </article>
  );
};

export default Todo;
