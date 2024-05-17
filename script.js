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
        // Highlight the current section in the navigation
        document.querySelectorAll('a[data-scroll]').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation and Submission
const form = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const loadingSpinner = document.getElementById('loadingSpinner');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loadingSpinner.style.display = 'block';
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
        // Mock form submission
        setTimeout(() => {
            form.reset();
            loadingSpinner.style.display = 'none';
            formFeedback.textContent = 'Message sent successfully!';
            formFeedback.style.color = 'green';
        }, 1000);
    } else {
        loadingSpinner.style.display = 'none';
        formFeedback.textContent = 'Please fill in all fields.';
        formFeedback.style.color = 'red';
    }
});