//Take the value from URL
const params = new URLSearchParams(window.location.search)
const pid = params.get('pid')
const fetchdata = async () =>
{
    const res = await fetch(`https://dummyjson.com/products/${pid}`)
    const data = await res.json();
    displayData(data)
}
fetchdata()
const maindiv = document.getElementById('proMain');
const leftdiv = document.getElementById("left")
const rightdiv = document.getElementById("right")

function displayData (obj)
{
    const image = document.createElement('img');
    image.src = obj.thumbnail;
    image.alt = obj.title;
    leftdiv.append(image)
    const title = document.createElement('h2')
    title.textContent = obj.title;
    const desc = document.createElement("p")
    desc.textContent = obj.description
    const price = document.createElement("p")
    price.textContent = obj.price;
    rightdiv.append(title,desc,price)
}