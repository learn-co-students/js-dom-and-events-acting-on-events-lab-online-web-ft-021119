
function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const emList = document.querySelector('ul.employee-list')

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const newLi = document.createElement('li')
  newLi.innerHTML = retrieveEmployeeInformation()
  emList.appendChild(newLi)
}

function addNewLiOnClick() {
  const nameField = document.querySelector('input[name="name"]')
  const button = document.querySelector('input[type="submit"]')
  // button.onClick = addNewElementAsLi()
  button.addEventListener('click', addNewElementAsLi())
  nameField.value = ""
}

function clearEmployeeListOnLinkClick() {
  const clearLink = document.querySelector('a')
  clearLink.addEventListener('click', () => {
    while(!!emList.firstChild) {
      emList.removeChild(emList.firstChild)
    }
  })
}