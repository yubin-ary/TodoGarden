function TodoItems({ id, isDone, content }) {
  return (
    <div>
      <button type="checkbox"></button>
      <div>{content}</div>
      <button onClick={onClick}>삭제</button>
    </div>
  );
}

export default TodoItems;
