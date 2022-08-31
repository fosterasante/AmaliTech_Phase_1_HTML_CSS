var nameBox = document.getElementById('name');
var myButton = document.getElementById('submit')
var nameError = document.getElementById('nameError');
function message(id, myMessage) {
    document.getElementById(id).innerHTML = '<hr>' + myMessage + '<hr>'
 }
nameBox.addEventListener('keyup', function() {
    myName = nameBox.value;
    if(myName == 'foster'){
       //nameError.innerHTML = '';
       errorMessage = 'Name already exist' 
        //event.preventDefault();
        //alert('hello')
        nameBox.style.borderColor = 'red'
        myButton.setAttribute('disabled', 'disabled')
       message('nameError', errorMessage)
    }
    else{
        errorMessage = ''
        nameBox.style.borderColor = ''
        //myButton.setAttribute('disabled', 'false')
        myButton.removeAttribute('disabled')
        message('nameError', errorMessage)
    }
})


