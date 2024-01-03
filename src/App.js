import "./App.css";
import Ship from "./lib/Ship";
import ShipPart from "./lib/ShipPart";
import Map from "./lib/Map";
import { useState } from "react";

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
  const [map, setMap] = useState(map1);
  return (
    <div style={{ height: "640px", width: "640px", backgroundColor: "grey" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => {
        return [1, 2, 3, 4, 5, 6, 7, 8].map((f, j) => {
          let squareColor = "blue";
          for (let h = 0; h < map.ships.length; h++) {
            for (let k = 0; k < map.ships[h].parts.length; k++) {
              console.log(map.ships[h].parts[k]);
              if (
                map.ships[h].parts[k].position[0] === i &&
                map.ships[h].parts[k].position[1] === j
              ) {
                squareColor = "green";
              }
            }
          }

          return (
            <div
              key={f}
              style={{
                height: "75px",
                width: "75px",
                backgroundColor: squareColor,
                border: "2px solid red",
                display: "inline-block",
                color: "white",
              }}
            >
              {i},{j}
            </div>
          );
        });
      })}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return (
          <div
            key={i}
            style={{
              height: "75px",
              width: "75px",
              backgroundColor: "blue",
              border: "2px solid red",
              display: "inline-block",
              color: "white",
            }}
          >
            (1, {i})
          </div>
        );
      })}

      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return (
          <div
            key={i}
            style={{
              height: "75px",
              width: "75px",
              backgroundColor: "blue",
              border: "2px solid red",
              display: "inline-block",
              color: "white",
            }}
          >
            (2, {i})
          </div>
        );
      })}

      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return (
          <div
            key={i}
            style={{
              height: "75px",
              width: "75px",
              backgroundColor: "blue",
              border: "2px solid red",
              display: "inline-block",
              color: "white",
            }}
          >
            (3, {i})
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
