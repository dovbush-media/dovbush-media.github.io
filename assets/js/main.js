// Carousel functionality
function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Auto-scroll carousel
let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const carousel = document.getElementById('carousel');
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollCarousel(1);
        }
    }, 5000);
}

// Stop auto-scroll on user interaction
document.getElementById('carousel')?.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

document.getElementById('carousel')?.addEventListener('mouseleave', () => {
    startAutoScroll();
});

// Start auto-scroll on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carousel')) {
        startAutoScroll();
    }
});
