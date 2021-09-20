// Primitive Types: Number, String, Boolean, Null, Undefined, Symbols
// More Complex Types: Arrays, Objects
// Function Types, Parameters

// Primitives:
let age: number;
age = 12;

let username: string = 'John';

let isInstructor: boolean = false;

// More Complex Types:
let hobbies: string[];
hobbies = ['Alex', 'Beth', 'Carl', 'Dianne'];

let person;
let person2: any;
let person3: { name: string, age: number };
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
}

// Type Inference:
let course = 'React - The Complete Guide';
// course = 1234; // Type already inferred as string when immediately initialised above. Therefore, error if you assign a number thereafter.

// Union Type (multiple type definition):
let suid: string | number = 242421;
suid = '242421';

// Type Alias:
type Car = {
   make: string,
   model: string,
   doors: number
};
let car1: Car;
car1 = {
   make: 'BMW',
   model: '4 Series',
   doors: 5
}
let cars: Car[];

// Functions & Types:
function add(a: number, b: number): number {
   return a + b;
};

// Function does not return anything and so it has a special return type called void.
// The void type is comparable to null or undefined. If you want to work with a function that returns nothing i.e. undefined you can use this special void type definition.
function printOutput(value: any) {
   console.log(value);
};

// Generics:
function insertAtBeginning<T>(array: T[], value: T) {
   const newArray = [value, ...array];
   return newArray;
};
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 0);    // [0, 1, 2, 3]

// All arrays have a type of Array. But arrays items are of a type and makes sense to describe this as well. Array is a Generic Type and can be written like the below:
let numbers: Array<number> = [1, 2, 3];         // let numbers: number[] = [1, 2, 3]; is the syntactical sugar of the Array Generic Type.