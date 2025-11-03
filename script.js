// Get the menu button and the mobile menu itself
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Add an event listener to the menu button
menuBtn.addEventListener('click', () => {
    // Toggles the 'hidden' class on the menu, making it appear or disappear
    mobileMenu.classList.toggle('hidden');
});