// Get reference of #btnRegister
let register = document.querySelector('#btnRegister');
// Display button
let display = document.querySelector('#btnDisplay');
// Delete button
let btnDelete = document.querySelector('#btnDelete');
// Create an empty array
let details = [];
// Add event listener
register.addEventListener('click', (e)=>{
    e.preventDefault();
    // Fetch values from the form
    let firstName = document.querySelector('#firstName').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let user = personDetails(firstName, surname, email);
    // Loading object into an array
    details.push(user);
    console.log(details);
    // Save it to a local storage
    localStorage.setItem('userDetails', JSON.stringify(details));

});
// Creating a factory function
function personDetails(firstName, surname, email) {
    return {
        firstName: firstName,
        surname: surname,
        email : email,
    }
}

// Display
display.addEventListener('click', ()=> {
    let results = JSON.parse(localStorage.getItem('userDetails'));
    if(results.length) {
        console.table(results);
    }else {
        console.log("No data was found");
    }
})
// Delete button
btnDelete.addEventListener('click', ()=>{
    localStorage.removeItem('userDetails');
})