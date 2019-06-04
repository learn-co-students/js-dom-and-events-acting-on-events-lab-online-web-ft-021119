function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const employeeList = document.querySelector('ul.employee-list')

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const newLi = document.createElement('li')
  newLi.innerHTML = retrieveEmployeeInformation()
  employeeList.appendChild(newLi)
}

function addNewLiOnClick() {
  const nameField = document.querySelector('input[name="name"]')
  const button = document.querySelector('input[type="submit"]')
  button.addEventListener('click', addNewElementAsLi())
  nameField.value = ""
}

function clearEmployeeListOnLinkClick() {
  const clearLink = document.querySelector('a')
  clearLink.addEventListener('click', () => {
    while(!!employeeList.firstChild) {
      employeeList.removeChild(employeeList.firstChild)
    }
  })
}
