console.log(document)
console.log(document.getElementsByTagName('button')[0])
console.log(document.getElementById('btn'))
console.log(document.querySelector('button'))
console.log(document.querySelectorAll('button'))
document.getElementById("btn").addEventListener('click', function ()
{
    console.log(document.getElementById("para").innerText)
    console.log(document.getElementById("para").textContent)
    document.getElementById("para").innerHTML='<b>hello</b>'
    console.log(document.getElementById('inp').value)
    document.body.classList.toggle('dark')
    document.getElementById('para').style.fontSize = '48px'
    const p = document.createElement('p')
    p.textContent = "raj"
    document.body.appendChild(p)

})