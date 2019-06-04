function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
	const input = document.querySelector('input');
	return input.value;

}

function addNewElementAsLi(){
	const newEl = retrieveEmployeeInformation();
	let element = document.createElement('li');
	element.innerHTML = newEl;
	document.querySelector('.employee-list').appendChild(element);
}

function addNewLiOnClick(){
	const eventful = document.querySelector('input[type=submit]');
	eventful.addEventListener('click', function(event){
		addNewElementAsLi()
		document.querySelector('input').value = ''
	})

}

function clearEmployeeListOnLinkClick(){
	const buttonEm = document.querySelector('a');
	buttonEm.addEventListener('click', function(event){
		let listEm = document.querySelector('ul')
		listEm.innerHTML = '';
	}) 

}


// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
