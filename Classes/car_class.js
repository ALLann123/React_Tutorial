class Car {
    //attributes of the class--> the arguments need before creating object
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }

    //methods inside the class
    display() {
        console.log(`The Car is called: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
}

//create an object
const mycar = new Car("Ford", 2022, "Red");

//Execute a method 
mycar.display()

/*
Classes>node car_class.js
The Car is called: Ford
Year: 2022
Color: Red
*/