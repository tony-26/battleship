import getMapInfor from "../../lib/getMapInfor";
import Ship from "../../lib/Ship";
import ShipPart from "../../lib/ShipPart";
import Map from "../../lib/Map";

describe("map", () => {
  it("example1", () => {
    const map1 = new Map({
      length: 4,
      width: 4,
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
    map1.ships[0].parts[0].isDamaged = true;
    map1.ships[0].parts[1].isDamaged = true;
    const result = getMapInfor(map1);
    const expected = {
      "1_2": "green",
      "1_3": "green",
      "2_3": "red",
      "2_4": "red",
    };
    expect(result).toEqual(expected);
  });
});
