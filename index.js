document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');
    const navLinksList = document.getElementById('navlinks-list');

    // Toggle navigation menu and button icon on click
    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        
        navLinks.classList.toggle('show');
        toggleButton.classList.toggle('show');
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            toggleButton.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });
});