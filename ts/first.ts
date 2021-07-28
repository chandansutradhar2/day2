function objectFun() {
  const car = {
    type: "hatchback",
    name: "DeZire",
    maxSpeed: 120,
    start() {
      //method..not function
      console.log("car started");
    },
    stop() {
      console.log("car stopped");
    },
  };
  console.log(car.name);
  console.log(car.type);
  console.log(car.maxSpeed);
  car.start();
  car.stop();
}
