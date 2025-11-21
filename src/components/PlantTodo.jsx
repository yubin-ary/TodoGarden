import TodoItems from "./TodoItems";
import { useState, useRef } from "react";

function PlantTodo({ handleTodo }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  function onSubmit() {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    handleTodo(content);
    setContent("");
  }
  function onChange(e) {
    setContent(e.target.value);
  }
  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      if (content === "") {
        inputRef.current.focus();
        return;
      }
      handleTodo(content);
      setContent("");
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={content}
        placeholder="Plant your todos."
      ></input>
      <button onClick={onSubmit}>심기</button>
    </div>
  );
}
export default PlantTodo;
