function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let employeeInfo = document.querySelector('input');

function retrieveEmployeeInformation() {
  return employeeInfo.value;
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('ul.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
    link.addEventListener('click', function(event) {
      ul.innerHTML = ''
    });
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    resetInput();
  })
}

function resetInput() {
  document.querySelector('input').value = '';
}
