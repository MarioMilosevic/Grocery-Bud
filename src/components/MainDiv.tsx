import Todo from "./Todo";
import { useState } from "react";

type TodoState = {
  text: string;
  checked: boolean;
};
const MainDiv = () => {
  const [todo, setTodo] = useState<TodoState>({
    text: "",
    checked: false,
  });
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    const input = document.querySelector("input");
    const inputValue = input.value;
    setTodo({
      text: inputValue,
      checked: false,
    });
    console.log(todo)
  };

  return (
    <div className="bg-white w-[460px] mx-auto pt-8 pb-10 px-8 rounded-md shadow-sm hover:shadow-lg transition duration-300">
      <h1 className="pb-4 text-2xl text-center">Grocery Bud</h1>
      <div className="flex justify-between rounded-lg pb-6">
        <input
          className="bg-slate-100 w-[70%] px-2 text-sm rounded-md"
          type="text"
        />
        <button
          className="w-[30%] bg-blue-300 text-white text-sm py-1 rounded-md"
          onClick={createTodo}
        >
          Add Item
        </button>
      </div>
      {todos.map((todo) => {
        return <Todo text={todo.text} checked={todo.checked} key={todo} />;
      })}
    </div>
  );
};

export default MainDiv;
