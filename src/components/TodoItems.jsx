import "./todoItems.css";
import PlantButton from "./PlantButton";
import { useState } from "react";
function TodoItems({
  id,
  isDone,
  content,
  date,
  plantType,
  handleDone,
  handleDelete,
  handleSendToGarden,
  emptyCell,
  setEmptyCell,
}) {
  const [done, setDone] = useState(false);
  const onChange = () => {
    handleDone(id);
    setDone(!done);
  };
  const onClick = () => {
    handleDelete(id);
  };
  return (
    <div className="todoItems">
      <input onChange={onChange} checked={isDone} type="checkbox" />

      <div className="content">{content}</div>
      <PlantButton
        id={id}
        done={done}
        handleSendToGarden={handleSendToGarden}
      ></PlantButton>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClick}>𝘅</button>
    </div>
  );
}

export default TodoItems;
