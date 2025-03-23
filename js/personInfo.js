// Waitingg  the DOM to be fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // decalred const variable to get the data in ID link inside the form tag
    const form = document.getElementById('form');    
    // decalred const variable to get the data in ul id tag inside the aside tag in html
    const displayList = document.getElementById('contactInfo');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevents default form submission behavior
        event.preventDefault(); 

        // It will return the value of the name input field
        const name = document.getElementById('name').value;
        // It will return value of the email input field
        const email = document.getElementById('email').value;
        // It will return value of the phone input field
        const phone = document.getElementById('phone').value;

        // Created a const variable to display the list of data from contactInfo ul id inside the aside tag
        const listItem = document.createElement('li');

        // Create a per line of  the name and set as per line the ouput
        const nameSpace = document.createElement('p');
        nameSpace.textContent = `Name: ${name}`;

        // Create a per line of the email and set as per line the ouput
        const emailSpace = document.createElement('p');
        emailSpace.textContent = `Email: ${email}`;

        // Created a per line of the phone and set as per line the ouput
        const phoneSpace = document.createElement('p');
        phoneSpace.textContent = `Phone: ${phone}`;

        // Formatted as per line in displaying data
        listItem.appendChild(nameSpace);
        listItem.appendChild(emailSpace);
        listItem.appendChild(phoneSpace);

        // it will  added and display the inputted data
        displayList.appendChild(listItem);

        // Clear the form fields after submission
        form.reset();
    });
});
