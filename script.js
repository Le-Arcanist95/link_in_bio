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
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation and Submission
document.getElementById('contactForm').addEventListener('input', function(event) {
    const name = document.getElementsByName('name')[0];
    const email = document.getElementsByName('email')[0];
    const message = document.getElementsByName('message')[0];

    if (name.value.length < 3) {
        name.setCustomValidity('Name must be at least 3 characters long.');
    } else {
        name.setCustomValidity('');
    }

    if (!email.value.includes('@')) {
        email.setCustomValidity('Please enter a valid email address.');
    } else {
        email.setCustomValidity('');
    }

    if (message.value.length < 10) {
        message.setCustomValidity('Message must be at least 10 characters long.');
    } else {
        message.setCustomValidity('');
    }
});

document.getElementById('contactForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const formFeedback = document.getElementById('formFeedback');
    const loadingSpinner = document.getElementById('loadingSpinner');

    loadingSpinner.style.display = 'block';

    setTimeout(() => {
        loadingSpinner.style.display = 'none';

        const name = document.getElementsByName('name')[0].value;
        const email = document.getElementsByName('email')[0].value;
        const message = document.getElementsByName('message')[0].value;

        if (name && email && message) {
            formFeedback.textContent = 'Message sent successfully!';
            formFeedback.style.color = 'green';
        } else {
            formFeedback.textContent = 'Please fill out all fields correctly.';
            formFeedback.style.color = 'red';
        }
    }, 1000)
});