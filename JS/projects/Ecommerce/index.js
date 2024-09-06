const mainDiv= document.getElementById('main')
function fetchData ()
{
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => displayData(data.products))
}
fetchData()
function displayData (arr)
{
    mainDiv.textContent = '';
    arr.forEach((ele) =>
    {
        const proDiv = document.createElement('div');
        proDiv.classList.add('card')
        const proImage = document.createElement('img');
        proImage.classList.add('card-img-top');
        proImage.src = ele.thumbnail;
        proImage.alt= ele.title
        const proTitle = document.createElement('h2');
        proTitle.textContent = ele.title;
        const proPrice = document.createElement('p');
        proPrice.textContent= "₹"+ele.price
        const proLink = document.createElement('a')
        proLink.href=`./product.html?pid=${ele.id}`
        proDiv.append(proImage,proTitle,proPrice)
        proLink.appendChild(proDiv)
        mainDiv.appendChild(proLink)
    })
}