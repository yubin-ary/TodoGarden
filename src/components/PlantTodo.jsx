import TodoItems from "./TodoItems";
import { useState, useRef } from "react";
import "./plantTodo.css";

function PlantTodo({ handleTodo }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const choose = () => {
    let num = Math.ceil(Math.random() * 10);
    return `src/asset/plants/plant${num}.png`;
  };

  function onSubmit() {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    const plantType = choose();
    handleTodo(content, plantType);

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
      const plantType = choose();
      handleTodo(content, plantType);

      setContent("");
    }
  };
  return (
    <div className="editor">
      <input
        ref={inputRef}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={content}
        placeholder="Plant your todos."
      ></input>
      <button onClick={onSubmit}>add</button>
    </div>
  );
}
export default PlantTodo;
