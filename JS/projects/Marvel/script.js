const mainDiv = document.getElementById('main');
document.getElementById("pageNum").addEventListener('input',(e)=>fetchData(e.target.value))

function fetchData (val)
{
    let publickey = "21fb67888a7519cb2ab92631f30d5d68"
		let privatekey = "eecbaafe8a2e2ea6f1683e83ed0f0cb8a6e3c256"
		let ts = new Date().getTime()
		let stringToHash = ts + privatekey + publickey
		let hash = md5(stringToHash)

		let url = `https://gateway.marvel.com/v1/public/characters?offset=${val}&limit=100&ts=${ts}&apikey=${publickey}&hash=${hash}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data.data.results))
    mainDiv.textContent="Please wait.... your heroes are coming......"
}
fetchData()
function displayData (arr)
{
    mainDiv.textContent = '';
    arr.forEach((c,i) =>
    {
        const comicDiv = document.createElement('div');
        comicDiv.classList.add('comic');
        const image = document.createElement('img');
        image.src = c.thumbnail.path +"."+ c.thumbnail.extension;
        image.alt = c.name;
        const title = document.createElement('h2');
        title.textContent = c.name;
        const link = document.createElement('a');
        link.href = c.urls[0].url;
        link.target= "_blank"
        link.appendChild(title)
        comicDiv.append(image, link)
        mainDiv.appendChild(comicDiv)
    })
}