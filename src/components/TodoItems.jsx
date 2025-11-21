function TodoItems({ id, isDone, content, date, handleDone }) {
  const onChange = () => {
    handleDone(id);
  };
  return (
    <div>
      <input onChange={onChange} checked={isDone} type="checkbox" />
      <div>{content}</div>
      <div>{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
}

export default TodoItems;
