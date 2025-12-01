import TodoItems from "./TodoItems";
import { useState, useRef } from "react";
import "./plantTodo.css";

function PlantTodo({ handleTodo }) {
  const [content, setContent] = useState("");
  const [isComposing, setIsComposing] = useState(false);
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
    if (e.key == "Enter" && !isComposing) {
      if (content === "") {
        inputRef.current.focus();
        return;
      } else {
        const plantType = choose();
        handleTodo(content, plantType);

        setContent("");
      }
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
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      ></input>
      <button onClick={onSubmit}>add</button>
    </div>
  );
}
export default PlantTodo;
