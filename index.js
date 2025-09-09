document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');
    const mainContent = document.querySelector('.overlay'); // Target the hero section
    
    if (toggleButton && navLinks && mainContent) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            toggleButton.classList.toggle('show');
            mainContent.classList.toggle('pushed-down'); // Apply the class to the hero section
        });

        // Close menu when a navigation link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                toggleButton.classList.remove('show');
                mainContent.classList.remove('pushed-down'); // Remove the class on link click
            });
        });
    }
});