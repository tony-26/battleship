class ShipPart {
  constructor({ position }) {
    this.position = position;
    this.isDamaged = false;
  }

  attackAt(coords) {
    if (coords[0] === this.position[0] && coords[1] === this.position[1]) {
      this.isDamaged = true;
    }
  }
}
export default ShipPart;
