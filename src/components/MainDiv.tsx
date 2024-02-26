import Todo from "./Todo";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { success } from "./toasts/succes";
import { failure } from "./toasts/failure";
type TodoState = {
  text: string;
  checked: boolean;
  id: string;
};
const MainDiv = () => {
  const storedData = localStorage.getItem("todos");
  const data = storedData ? JSON.parse(storedData) : [];
  const [todo, setTodo] = useState<TodoState>({
    text: "",
    checked: false,
    id: "",
  });
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const updateTodos = (e: React.MouseEvent) => {
    e.preventDefault();
    success();
    setTodos((prev: TodoState[]) => {
      return [...prev, { ...todo, id: crypto.randomUUID() }];
    });
    setTodo({ text: "", checked: false, id: "" });
  };

  const deleteTodo = (id: string) => {
    failure();
    const filteredArray = todos.filter((todo: TodoState) => todo.id !== id);
    setTodos(filteredArray);
  };

  const finishTodo = (id: string) => {
    const todosItems = todos.map((todo: TodoState) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
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
      {todos.map((todo: TodoState) => {
        return (
          <Todo
            text={todo.text}
            checked={todo.checked}
            key={todo.id}
            id={todo.id}
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
