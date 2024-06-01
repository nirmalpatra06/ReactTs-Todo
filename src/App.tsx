import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo)
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
    setTodo("");
  };
  // console.log(todos);

  return (
    <div className="bg-gray-800 w-full h-screen">
      <div className="pt-10 flex flex-col items-center gap-4">
        <h1 className="flex justify-center font-bold text-3xl lg:text-5xl text-gray-300">
          To-Do
        </h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
