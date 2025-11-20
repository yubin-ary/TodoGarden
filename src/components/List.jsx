import TodoItems from "./TodoItems";

function List({ todos, handleDelete, handleIsDone }) {
  return (
    <div>
      {todos.map((v) => {
        return (
          <TodoItems
            key={v.id}
            {...v}
            handleDelete={handleDelete}
            handleIsDone={handleIsDone}
          ></TodoItems>
        );
      })}
    </div>
  );
}
export default List;
