const PlantButton = ({
  id,
  done,
  location,
  setPlusLocation,
  handleLocation,
}) => {
  const onClick = () => {
    const isEmptyLocation =
      location === null ||
      location === undefined ||
      location === "" ||
      Number.isNaN(Number(location));

    if (isEmptyLocation) {
      const newLoc = setPlusLocation();
      handleLocation(id, newLoc);
    } else {
      handleLocation(id, Number(location));
    }
  };

  if (done === true) {
    return (
      <button className="pButton" onClick={onClick}>
        Plant
      </button>
    );
  }
  return null;
};

export default PlantButton;
