function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let list = document.querySelector('ul.employee-list')

  let listItem = document.createElement('li');
  listItem.innerHTML = retrieveEmployeeInformation();

  list.appendChild(listItem);
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('click', addNewElementAsLi());

  document.querySelector('input').value = null;
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    let list = document.querySelector('ul.employee-list');

    while(!!list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}
