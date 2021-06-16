//Using object literals
let person1 = {
    name: 'Michael',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}!`)
    }
}
let person2 = {
    name: 'Jan',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}!`)
    }
}
let person3 = {
    name: 'Terry',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}!`)
    }
}
let person4 = {
    name: 'Taylor',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}!`)
    }
}
let person5 = {
    name: 'Devon',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}!`)
    }
}
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//Create a pseudo class + method WITH ES6 syntax
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello! My name is ${this.name}. I am from ${this.city} and I am ${this.age} years old!`);
    }
}

/*Create the same code WITHOUT ES6 syntax:

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello! My name is ${this.name}. I am from ${this.city} and I am ${this.age} years old.`);
}
*/

let p1 = new Person('Devon', 'Birmingham', 31);
p1.sayHello();
let p2 = new Person('Jan', 'Birmingham', 61);
p2.sayHello();
let p3 = new Person('Michael', 'Birmingham', 27);
p3.sayHello();
let p4 = new Person('Liz', 'Hazel Green', 29);
p4.sayHello();
let p5 = new Person('Lady Liberty', 'New York City', 200)
p5.sayHello();

//Using Inheritance
class Vehicle {
    constructor(type, manufacturer, numOfWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
    aboutVehicle() {
        console.log(`I drive a ${this.type} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, numOfWheels, numOfDoors, truckBed) {
        super(type, manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.truckBed = truckBed;
    }
    aboutVehicle() {
        //if/else statement for the truckbed boolean
        if (this.truckBed) {
            console.log(`I drive a ${this.type} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels, ${this.numOfDoors} doors, and a truckbed.`);
        } else {
            console.log(`I drive a ${this.type} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels, ${this.numOfDoors} doors, and it doesn't have a truckbed.`);
        }
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, numOfWheels, numOfDoors, size, mpg) {
        super(type, manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`I drive a ${this.type} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels and ${this.numOfDoors} doors. It is ${this.size} sized and gets ${this.mpg} mpg.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, numOfWheels, numOfDoors, handleBars) {
        super(type, manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.handleBars = handleBars;
    }
    aboutVehicle() {
        //if/else statement for the doors & handlebars booleans
        if(this.handleBars, this.numOfDoors) {
            console.log(`I drive a ${this.type} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels and no doors. It has handle bars instead of a steering wheel.`);
        } else {
            console.log(`I drive a ${this.type} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels and has doors. It does not have handle bars.`);
        }
    }
}

let v1 = new Vehicle ('Jeep Cherokee', 'Jeep', 4);
v1.aboutVehicle();

let t1 = new Truck ('Silverado', 'Chevorlet', 4, 2, true);
t1.aboutVehicle();

let s1 = new Sedan ('TL', 'Acura', 4, 4, 'medium', 30);
s1.aboutVehicle();

let m1 = new Motorcycle ('motorcycle', 'Harley Davidson', 2, true, true);
m1.aboutVehicle();
