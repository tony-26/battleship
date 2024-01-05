const getMapInfor = (map) => {
  const result = {};
  for (let i = 0; i < map.ships.length; i++) {
    for (let k = 0; k < map.ships[i].parts.length; k++) {
      const key =
        map.ships[i].parts[k].position[0].toString() +
        "_" +
        map.ships[i].parts[k].position[1].toString();
      if (map.ships[i].parts[k].isDamaged) {
        result[key] = "red";
      } else {
        result[key] = "green";
      }
    }
  }
  return result;
};
export default getMapInfor;
