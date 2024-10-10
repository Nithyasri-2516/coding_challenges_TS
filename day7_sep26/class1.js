// Question : 1 Define a class CARRENTAL with the following details :
// Class Members are : CarId of int type, CarType of string type and Rent of float type.
// Define GetCar() method which accepts CarId and CarType.
// GetRent() method which return rent of the car on the basis of car type, i.e. Small Car = 1000, Van = 800, SUV = 2500
// ShowCar() method which allow user to view the contents of cars i.e. id, type and rent.
var CarRental = /** @class */ (function () {
    function CarRental(carId, carType) {
        this.carId = carId;
        this.carType = carType;
        this.rent = this.GetRent();
    }
    CarRental.prototype.getCar = function () {
        return "Car ID: ".concat(this.carId, ", Car Type: ").concat(this.carType);
    };
    CarRental.prototype.GetRent = function () {
        if (this.carType === "Small Car") {
            return 1000;
        }
        else if (this.carType === "Van") {
            return 800;
        }
        else if (this.carType === "SUV") {
            return 2500;
        }
        else {
            return 0;
        }
    };
    CarRental.prototype.ShowCar = function () {
        return "Car ID: ".concat(this.carId, ", Car Type: ").concat(this.carType, ", Rent: ").concat(this.rent);
    };
    return CarRental;
}());
var carRental = new CarRental(101, "SUV");
console.log(carRental.getCar());
console.log(carRental.ShowCar());
