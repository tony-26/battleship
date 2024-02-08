import "./App.css";
import Ship from "./lib/Ship";
import ShipPart from "./lib/ShipPart";
import Map from "./lib/Map";
import { useState } from "react";
import getMapInfor from "./lib/getMapInfor";

const map1 = new Map({
  length: 8,
  width: 8,
  ships: [
    new Ship({
      parts: [
        new ShipPart({ position: [1, 1] }),
        new ShipPart({ position: [1, 2] }),
        new ShipPart({ position: [1, 3] }),
      ],
    }),
    new Ship({
      parts: [
        new ShipPart({ position: [4, 4] }),
        new ShipPart({ position: [4, 5] }),
      ],
    }),
    new Ship({
      parts: [
        new ShipPart({ position: [7, 6] }),
        new ShipPart({ position: [6, 6] }),
        new ShipPart({ position: [5, 6] }),
        new ShipPart({ position: [4, 6] }),
      ],
    }),
  ],
});

function App() {
  const [mapInfor, setMapInfor] = useState(getMapInfor(map1));
  const [clickCount, setClickCount] = useState(0);
  const [allShipsHit, setAllShipsHit] = useState(false);

  let totalShipParts = 0;
  for (let i = 0; i < map1.ships.length; i++) {
    totalShipParts += map1.ships[i].parts.length;
  }

  const hitHandler = (e, f) => {
    const key = `${e}_${f}`;
    const isShipPart = map1.checkForShipPart(e, f);
    let newColor;
    if (isShipPart) {
      newColor = "yellow";
      const hitCount =
        Object.values(mapInfor).filter((color) => color === "yellow").length +
        1;
      if (hitCount === totalShipParts) {
        setAllShipsHit(true); 
      }
    } else {
      newColor = "red";
    }

    setMapInfor((prevMapInfor) => ({
      ...prevMapInfor,
      [key]: newColor,
    }));

    setClickCount(clickCount + 1);
  };

  return (
    <div style={{ height: "640px", width: "640px", backgroundColor: "grey" }}>
      {allShipsHit && (
        <h2>You have hit all the ships, you sent {clickCount} missiles</h2>
      )}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
        return [1, 2, 3, 4, 5, 6, 7, 8].map((f) => {
          const key = `${e}_${f}`;
          let squareColor = mapInfor[key] ? mapInfor[key] : "blue";
          return (
            <button
              key={f}
              style={{
                height: "75px",
                width: "75px",
                backgroundColor: squareColor,
                border: "2px solid red",
                display: "inline-block",
                color: "white",
              }}
              onClick={() => hitHandler(e, f)}
            >
              {e},{f}
            </button>
          );
        });
      })}
    </div>
  );
}

export default App;
