//Base/Parent Class
class Car {
    constructor(name) {
        this.brand = name;
    }
    present() {
        return 'I have a ' + this.brand;
    }
}

//Derived/Child Class
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.Model = mod;
    }

    //Method
    show() {
        return this.present() + ', it is a ' + this.Model
    }
}

// Create an object
const myCar = new Model("Ford", "Mustang");
output = myCar.show();

console.log(output);

/*
React_Tutorial\Classes>node inheritance.js
I have a Ford, it is a Mustang

*/