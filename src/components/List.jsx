import TodoItems from "./TodoItems";
import { useState } from "react";
import "./List.css";
function List({
  todos,
  handleDone,
  handleDelete,
  handleSendToGarden,
  count,
  setCount,
}) {
  const [searchWord, setSearchWord] = useState("");
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };
  const getFilteredToDos = (word) => {
    return todos.filter((v) =>
      v.content.toLowerCase().includes(word.toLowerCase())
    );
  };
  const filteredTodo = getFilteredToDos(searchWord);

  return (
    <div className="list">
      <h3>Todo List 🔖</h3>
      <input onChange={onChange} placeholder="Search..."></input>
      <div className="todoWrapper">
        {filteredTodo.map((v) => {
          return (
            <TodoItems
              key={v.id}
              {...v}
              handleDone={handleDone}
              handleDelete={handleDelete}
              handleSendToGarden={handleSendToGarden}
              count={count}
              setCount={setCount}
            ></TodoItems>
          );
        })}
      </div>
    </div>
  );
}
export default List;
