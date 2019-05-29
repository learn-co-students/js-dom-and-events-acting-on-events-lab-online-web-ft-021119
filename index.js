function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
   let element = document.createElement('li')
   element.innerHTML = retrieveEmployeeInformation()
   document.querySelector('.employee-list').appendChild(element)
}

function addNewLiOnClick(){
  addNewElementAsLi()
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', function(){
    document.querySelector('ul').innerHTML = ''
  })
}
