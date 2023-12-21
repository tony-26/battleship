import Ship from "../../lib/Ship";
import ShipPart from "../../lib/ShipPart";
import Map from "../../lib/Map";

describe("map", () => {
  it("example1", () => {
    const map1 = new Map({
      length: 5,
      width: 6,
      ships: [
        new Ship({
          parts: [
            new ShipPart({ position: [2, 3] }),
            new ShipPart({ position: [2, 4] }),
          ],
        }),

        new Ship({
          parts: [
            new ShipPart({ position: [1, 2] }),
            new ShipPart({ position: [1, 3] }),
          ],
        }),
      ],
    });
    map1.attackAt([1, 1]);
    expect(map1.ships[0].parts[0].isDamaged).toEqual(false);
    map1.attackAt([2, 3]);
    console.log(map1.ships[0]);
    expect(map1.ships[0].parts[0].isDamaged).toEqual(true);
  });
});
