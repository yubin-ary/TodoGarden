import { useState } from "react";
import Header from "./components/Header";
import PlantTodo from "./components/PlantTodo";
import Garden from "./components/Garden";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <PlantTodo></PlantTodo>
      <Garden></Garden>
    </>
  );
}

export default App;
