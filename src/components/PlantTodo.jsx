import TodoItems from "./TodoItems";
import { useState, useRef } from "react";
import "./plantTodo.css";

function PlantTodo({ handleTodo }) {
  const [content, setContent] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [emptyCell, setEmptyCell] = useState(Array(16).fill(null));
  const inputRef = useRef();

  const choose = () => {
    let num = Math.ceil(Math.random() * 10);
    return `src/asset/plants/plant${num}.png`;
  };
  const setLocation = () => {
    const copyEmptyCell = emptyCell
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null);
    console.log(copyEmptyCell);
    return parseInt(
      copyEmptyCell[Math.floor(Math.random() * copyEmptyCell.length)]
    );
  };

  function onChange(e) {
    setContent(e.target.value);
  }
  function onSubmit() {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    const plantType = choose();
    const location = setLocation();

    handleTodo(content, plantType, location);
    setEmptyCell(emptyCell.map((v, i) => (i === location ? "filled" : null)));

    setContent("");
  }
  const onKeyDown = (e) => {
    if (e.key == "Enter" && !isComposing) {
      if (content === "") {
        inputRef.current.focus();
        return;
      } else {
        const plantType = choose();
        const location = setLocation();

        handleTodo(content, plantType, location);
        setEmptyCell(
          emptyCell.map((v, i) => (i === location ? "filled" : null))
        );

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
