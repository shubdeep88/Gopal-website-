// Highlight active menu item
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Placeholder for future ad click tracking
const adBox = document.querySelector('.ad-box');
adBox.addEventListener('click', () => {
    console.log("Ad clicked!");
});
