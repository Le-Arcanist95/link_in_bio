// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
});

// Smooth Scrolling
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
const form = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
        // Mock form submission
        setTimeout(() => {
            form.reset();
            formFeedback.textContent = 'Message sent successfully!';
            formFeedback.style.color = 'green';
        }, 1000);
    } else {
        formFeedback.textContent = 'Please fill in all fields.';
        formFeedback.style.color = 'red';
    }
});