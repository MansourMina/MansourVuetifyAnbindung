/* eslint-disable eqeqeq */
let cars = require('./cars');

function getCars() {
  return cars;
}
function getCar(id) {
  return cars.filter((el) => el.id === Number(id));
}

function updateStatus(id, title) {
  const car = cars.find((el) => el.id == id);
  if (car) {
    car.title = title;
    return {
      resp: `Car with the id ${id} changed`,
      status: 200,
    };
  }
  return {
    resp: `Car with the id ${id} was not found`,
    status: 404,
  };
}

function deleteCar(id) {
  const car = cars.find((el) => el.id == id);
  if (car) {
    cars = cars.filter((el) => el.id != id);
    return {
      resp: `Car with the id ${id} deleted`,
      status: 200,
    };
  }
  return {
    resp: `Car with the id ${id} was not found`,
    status: 404,
  };
}

function addCar(body) {
  const allIds = cars.map((el) => el.id);
  console.log(allIds);
  const max = Math.max(...allIds) + 1;

  // eslint-disable-next-line no-param-reassign
  body.id = max;
  cars.push(body);
  return {
    resp: `Car with the id ${max} added`,
    status: 404,
  };
}

module.exports = { getCars, updateStatus, deleteCar, addCar, getCar };
