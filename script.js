document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for fade-in animations
    // Select all elements that should fade in
    const targets = document.querySelectorAll('.anim-fade-in, .feature-item, .voice-card, .achievements-list li');

    if (targets.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a class to trigger the animation
                    entry.target.classList.add('is-visible');
                    // Stop observing the element after it has become visible
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe each target element
        targets.forEach(target => {
            observer.observe(target);
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});