var Car = /** @class */ (function () {
    function Car(_name, _maxSpeed, _occupancy, _torque) {
        this.name = _name;
        this.maxSpeed = _maxSpeed;
        this.occupancy = _occupancy;
        this.torque = _torque;
    }
    Car.prototype.start = function () {
        console.log(this.name + " started...");
    };
    Car.prototype.stop = function () {
        console.log(this.name + " stopped...");
    };
    Car.prototype.accelerate = function () {
        console.log(this.name + " accelerating to top speed of " + this.maxSpeed);
    };
    return Car;
}());
function onClick() {
    var carName = document.getElementById("carName").nodeValue;
    var carObj = new Car("Tata Nexon", 180, 5, 900);
    carObj.start();
}
