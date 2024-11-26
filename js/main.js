let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger');
let pushcontent = document.getElementById('pushcontenttoggle');
let spacingbar = document.querySelectorAll('.spacing-bar');
let navitem = document.querySelectorAll('.nav-item')


hamburger.addEventListener('click', () => {
    navbar.classList.toggle("navbar-open");
    hamburger.classList.toggle("hamburger-open");

    // used GPT to help with this line (mostly how to lay it out. Had a problem with JS targeting 1st spacing-bar only)
    spacingbar.forEach(bar => {
        bar.classList.toggle("spacing-bar-open")
    })

    navitem.forEach(item => {
        item.classList.toggle("nav-item-open")
    })
});

navbar.addEventListener('click', () => {
    navbar.classList.remove("navbar-open");
    hamburger.classList.remove("hamburger-open");
});

