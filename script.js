const navbarToggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('nav ul');
const headerInfo = document.querySelector('.header-info');

navbarToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    headerInfo.classList.toggle('active');
});