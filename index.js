document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');
    const navsection = document.querySelector('.pushdown');
    
    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            
            navLinks.classList.toggle('show');
            toggleButton.classList.toggle('show');
            navsection.classList.toggle('pushed-down');
        });

        // Close menu when a navigation link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                toggleButton.classList.remove('show');
                navsection.classList.remove('pushed-down');
            });
        });
    }
})
;