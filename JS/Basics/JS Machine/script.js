// JS originally named as livescript , renamed as javascript because java is popular
//Every browser has js engine, v8 for google chrome
/* variables--- let,var,const 
*/
console.log(a) //undefined
var a = 50;
var a = 25; // redeclare
a = 50; //reassign
let b = 25;
// let and constt redeclare not possible
b = 50;
//const c = 10;
c = 20; // error- const cannot reassign
// var is a function scoped and let,const are block scoped
function display ()
{
    if (true)
    {
        var x = 25; let y = 25;
    }
    console.log(x)
}
display()




