//!TOGGLE NAVIGATION MENU AND ICONS
const menuElement = document.querySelector('.menu');
const menuToggleButton = document.querySelector('.menu-toggle-button')

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
}

menuToggleButton.addEventListener('click', toggleMenu)



// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')) {
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }
}
document.addEventListener('click', removeActiveLinkClass)

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button')

const bodyElement = document.body;

const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme) {
    bodyElement.classList.add('dark-theme')
}

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');
    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active')
    } else {
        localStorage.removeItem('darkTheme')
    }
}

themeToggleButton.addEventListener('click', toggleTheme)


// !SCROLL REVEAL
const scr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    // reset: true,
});


scr.reveal('.main-title', {origin: 'top'});
scr.reveal('.scroll-reveal-left', {origin:'left'});
scr.reveal('.scroll-reveal-right', {origin:'right'})
scr.reveal('.tech-stack-item', {interval: 250})
scr.reveal('.section-subtitle-container, .section-title', {
    origin:'top',
    interval:250,
})
scr.reveal('.portfolio-card', {interval: 500})
scr.reveal('.form-container, .footer', {
    origin:'top'
})
// ScrollReveal({ reset: true });

// ScrollReveal().reveal('.main-title', {duration: 1500, origin: 'top', distance:'50px'});