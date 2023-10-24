// vehicle example
// start with class definition of a class keyword and the name of the class
// this class definition tells me what each INSTANCE of the class will look like
// and instance is once the class object is actually created
class Vehicle {
    // code to define the properties (attributes) and the methods (functions for this specific class)
    // const v1 = new Vehicle('12345', 'honda','accord');
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        // this is a keyword, and ties what I'm doing to the specific instance that I am in

    }

    // class methods define what objects in a class can do
    // you can use the methods with any instance of the class
    start() {
        this.running = true;
        console.log('running...');
    }

    // create a stop method, but it sets the running property to false
    // and console.logs the message "stopped..."
    stop() {
        this.running = false;
        console.log('stopped...');
    }

    // this is method overriding because I am taking an existing Oject built-in method and I'm changing it
    // You NEED to use the "this" keyword to access the attributes of the instance
    toString() {
        // return 'Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
        return `Vehicle (${this.vin}) is a ${this.make} model ${this.model}`;
    }

}

// Vocabulary:
// Instance
// Instantiate
// Instantiation

// Here we are instantiating the class because we are CREATING a new object of that class type
// so v1 is an INSTANCE of the Vehicle class
// I'm making a new instance, so it's a new variable
const v1 = new Vehicle('12345', 'honda','accord');
console.log(v1);
// the parameter order matters, so if i put what I want as the make before the vin, 
// they'll get switched
// const v2 = new Vehicle('toyota', '323456');
const v2 = new Vehicle('323456', 'toyota');cd
// console.log(v2);
const newCar = new Vehicle('234324', 'bmw');
// console.log(newCar);

// once I have created the start method, I can use it with any instance of the class
console.log('checking what happens when I invoke running');
v1.start();
console.log(v1);
if (v1.running) {
    console.log('this vehicle is running');
}
v1.stop();
console.log(v1);
console.log(v1.toString());

//i want to make an Animal class
//the class name will be Animal
//the constructor includes the attributes i want
class Animal{
    constructor(type,numLeg,fur,horns,tail){
        this.type=type;
        this.numLeg=numLeg;
        this.fur=fur;
        this.horns=horns;
        this.tail=tail;
    }
}
//instantiating the class

const newAnimal=new Animal('cow',4,false,2,true);
console.log(newAnimal);
const newBird=new Animal('robbin',2,false,0,true);
console.log(newBird);
console.log(newAnimal.numLeg);
if(newBird.tail){
    console.log('it has tail');
}else{
     console.log('it has no tail');
}