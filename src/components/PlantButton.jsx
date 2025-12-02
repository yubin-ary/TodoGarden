const PlantButton = ({ id, done, handleSendToGarden }) => {
  const onClick = () => {
    handleSendToGarden(id);
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
