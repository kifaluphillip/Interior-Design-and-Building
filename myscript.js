// Get modal element
const modal = document.getElementById("inquiryModal");
const btn = document.getElementById("inquiryButton");
const span = document.getElementsByClassName("close")[0];

// Inquiry modal functionality
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.slider-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightboxBtn = document.querySelector('.lightbox .close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = item.src;
    });
});

closeLightboxBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Slider functionality
const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});
// myscript.js
document.querySelectorAll('.toggle-content').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        const targetId = this.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    });
});

// Close button functionality
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.classList.add('hidden'); // Hide the section
    });
});
document.querySelectorAll('.toggle-content').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('data-target'));
        
        // Hide all sections
        document.querySelectorAll('section:not(#contact)').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the target section
        target.classList.toggle('hidden');
    });
});

// Close buttons for sections
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function () {
        this.parentElement.classList.add('hidden');
    });
});
