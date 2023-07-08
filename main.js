//acessing the form element
var form = document.getElementById('my-form');

//add event listener
form.addEventListener("submit", saveData);

//giving functionality
function saveData(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var username = document.getElementById('name').value;
    //saving data to local storage 
    localStorage.setItem(username, email);
}