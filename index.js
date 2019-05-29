function preventRefreshOnSubmit() {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
  })
} //end of overall function
preventRefreshOnSubmit()



function retrieveEmployeeInformation() {
  const input = document.querySelector('input').value
  return input
}

function addNewElementAsLi() {
  const employeeList = document.querySelector(".employee-list")
  const li = document.createElement('li')
  li.innerHTML = retrieveEmployeeInformation()
  employeeList.appendChild(li)
}

function addNewLiOnClick() {
    addNewElementAsLi()
    let clear = document.querySelector('input').value = ''

  }

  function clearEmployeeListOnLinkClick() {
    let clearEmployeeList = document.querySelector('a')
    let list = document.querySelector('ul')
    clearEmployeeList.addEventListener('click', e => {
      list.innerHTML = ''
    })
  }
