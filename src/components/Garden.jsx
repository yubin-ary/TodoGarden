import "./Garden.css";

function Garden({ gardenTodos }) {
  return (
    <div className="garden">
      <div className="plants">
        {gardenTodos.map((v) => {
          return (
            <div
              className="gardenItem"
              key={v.id}
              style={{
                gridRow: Math.floor(v.location / 8) + 1,
                gridColumn: (v.location % 8) + 1,
              }}
            >
              <img key={v.id} className="plantPic" src={v.plantType}></img>
              <div className="name">
                <div className="text">{v.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Garden;
