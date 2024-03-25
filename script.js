document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector('.fa-bars');
    var navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
