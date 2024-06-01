import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // console.log(todo);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="flex flex-row items-center w-[400px] lg:w-[500px] relative"
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a Task"
        className="p-2 lg:p-3 rounded-xl text-xl lg:text-2xl w-full outline-none border text-white focus:bg-transparent focus:border-red-500 focus:border "
      />
      <button
        type="submit"
        className="bg-blue-700 p-1 lg:p-2 text-xl rounded-full  text-white border border-gray-700 absolute right-0 mr-1 hover:bg-blue-600 active:scale-90 transition-all duration-100"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
