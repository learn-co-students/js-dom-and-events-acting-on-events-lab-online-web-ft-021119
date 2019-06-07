function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
	// debugger;
	const em = document.querySelector('form input').value;
	// debugger;
	return em;
}
function nameClear(){
	document.querySelector('form input').value = "";
}


function addNewElementAsLi(){
	const employee = retrieveEmployeeInformation();
	const li = document.createElement('li');
	const ul = document.querySelector('ul.employee-list');
	ul.appendChild(li);
	li.innerHTML = employee;
	}


function addNewLiOnClick(){
	// debugger;

	const submitButton = document.querySelectorAll('form input')[1];
	submitButton.addEventListener('click',function(e) {addNewElementAsLi();
     nameClear();
	});
}
function clearEmployeeListOnLinkClick(){
	// debugger;
 const  clearButton = document.querySelectorAll('a');
 clearButton[0].addEventListener('click', function(e) { e.preventDefault();
 	document.querySelector('ul').innerHTML = '';

 });
}
