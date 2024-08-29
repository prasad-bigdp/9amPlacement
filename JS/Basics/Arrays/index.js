let arr = [2, 3, 5, 11]
console.log(arr, arr[0])
console.log(arr.length)
arr.push(4) //add last
console.log(arr)
arr.pop()// remove last
arr.unshift(1) //add first
arr.shift() // remove first
arr=[1,2,3,4]
arr.splice(2, 2, 2)
arr.indexOf('1')
arr = [1, 2, 3, 4]
let x = arr.forEach((a) => a * a);
console.log(x)
let y = arr.map((a) => a * a)
console.log(y)
let z = arr.map((v) => v % 2 == 0)
console.log(z)
let z1 = arr.filter((v) => v % 2 == 0)
console.log(z1)
arr.reverse();
arr=[1,5,6,11,2,4,3]
console.log(arr.sort((a, b) => b - a))
arr=[1,2,3,4]
console.log(arr.reduce((p, c) => p + c, 0))

//  objects
let obj = {
    username: "prasad",
    age: 25
}
console.log(obj.username, obj['username'], Object.values(obj), Object.keys(obj))
let obj2= Object.create(obj)
console.log(obj2, obj2.username)
Array.prototype.prasad = function ()
{
    alert("hello world")
}
console.log(arr)
let obj3 = obj;
let obj4 = Object.assign(obj);
console.log(
	obj3,
	obj4,
	obj3.propertyIsEnumerable("username"),
	obj4.propertyIsEnumerable("username"),
)








let arr3 = [1, 2, 3, 4]
console.log(arr3.__proto__.__proto__.__proto__)