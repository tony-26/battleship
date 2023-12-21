class Map {
  constructor({ length, width, ships }) {
    this.length = length;
    this.width = width;
    this.ships = ships;
  }

  attackAt(coords) {
    for (let i = 0; i < this.ships.length; i++) {
      this.ships[i].attackAt(coords);
    }
  }
}
export default Map;
