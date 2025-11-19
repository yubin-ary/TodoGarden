import TodoItems from "./TodoItems";

function List({ todos }) {
  return (
    <div>
      {todos.map((v) => {
        return <TodoItems key={v.id} {...v}></TodoItems>;
      })}
    </div>
  );
}
export default List;
