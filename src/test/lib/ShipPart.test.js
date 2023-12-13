import ShipPart from "../../lib/ShipPart";
describe("part", () => {
  it("example1", () => {
    const part1 = new ShipPart({ position: [1, 5] });
    expect(part1.position).toEqual([1, 5]);
    expect(part1.isDamaged).toEqual(false);
  });

  it("example2", () => {
    const part = new ShipPart({ position: [2, 6] });
    part.attackAt([2, 5]);
    expect(part.isDamaged).toEqual(false);
    part.attackAt([2, 6]);
    expect(part.isDamaged).toEqual(true);
  });
});
