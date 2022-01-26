function Car(model) {       //this is constructor function
    this.model = model;
}

Car.prototype.DisplayCar = function () {
    return this.model
}
Car.prototype.year = 2019

const car1 = new Car("Balano");
// console.log(car1.DisplayCar());
console.log(car1.year);