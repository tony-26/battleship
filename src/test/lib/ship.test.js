import ShipPart from "../../lib/ShipPart";
import Ship from "../../lib/Ship";

describe("ship", () => {
  // it("example1", () => {
  //   const ship1 = new Ship({
  //     parts: [
  //       new ShipPart({ position: [2, 3] }),
  //       new ShipPart({ position: [2, 4] }),
  //     ],
  //   });
  //   expect(ship1.parts.length).toEqual(2);
  // });

  it("example1", () => {
    const ship1 = new Ship({
      parts: ["fake ship part 1", "fake ship part 2"],
    });
    expect(ship1.parts.length).toEqual(2);
  });

  it("example2", () => {
    const ship1 = new Ship({
      parts: [
        new ShipPart({ position: [2, 3] }),
        new ShipPart({ position: [2, 4] }),
      ],
    });
    ship1.attackAt([2, 2]);
    expect(ship1.parts[0].isDamaged).toEqual(false);
    expect(ship1.parts[1].isDamaged).toEqual(false);
  });

  it("example3", () => {
    const ship1 = new Ship({
      parts: [
        new ShipPart({ position: [2, 3] }),
        new ShipPart({ position: [2, 4] }),
      ],
    });
    ship1.attackAt([2, 4]);
    ship1.attackAt([2, 3]);
    expect(ship1.parts[0].isDamaged).toEqual(true);
    expect(ship1.parts[1].isDamaged).toEqual(true);
  });
});
