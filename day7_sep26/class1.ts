// Question : 1 Define a class CARRENTAL with the following details :
// Class Members are : CarId of int type, CarType of string type and Rent of float type.
// Define GetCar() method which accepts CarId and CarType.
// GetRent() method which return rent of the car on the basis of car type, i.e. Small Car = 1000, Van = 800, SUV = 2500
// ShowCar() method which allow user to view the contents of cars i.e. id, type and rent.





class CarRental {
    carId: number;
    carType: string;
    rent: number;

    constructor(carId: number, carType: string) {
        this.carId = carId;
        this.carType = carType;
        this.rent = this.GetRent(); 
    }

    getCar() {
        return `Car ID: ${this.carId}, Car Type: ${this.carType}`;
    }

    GetRent(): number {
        if (this.carType === "Small Car") {
            return 1000;
        } else if (this.carType === "Van") {
            return 800;
        } else if (this.carType === "SUV") {
            return 2500;
        } else {
            return 0; 
        }
    }

    ShowCar() {
        return `Car ID: ${this.carId}, Car Type: ${this.carType}, Rent: ${this.rent}`;
    }
}

let carRental = new CarRental(101, "SUV");
console.log(carRental.getCar());
console.log(carRental.ShowCar());


