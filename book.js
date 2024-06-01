// book.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous messages
        formMessage.innerHTML = '';
        formMessage.style.display = 'none';

        // Form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const number = document.getElementById('number').value.trim();

        // Basic validation
        if (name === '' || email === '' || number === '') {
            showMessage('All fields are required.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (!validatePhoneNumber(number)) {
            showMessage('Please enter a valid phone number.', 'error');
            return;
        }

        // Success message
        showMessage('Your appointment has been successfully booked!', 'success');

        // Reset form
        form.reset();
    });

    function showMessage(message, type) {
        formMessage.innerHTML = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhoneNumber(number) {
        const re = /^\d{10,15}$/;
        return re.test(String(number));
    }
});
