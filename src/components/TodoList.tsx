import React from "react";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="w-full bg-gray-800 flex justify-center">
      <div className="flex w-[90%] justify-evenly flex-wrap items-center gap-6">
        {todos.map((stodo) => (
          <TodoCard
            key={stodo.id}
            todo={stodo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
