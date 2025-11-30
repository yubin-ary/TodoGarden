import { useState, useRef, useReducer } from "react";
import Header from "./components/Header";
import PlantTodo from "./components/PlantTodo";
import List from "./components/List";
import Garden from "./components/Garden";
import "./App.css";

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((v) =>
        v.id === action.targetId ? { ...v, isDone: !v.isDone } : v
      );
    case "DELETE":
      return todos.filter((v) => v.id != action.targetId);
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [gardenTodos, setGardenTodos] = useState([]);
  const idRef = useRef("1");
  function handleTodo(content, plantType) {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: `${content}`,
        date: new Date().getTime(),
        plantType: `${plantType}`,
      },
    });
  }

  const handleDone = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const handleDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  const handleSendToGarden = (targetId) => {
    setGardenTodos(
      [...gardenTodos].concat(todos.filter((v) => v.id === targetId))
    );
    /*setTodos(
      todos.filter((v) => {
        v.id != targetId;
      })
    );*/
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
          handleSendToGarden={handleSendToGarden}
        ></List>
      </div>
      <div className="gardenPart">
        <Garden gardenTodos={gardenTodos}></Garden>
      </div>
    </div>
  );
}

export default App;
