import TodoItems from "./TodoItems";

function List({ todos, handleDone }) {
  return (
    <div>
      {todos.map((v) => {
        return (
          <TodoItems key={v.id} {...v} handleDone={handleDone}></TodoItems>
        );
      })}
    </div>
  );
}
export default List;
