import TodoItems from "./TodoItems";
import { useState, useRef, useEffect } from "react";
import "./plantTodo.css";

function PlantTodo({
  handleTodo,
  isReset,
  setIsReSet,
  emptyCell,
  setEmptyCell,
  choose,
  setLocation,
}) {
  const [content, setContent] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (isReset) {
      setIsReSet(!isReset);
    }
  }, [isReset]);

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
    setEmptyCell(emptyCell.map((v, i) => (i === location ? "filled" : v)));

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
        setEmptyCell(emptyCell.map((v, i) => (i === location ? "filled" : v)));

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
