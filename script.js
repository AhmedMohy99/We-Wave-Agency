document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");

    // Create intersection observer for better performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
