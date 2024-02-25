import Todo from "./Todo";
import { useState } from "react";

type TodoState = {
  text: string;
  checked: boolean;
};
const MainDiv = () => {
  const [todo, setTodo] = useState<TodoState>({ text: "", checked: false });
  const [todos, setTodos] = useState([]);

  const updateTodos = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, todo];
    });
    setTodo({ text: "", checked: false });
  };

  const deleteTodo = (e) => {
    const target = Number(e.target.parentElement.id);
    const filteredArray = todos.filter((el, index) => index !== target);
    setTodos(filteredArray);
  };

  const finishTodo = (e) => { 
    setTodo((prev) => ({ ...prev, checked: e.target.checked }))
  }

  console.log(todo)

  return (
    <div className="bg-white w-[460px] mx-auto pt-8 pb-10 px-8 rounded-md shadow-sm hover:shadow-lg transition duration-300">
      <h1 className="pb-4 text-2xl text-center">Grocery Bud</h1>
      <form className="flex justify-between rounded-lg pb-6">
        <input
          className="bg-slate-100 w-[70%] px-2 text-sm rounded-md"
          name="inputValue"
          type="text"
          value={todo.text}
          onChange={(e) =>
            setTodo((prev) => ({ ...prev, text: e.target.value }))
          }
        />
        <button
          className="w-[30%] bg-blue-300 text-white text-sm py-1 rounded-md"
          onClick={updateTodos}
        >
          Add Item
        </button>
      </form>
      {todos.map((todo, index) => {
        return (
          <Todo
            text={todo.text}
            checked={todo.checked}
            key={index}
            id={index}
            deleteTodo={deleteTodo}
            finishTodo = {finishTodo}
          />
        );
      })}
    </div>
  );
};

export default MainDiv;
