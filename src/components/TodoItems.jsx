import "./todoItems.css";
function TodoItems({ id, isDone, content, date, handleDone, handleDelete }) {
  const onChange = () => {
    handleDone(id);
  };
  const onClick = () => {
    handleDelete(id);
  };
  return (
    <div className="todoItems">
      <input onChange={onChange} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClick}>𝘅</button>
    </div>
  );
}

export default TodoItems;
