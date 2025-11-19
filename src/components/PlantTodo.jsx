import TodoItems from "./TodoItems";
import { useState } from "react";

function PlantTodo({ handleTodo }) {
  const [content, setContent] = useState();
  function onSubmit() {
    handleTodo(content);
  }
  function onChange(e) {
    setContent(e.target.value);
  }
  return (
    <div>
      <input
        onChange={onChange}
        value={content}
        placeholder="Plant your todos."
      ></input>
      <button onClick={onSubmit}>심기</button>
    </div>
  );
}
export default PlantTodo;
