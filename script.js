// Simple form submission handler (for demonstration purposes)
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple alert (you can replace this with actual form submission logic)
    alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);

    // Clear the form
    this.reset();
});

// Hamburger menu functionality
document.getElementById('hamburger')?.addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class to show/hide the menu
});