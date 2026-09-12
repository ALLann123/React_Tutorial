class Rectangle {
    //Properties
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    //methods
    calcArea() {
        return this.length * this.width;
    }

    calcPerimeter() {
        return 2 * (this.length + this.width);
    }
}

//object creation
const rect1 = new Rectangle(20, 10);

//Get the area
result = rect1.calcArea();
console.log(`Area: ${result}`);

//Get the Perimeter
result = rect1.calcPerimeter();
console.log(`Perimeter: ${result}`);

/*
React_Tutorial\Classes>node rect_class.js
Area: 200
Perimeter: 60

*/