import "./Garden.css";

function Garden({ gardenTodos }) {
  return (
    <div className="garden">
      <div className="plants">
        {gardenTodos.map((v) => {
          return (
            <div className="gardenItem" key={v.id}>
              <img key={v.id} className="plantPic" src={v.plantType}></img>
              <div className="name">{v.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Garden;
