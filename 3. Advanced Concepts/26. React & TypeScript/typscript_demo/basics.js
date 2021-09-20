// Primitive Types: Number, String, Boolean, Null, Undefined, Symbols
// More Complex Types: Arrays, Objects
// Function Types, Parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives:
var age;
age = 12;
var username = 'John';
var isInstructor = false;
// More Complex Types:
var hobbies;
hobbies = ['Alex', 'Beth', 'Carl', 'Dianne'];
var person;
var person2;
var person3;
person = {
    name: 'Alex',
    age: 23
};
person2 = {
    name: 'John',
    age: 32
};
person3 = {
    name: 'Fiona',
    age: 40
};
// Type Inference:
var course = 'React - The Complete Guide';
// course = 1234; // Type already inferred as string when immediately initialised above. Therefore, error if you assign a number thereafter.
// Union Type (multiple type definition):
var suid = 242421;
suid = '242421';
var car1;
car1 = {
    make: 'BMW',
    model: '4 Series',
    doors: 5
};
var cars;
// Functions & Types:
function add(a, b) {
    return a + b;
}
;
// Function does not return anything and so it has a special return type called void.
// The void type is comparable to null or undefined. If you want to work with a function that returns nothing i.e. undefined you can use this special void type definition.
function printOutput(value) {
    console.log(value);
}
;
// Generics:
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
;
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, 0); // [0, 1, 2, 3]
// All arrays have a type of Array. But arrays items are of a type and makes sense to describe this as well. Array is a Generic Type and can be written like the below:
var numbers = [1, 2, 3]; // let numbers: number[] = [1, 2, 3]; is the syntactical sugar of the Array Generic Type.
