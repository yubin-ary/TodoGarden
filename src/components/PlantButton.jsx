const PlantButton = ({ id, done, handleSendToGarden, count, setCount }) => {
  const onClick = () => {
    if (count < 16) {
      handleSendToGarden(id);
      setCount(count + 1);
    } else {
      console.log("꺼져");
    }
  };
  if (done == true) {
    return (
      <button className="pButton" onClick={onClick}>
        Plant
      </button>
    );
  }
};
export default PlantButton;
