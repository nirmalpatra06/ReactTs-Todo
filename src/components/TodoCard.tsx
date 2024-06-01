import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";

import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDoneOutline } from "react-icons/md";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? todo.isCompleted === false
            ? { ...todo, isCompleted: true }
            : { ...todo, isCompleted: false }
          : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    if (editTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: editTodo } : todo
        )
      );
    }
    setEdit(false);
  };
  // console.log(todos);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className={`${
        todo.isCompleted && "bg-green-800"
      } text-white w-[300px] lg:w-[350px] bg-gray-600 rounded p-3`}
    >
      <div className="flex justify-between items-center gap-4 w-full">
        {edit ? (
          <input
            ref={inputRef}
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="text-black p-1 outline-none rounded"
          />
        ) : (
          <span
            className={`${
              todo.isCompleted && "line-through"
            } w-[75%] text-xl lg:text-2xl overflow-hidden`}
          >
            {todo.todo}
          </span>
        )}

        <div className="flex justify-evenly gap-2">
          {todo.isCompleted === false && (
            <span
              className="cursor-pointer"
              onClick={() => {
                edit === false && setEdit(true);
              }}
            >
              <FiEdit size={20} />
            </span>
          )}
          <span
            className="cursor-pointer"
            onClick={() => handleDelete(todo.id)}
          >
            <MdDelete size={20} />
          </span>
          {edit === false && (
            <span
              className="cursor-pointer"
              onClick={() => handleDone(todo.id)}
            >
              <MdDoneOutline
                size={20}
                className={`${todo.isCompleted && "text-green-300"}`}
              />
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default TodoCard;
