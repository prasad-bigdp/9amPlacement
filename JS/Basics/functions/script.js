//IIFE
(function ()
{
    console.log("hi")
})()
function fun() {
	// simple function
	console.log("hello world")
}
fun()
function fun2(a, b) {
	// simple parameters
	console.log(a + b)
}
fun2(5, 3)
function fun3(a, ...b) {
	let x = [...b, 5]
	console.log(a, b, x) //5, [4,3,2,1], [4 3 2 1 5]
}
fun3(5, 4, 3, 2, 1)

function fun4(a, b = 2) {
	console.log(this)
	console.log(a + b)
}
window.fun4(5, 4)

// can return values
function fun5(a, b) {
	return a + b
}
let res = fun5(3, 4)
console.log(res)

// arrow funtions
function fun6(a, b) {
	return a - b
}
console.log(fun6)
const fun8 = function (
	a,
	b, // function expression
) {
	return a - b
}
const fun7 = (a, b) => a - b //arrow function a - b;
// this means current calling object
let obj = {
	username: "Prasad",
	age: 50,
	display: function () {
		console.log(this)
	},
}
function display2(a, b) {
	console.log(this.username)
}
display2.call(obj, 5, 3)
display2.apply(obj, [5, 3])
let fun9 = display2.bind(obj)
fun9(5, 3)

let movieData = {
	name: "RRR",
	year: 2023,
}
function displayMovie(a) {
	console.log(`${this.name} is released in ${this.year} ${a}`)
}
displayMovie.call(movieData, 5)
displayMovie.apply(movieData, [5])
let fun0 = displayMovie.bind(movieData)
fun0(5)
// callback

function mad ()
{
    console.log("i'm mad")
}
function bad (a, b)
{
    console.log(a);
    b()
}
bad(5,mad)
// callback hell

//closures
function outer ()
{
    var count = 0;
    function inner ()
    {
        count++;
        console.log(count)
    }
    return inner;
}
let z = outer();
console.log(z)
z();
z();
z();

function sum (a, b)
{
    return a+b
}
console.log(sum(2, 3))
function sum2(a)
{
    return function (b)
    {
        return a + b;
   }
}
let x1 = sum2(5)
console.log(x1(6))

// currying
document.getElementById('btn').addEventListener('click', function ()
{
    console.log(this.getAttribute('id'))
})

const age = 30;
function funn ()
{
    const age = 31;
    console.log(age)
    for (let i = 0; i < 2; i++)
    {
        const age = 32;
			console.log(age)  
    }
}
funn();
console.log(age)









































