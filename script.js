const navbarToggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('nav ul');

navbarToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});