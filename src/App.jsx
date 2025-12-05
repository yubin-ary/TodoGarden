import { useState, useRef, useReducer, useEffect } from "react";
import Header from "./components/Header";
import PlantTodo from "./components/PlantTodo";
import List from "./components/List";
import Garden from "./components/Garden";
import ResetButton from "./components/ResetButton";
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
  const [isReset, setIsReset] = useState(false);
  const toggleResetApp = () => {
    setIsReset(!isReset);
  };
  const idRef = useRef("1");
  const [count, setCount] = useState(0);
  function handleTodo(content, plantType, location) {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: `${content}`,
        date: new Date().getTime(),
        plantType: `${plantType}`,
        location: location,
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
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="todoPart">
        <div className="gardenPart">
          <Garden gardenTodos={gardenTodos}></Garden>
          <ResetButton
            count={count}
            setCount={setCount}
            setGardenTodos={setGardenTodos}
            isReset={isReset}
            setIsReset={setIsReset}
          ></ResetButton>
        </div>
        <PlantTodo
          handleTodo={handleTodo}
          isReset={isReset}
          setIsReSet={setIsReset}
        ></PlantTodo>

        <List
          todos={todos}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleSendToGarden={handleSendToGarden}
          count={count}
          setCount={setCount}
        ></List>
      </div>
    </div>
  );
}

export default App;
