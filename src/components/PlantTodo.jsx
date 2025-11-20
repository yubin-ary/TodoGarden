import { useState } from "react";
import { useRef } from "react";

function PlantTodo({ handleTodo }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  function onSubmit() {
    if (content == "") {
      inputRef.current.focus();
      return;
    }
    handleTodo(content);
    setContent("");
  }
  function onChange(e) {
    setContent(e.target.value);
  }
  function onKeyDown(e) {
    if (e.key == "Enter") {
      handleTodo(content);
      setContent("");
    }
  }
  return (
    <div>
      <input
        ref={inputRef}
        onChange={onChange}
        value={content}
        placeholder="Plant your todos."
        onKeyDown={onKeyDown}
      ></input>
      <button onClick={onSubmit}>심기</button>
    </div>
  );
}
export default PlantTodo;
