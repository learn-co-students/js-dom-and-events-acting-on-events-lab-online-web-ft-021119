$(document).ready(function() {
  console.log("jQuery is ready!")
})

function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const inValue =  $('input[name="name"]')
  console.log(inValue[0])
}
