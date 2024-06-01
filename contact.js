// contact.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const helpBox = document.getElementById('helpBox').value;

        // Example: You can add your logic here to handle form submission, like sending the form data to a server
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Help:', helpBox);

        // Clear the form fields after submission
        form.reset();
    });
});
