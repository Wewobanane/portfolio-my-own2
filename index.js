document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.moving-text');
    let currentIndex = 0;

    function animateText() {
        texts.forEach((text, index) => {
            text.style.opacity = '0';
            text.style.transform = 'translateX(-50%)';
        });

        texts[currentIndex].style.opacity = '1';
        texts[currentIndex].style.transform = 'translateX(0)';

        setTimeout(() => {
            texts[currentIndex].style.opacity = '0';
            texts[currentIndex].style.transform = 'translateX(50%)';

            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(animateText, 800); // Adjust delay for next text to come in
        }, 3000); // Adjust how long the text stays in the center
    }

    animateText();
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));