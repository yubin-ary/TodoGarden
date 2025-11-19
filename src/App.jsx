import { useState } from "react";
import Header from "./components/Header";
import PlantTodo from "./components/PlantTodo";
import List from "./components/List";
import Garden from "./components/Garden";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  function handleTodo(content) {
    let value = {
      id: new Date().getTime(),
      isDone: false,
      content: `${content}`,
    };

    setTodos([value, ...todos]);
  }

  return (
    <>
      <Header></Header>
      <PlantTodo handleTodo={handleTodo}></PlantTodo>
      <List todos={todos}></List>
      <Garden></Garden>
    </>
  );
}

export default App;
