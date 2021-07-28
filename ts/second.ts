class Car {
  name: string;
  maxSpeed: number;
  occupancy: number;
  torque: number;

  constructor(
    _name: string,
    _maxSpeed: number,
    _occupancy: number,
    _torque: number
  ) {
    this.name = _name;
    this.maxSpeed = _maxSpeed;
    this.occupancy = _occupancy;
    this.torque = _torque;
  }

  start() {
    console.log(`${this.name} started...`);
  }

  stop() {
    console.log(`${this.name} stopped...`);
  }

  accelerate() {
    console.log(`${this.name} accelerating to top speed of ${this.maxSpeed}`);
  }
}

function onClick() {
  let carName = document.getElementById("carName").nodeValue;
  const carObj = new Car("Tata Nexon", 180, 5, 900);

  carObj.start();
}
