class Ship {
  constructor({ parts }) {
    this.parts = parts;
  }
  attackAt(coords) {
    for (let i = 0; i < this.parts.length; i++) {
      this.parts[i].attackAt(coords);
    }
  }
}
export default Ship;
