import Todo from "./Todo";
import { useState, useEffect } from "react";

type TodoState = {
  text: string;
  checked: boolean;
};
const MainDiv = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState<TodoState>({ text: "", checked: false });
  const [todos, setTodos] = useState([]);

  // useEffect(() => {}, [todo]);

  const createTodo = (e) => {
    const value = e.target.value
    setInputValue(value)
    setTodo({ text: value, checked: false });
  };

  const updateTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({text:'', checked:false})
    setInputValue("");
  };

  return (
    <div className="bg-white w-[460px] mx-auto pt-8 pb-10 px-8 rounded-md shadow-sm hover:shadow-lg transition duration-300">
      <h1 className="pb-4 text-2xl text-center">Grocery Bud</h1>
      <form className="flex justify-between rounded-lg pb-6">
        <input
          className="bg-slate-100 w-[70%] px-2 text-sm rounded-md"
          type="text"
          value={inputValue}
          onChange={createTodo}
        />
        <button
          className="w-[30%] bg-blue-300 text-white text-sm py-1 rounded-md"
          onClick={updateTodos}
        >
          Add Item
        </button>
      </form>
      {todos.map((todo, index) => {
        return <Todo text={todo.text} checked={todo.checked} key={index} />;
      })}
    </div>
  );
};

export default MainDiv;
