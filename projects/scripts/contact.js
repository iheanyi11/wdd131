document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you for contacting us, " + name + "! We will get back to you shortly.");
            contactForm.reset(); // Reset the form
        } else {
            alert("Please fill out all required fields.");
        }
    });
});