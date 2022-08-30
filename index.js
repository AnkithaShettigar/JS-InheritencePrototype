//1
//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent = {
    name:'Ankitha',
    Degree:'B.E'
}

const child = {
    college:'SCEM',
    year:2020
}

child.__proto__ = parent;
console.log(child.__proto__.name);

console.log("-------------------------------------");
//2
//Write code to explain prototype chaining

const object = {
    name:"Ankitha",
    city:"Udupi",
    Profession:"B.E",
    getIntro:function(){
        console.log(this.name + "From"+this.city);
    }
}
const object2 = {
    name:"Sushmitha"
}

object2.__proto__ = object;
console.log(object2.name);
console.log(object2.city);
console.log(object.getIntro());
console.log(object2.getIntro());
console.log(object2.__proto__);
console.log(object2.__proto__.__proto__);
console.log(object2.__proto__.__proto__.__proto__);

console.log("-------------------------------------");

//3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
const array=[1,2,3,4,5]
const initialValue = 0;
const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);


console.log(sumWithInitial);

console.log("-------------------------------------");


//4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.


const studentOne={
    name:"Ankitha",
    age:23,
    showDetails:function(){
        console.log(`Student's name${this.name} and age is ${this.age}`);

    }

}
const studentTwo={
    name:"Ravi",
}

studentTwo.__proto__= studentOne;

console.log(studentTwo.__proto__);
console.log(studentTwo.age);
console.log(studentTwo.showDetails());