class Ship {
  constructor({ parts }) {
    this.parts = parts;
  }
  attackAt(coords) {
    for (let i = 0; i < this.parts.length; i++) {
      this.parts[i].attackAt(coords);
    }
  }
  hasPartAt(x, y) {
    for (let i = 0; i < this.parts.length; i++) {
      const part = this.parts[i];
      // Check if the current position matches the given coordinates
      if (part.position[0] === x && part.position[1] === y) {
        return true;
      }
    }
    return false;
  }
}
export default Ship;
