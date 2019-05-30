function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const list = document.querySelector('ul.employee-list')

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let newLi = document.createElement('li')
  newLi.innerHTML = retrieveEmployeeInformation()
  list.appendChild(newLi)
}

function addNewLiOnClick(){
  let name = document.querySelector('form input[name="name"]')
  let button = document.querySelector('form input[type="submit"]')

  button.addEventListener('click', function(event) {
    addNewElementAsLi()
  name.value = ""
  })
}

function clearEmployeeListOnLinkClick(){
  debugger
  let link = document.querySelector('a')
  link.addEventListener('click', function(event) {
    list.removeChild(list.querySelectorAll('li'))
  })
}
