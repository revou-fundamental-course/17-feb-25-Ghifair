// Auto Slide Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const reviewText = document.getElementById('review-text');
const reviewAuthor = document.getElementById('review-author');

// Reviews corresponding to each slide
const reviews = [
    { text: "Great service! The trip was amazing.", author: "- John Doe" },
    { text: "Fantastic experience! Highly recommended.", author: "- Jane Smith" },
    { text: "Everything was perfect. Will travel again!", author: "- Alice Johnson" }
];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // Update review
    reviewText.textContent = reviews[index].text;
    reviewAuthor.textContent = reviews[index].author;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (interest === '') {
        alert('Please select an interest.');
        return;
    }

    alert('Form submitted successfully!');
    // You can add code here to send the form data to a server
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}