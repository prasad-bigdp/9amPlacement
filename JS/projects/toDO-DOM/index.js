const input = document.getElementById('inp');
const outputdiv = document.getElementById('todos');
const addButton = document.getElementById('add')
let todos=[]
addButton.addEventListener('click', ()=>addValue({}))
function addValue (obj)
{
    let newTodo = {
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString(),
			message: input.value,
		}
	if (addButton.textContent == "ADD") {
		todos.push(newTodo)
	} else {
       todos.splice(obj,1,newTodo)
	}
	displayData(todos)
}
function displayData (arr)
{
    outputdiv.textContent = '';
    arr.forEach((val,ind) =>
    {
        const myDiv = document.createElement('div');
        myDiv.classList.add('todo');
        const message = document.createElement('p');
        message.textContent = val.message;
        const dateTime = document.createElement('p');
        dateTime.textContent = "created at: " + val.date + " " + val.time;
        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', () =>
        {
            let res= confirm("Are you sure?")
            if (res)
            {
                arr.splice(ind, 1)
								displayData(arr)
            }
        })
        const editButton = document.createElement('button');
        editButton.addEventListener('click', () =>
        {
            input.focus()
            input.value = val.message;
            addButton.textContent = 'edit'
            
        })
        deleteButton.textContent = '❌';
        editButton.textContent = '✏️';
        myDiv.append(message, dateTime, deleteButton, editButton);
        outputdiv.appendChild(myDiv)
        input.value=''
    })
}