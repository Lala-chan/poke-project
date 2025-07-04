const burgerBtn = document.querySelector('.burger_btn');
const navbar = document.querySelector('.navbar');

burgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('navbar-open');
});