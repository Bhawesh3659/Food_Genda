const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image img'); // Ensure this matches your HTML
const saladImage = document.querySelector('.salad img'); // Correct selector for salad image
const countSpan = document.querySelector('.sp span');

let currentIndex = 0; // For navigation (prev/next)
let count = 0; // For click count

// Update slider position for prev/next buttons
function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Prev button click event
prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderImages.length - 1;
    updateSliderPosition();
});

// Next button click event
next.addEventListener('click', () => {
    currentIndex = (currentIndex < sliderImages.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
});

// Update salad image and count on image click
sliderImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        console.log(`Clicked on image index: ${index}`);
        console.log(`Image src: ${img.src}`);
        currentIndex = index; // Update the current index
        updateSaladImage();
        updateCount();
    });
});

function updateSaladImage() {
    const currentSrc = sliderImages[currentIndex].src; // Get src of the current image
    console.log(`Updating salad image src to: ${currentSrc}`);
    saladImage.src = `${currentSrc}?t=${new Date().getTime()}`; // Add timestamp to prevent caching
}

function updateCount() {
    count++;
    countSpan.textContent = count; // Update count display
    console.log(`Count updated to: ${count}`);
}



const stars = document.querySelectorAll('.stars ion-icon'); // Select all star icons
const message = document.querySelector('.message'); // Correctly select a single message element

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const rating = index + 1; // Determine the rating based on the clicked star
        setRating(rating); // Update the rating
    });
});

function setRating(rating) {
    stars.forEach((star, index) => {
        setTimeout(() => {
            if (index < rating) {
                star.classList.add('active'); // Add active class to highlight the star
            } else {
                star.classList.remove('active'); // Remove active class for other stars
            }
        }, index * 100); // Add a delay for animation effect
    });

    // Update the message based on the rating
    if (rating === 1) {
        message.textContent = 'Poor';
    } else if (rating === 2) {
        message.textContent = 'Fair';
    } else if (rating === 3) {
        message.textContent = 'Good';
    } else if (rating === 4) {
        message.textContent = 'Very Good';
    } else if (rating === 5) {
        message.textContent = 'Excellent';
    } else {
        message.textContent = '';
    }
}