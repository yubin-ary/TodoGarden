const ResetButton = ({
  count,
  setCount,
  setGardenTodos,
  isReset,
  setIsReset,
}) => {
  const onClick = () => {
    setGardenTodos([]);
    setIsReset(!isReset);
    setCount(0);
  };
  return count >= 16 ? (
    <button onClick={onClick} className="resetButton">
      Reset Garden
    </button>
  ) : null;
};
export default ResetButton;
