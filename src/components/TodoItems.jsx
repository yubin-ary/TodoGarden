import "./todoItems.css";
import PlantButton from "./PlantButton";
import { useState } from "react";
function TodoItems({
  id,
  isDone,
  content,
  date,
  plantType,
  location,
  handleDone,
  handleDelete,
  handleSendToGarden,
  count,
  setCount,
  emptyCell,
  setEmptyCell,
  setPlusLocation,
  handleLocation = { handleLocation },
}) {
  const [done, setDone] = useState(false);
  const onChange = () => {
    handleDone(id);
    setDone(!done);
  };
  const onClick = () => {
    handleDelete(id);
    setEmptyCell(emptyCell.map((v, i) => (i == location ? null : v)));
  };
  return (
    <div className="todoItems">
      <input onChange={onChange} checked={isDone} type="checkbox" />

      <div className="content">{content}</div>
      <PlantButton
        id={id}
        done={done}
        location={location}
        handleSendToGarden={handleSendToGarden}
        count={count}
        setCount={setCount}
        emptyCell={emptyCell}
        setEmptyCell={setEmptyCell}
        setPlusLocation={setPlusLocation}
        handleLocation={handleLocation}
      ></PlantButton>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClick}>𝘅</button>
    </div>
  );
}

export default TodoItems;
