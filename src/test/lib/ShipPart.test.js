import ShipPart from "../../lib/ShipPart";
describe("part", () => {
  it("example1", () => {
    const part1 = new ShipPart({ position: [1, 5] });
    expect(part1.position).toEqual([1, 5]);
    expect(part1.isDamaged).toEqual(false);
  });
});
