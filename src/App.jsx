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
    case "LOCATION":
      return todos.map((v) =>
        v.id === action.targetId ? { ...v, location: action.location } : v
      );
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
  const [pendingMoveId, setPendingMoveId] = useState(null);

  const [emptyCell, setEmptyCell] = useState(Array(16).fill(null));

  const choose = () => {
    let num = Math.ceil(Math.random() * 10);
    return `src/asset/plants/plant${num}.png`;
  };
  const setLocation = () => {
    const copyEmptyCell = emptyCell
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null);

    return parseInt(
      copyEmptyCell[Math.floor(Math.random() * copyEmptyCell.length)]
    );
  };
  const setPlusLocation = () => {
    const usedLocations = gardenTodos
      .map((v) => v.location)
      .filter((v) => v !== null && !Number.isNaN(v));

    const availableLoc = Array(16)
      .fill()
      .map((_, i) => i)
      .filter((loc) => !usedLocations.includes(loc));

    // 빈 칸이 없다면 NaN 리턴
    if (availableLoc.length === 0) return NaN;

    return availableLoc[Math.floor(Math.random() * availableLoc.length)];
  };

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
  const handleLocation = (targetId, location) => {
    dispatch({
      type: "LOCATION",
      targetId: targetId,
      location: location,
    });
    setPendingMoveId(targetId);
  };
  useEffect(() => {
    if (pendingMoveId === null) return;

    const targetTodo = todos.find((v) => v.id === pendingMoveId);
    if (!targetTodo || Number.isNaN(targetTodo.location)) return;

    setGardenTodos((prev) => [...prev, targetTodo]);
    dispatch({ type: "DELETE", targetId: pendingMoveId });

    setCount((c) => c + 1);

    setEmptyCell((prev) =>
      prev.map((v, i) => (i === targetTodo.location ? "filled" : v))
    );

    setPendingMoveId(null);
  }, [todos, pendingMoveId]);
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
          emptyCell={emptyCell}
          setEmptyCell={setEmptyCell}
          choose={choose}
          setLocation={setLocation}
        ></PlantTodo>

        <List
          todos={todos}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleSendToGarden={handleSendToGarden}
          count={count}
          setCount={setCount}
          emptyCell={emptyCell}
          setEmptyCell={setEmptyCell}
          setPlusLocation={setPlusLocation}
          handleLocation={handleLocation}
        ></List>
      </div>
    </div>
  );
}

export default App;
