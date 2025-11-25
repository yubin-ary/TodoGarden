import { useState, useRef } from "react";
import Header from "./components/Header";
import PlantTodo from "./components/PlantTodo";
import List from "./components/List";
import Garden from "./components/Garden";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(1);
  function handleTodo(content) {
    let value = {
      id: idRef.current++,
      isDone: false,
      content: `${content}`,
      date: new Date().getTime(),
    };

    setTodos([value, ...todos]);
  }
  const handleDone = (targetId) => {
    setTodos(
      todos.map((v) => (v.id === targetId ? { ...v, isDone: !v.isDone } : v))
    );
  };
  const handleDelete = (targetId) => {
    setTodos(todos.filter((v) => v.id != targetId));
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="todoPart">
        <PlantTodo handleTodo={handleTodo}></PlantTodo>
        <List
          todos={todos}
          handleDone={handleDone}
          handleDelete={handleDelete}
        ></List>
      </div>
      <div className="gardenPart">
        <Garden></Garden>
      </div>
    </div>
  );
}

export default App;
