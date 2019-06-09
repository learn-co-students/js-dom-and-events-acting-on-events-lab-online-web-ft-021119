function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  const temp = document.createElement("li");
  temp.innerHTML = retrieveEmployeeInformation();
  document.querySelector("ul.employee-list").appendChild(temp);
}

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', addNewElementAsLi());
  document.querySelector('input[name="name"]').value = "";
}

function clearEmployeeListOnLinkClick() {
  const anchor = document.querySelector('a');
  const ul = document.querySelector('ul');
  anchor.addEventListener('click', () => {
    ul.innerHTML = "";
  });
}
