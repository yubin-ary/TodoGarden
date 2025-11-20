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
  function handleIsDone(id, checked) {
    let coppy = [...todos];
    let doneNum = coppy.findIndex((v) => {
      return (v.id = `${id}`);
    });
    coppy[doneNum].isDone = checked;
    console.log(coppy[doneNum].isDone);
    console.log(checked);
    setTodos(coppy);
  }
  function handleDelete(id) {
    setTodos(
      [...todos].filter((v) => {
        v.id !== id;
      })
    );
  }

  return (
    <>
      <Header></Header>
      <PlantTodo handleTodo={handleTodo}></PlantTodo>
      <List
        todos={todos}
        handleDelete={handleDelete}
        handleIsDone={handleIsDone}
      ></List>
      <Garden></Garden>
    </>
  );
}

export default App;
