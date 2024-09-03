var modal = document.getElementById("myModal");
var openModalButton = document.getElementById("openModalButton");
var closeButton = document.getElementsByClassName("close")[0];
openModalButton.onclick = function() {
    modal.classList.add("show");
}
closeButton.onclick = closeModal;
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}
function closeModal() {
    modal.classList.remove("show"); 
}
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.bodecard');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const totalCards = cards.length;
    const cardWidth = 240;
    let currentIndex = 0;
    const scrollInterval = 3000;
    let autoScroll;
    const updateSliderPosition = () => {
        const offset = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
    };
    const goToNextCard = () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSliderPosition();
    };
const goToPrevCard = () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateSliderPosition();
    };
    nextButton.addEventListener('click', () => {
        goToNextCard();
        resetAutoScroll(); 
    });

    prevButton.addEventListener('click', () => {
        goToPrevCard();
        resetAutoScroll(); });
    const startAutoScroll = () => {
        autoScroll = setInterval(goToNextCard, scrollInterval);
    };

    // Function to reset auto-scroll
    const resetAutoScroll = () => {
        clearInterval(autoScroll);
        startAutoScroll();
    };

    // Start auto-scroll when the page loads
    startAutoScroll();
});