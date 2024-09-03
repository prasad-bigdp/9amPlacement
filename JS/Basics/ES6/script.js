//ES6 relaeased in 2015
//arrow function
//rest spread
//template literals
//classes
class Fruit
{
    // whatever properties,methods declare inside class belongs to objects
    taste; static color="red";
    constructor(t)
    {
        this.taste=t
    }
    
}
class Healthy extends Fruit
{
    constructor(t)
    {
        super(t)
    }
}
let obj = new Healthy("sweet")
let obj2 = new Healthy("sweet")
obj.shape="circle"
console.log(obj.shape,obj2.taste)
console.log(typeof Fruit)
//modules
//x.js
// export {a,b};
//export default c;
//y.js
//import {a,b} from 'path to x.js'
//import d from 'path to x.js'
function sum (a, b)
{
    console.log(a+b)
}
function sum (a,b)
{
    console.log(a,b)
}
sum(3)















