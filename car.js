class Vehicle {
    //this is where data is initialised in the class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //this is where data is stored
    Information() {
        console.log();//empty console log for space
        console.log(`Make: ${this.make},`);
        console.log(`Model: ${this.model},`);
        console.log(`Year: ${this.year},`);

    }
}
//this is where data is printed to the screen
//let myVehicle = new Vehicle("VW", "Golf", 2022);
//myVehicle.Information();

//extend class vehicle with doors object
class Car extends Vehicle {
    //initialise door object
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    //store door object
    Information() {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//this is where data is printed to the screen with extented door object
let myCar = new Car("VW", "Golf", 2022, 4);
myCar.Information();