setTimeout(() =>
{
    console.log("hi")
}, 5000)
function fetchData ()
{
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
fetchData()
async function fetchData2 ()
{
    try
    {
        const res = await fetch("https://fakestoreapi.com/products")
				const data = await res.json()
        console.log(data)
        throw new Error("hjhjgjh")
    }
    catch (err)
    {
          console.error(err)
    }
}
document.getElementById('btn').addEventListener('click', function ()
{
   alert("button clicked")
},true)
document.getElementById("c").addEventListener("click", function () {
	alert("child clicked")
},true)
document.getElementById("p").addEventListener("click", function () {
	alert("parent clicked")
},true)
document.getElementById("gp").addEventListener("click", function () {
	alert("grand parent clicked")
},true)
// fetchData2()
// for (let i = 0; i < 1000; i++)
// {
//     console.log("hello world")
// }
