import Todo from "./Todo";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { success } from "./toasts/succes";
import { failure } from "./toasts/failure";
type TodoState = {
  text: string;
  checked: boolean;
};
const MainDiv = () => {
  const [todo, setTodo] = useState<TodoState>({ text: "", checked: false });
  const [todos, setTodos] = useState([]);
  console.log(todos);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // useEffect(() => {
  //   const data = localStorage.getItem("todos");
  //   data ? JSON.parse(data) : [];
  // }, []);

  // localStorage.setItem('todos', todos)
  const updateTodos = (e) => {
    e.preventDefault();
    success();
    setTodos((prev) => {
      return [...prev, todo];
    });
    setTodo({ text: "", checked: false });
  };

  // console.log(localStorage.getItem('todos'))

  const deleteTodo = (e) => {
    failure();
    const target = Number(e.target.parentElement.id);
    const filteredArray = todos.filter((el, index) => index !== target);
    setTodos(filteredArray);
  };

  const finishTodo = (e) => {
    const target = e.target.closest("article");
    const id = Number(target.id);
    const todosItems = todos.map((todo, index) =>
      index === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(todosItems);
  };

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
            finishTodo={finishTodo}
          />
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default MainDiv;
