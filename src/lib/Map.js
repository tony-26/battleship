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
  checkForShipPart(x, y) {
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];
      if (ship.hasPartAt(x, y)) {
        return true;
      }
    }
    return false;
  }
}
export default Map;
