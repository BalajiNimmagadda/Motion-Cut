document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

        // You can add your validation logic here
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Example: Simple validation for password matching
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // If validation passes, you can proceed with form submission or other actions
        alert("Registration successful!");
    });
});
