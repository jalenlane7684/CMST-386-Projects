window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementById('home-navbar');


    if (scrollPosition >= 350) {
        navbar.style.backgroundColor = "#539191";
    } else {
        navbar.style.backgroundColor = "rgba(27, 27, 27, 0)";
    }
})