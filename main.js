// Accessing the form element
var form = document.getElementById('my-form');

// Add event listener to the form
form.addEventListener("submit", saveData);

// Function to handle form submission
function saveData(e) {
    e.preventDefault();

    // Retrieve the values from the form inputs
    var email = document.getElementById('email').value;
    var username = document.getElementById('name').value;

    // Create an object to store the user details
    var userDetails = {
        email: email,
        name: username
    };

    // Convert the object to a string
    var userDetailsString = JSON.stringify(userDetails);

    // Save the stringified object to the local storage
    localStorage.setItem('user', userDetailsString);
}

// // Accessing the form element
// var form = document.getElementById('my-form');

// // Add event listener to the form
// form.addEventListener("submit", saveData);

// // Function to handle form submission
// function saveData(e) {
//     e.preventDefault();

//     // Retrieve the values from the form inputs
//     var email = document.getElementById('email').value;
//     var username = document.getElementById('name').value;

//     // Create an object to store the user details
//     var userDetails = {
//         email: email,
//         name: username
//     };

//     // Generate a unique identifier for the user
//     var userId = generateUserId();

//     // Convert the object to a string
//     var userDetailsString = JSON.stringify(userDetails);

//     // Save the stringified object to the local storage with a unique key
//     localStorage.setItem(userId, userDetailsString);
// }

// // Function to generate a unique identifier for the user
// function generateUserId() {
//     // Implement your logic to generate a unique identifier
//     // This can be a random string, a timestamp, or any other unique value
//     // Return the generated identifier
//     return "user_" + Math.random().toString(36).substr(2, 9);
// }
