const car = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const car_more = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}


const myCar = {
    ...car,
    ...car_more
}

console.log(myCar);

/*
spreed_operator>node with_objects.js
{
  brand: 'Ford',
  model: 'Mustang',
  color: 'yellow',
  type: 'car',
  year: 2021
}

*/