//Get Current page Url
const currentURL = window.location.href;



const linkedInButton = document.getElementById


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;


    if (currentURL.includes("/index")) {
        const navbar = document.getElementById('home-navbar');
        if (scrollPosition >= 15) {
            navbar.style.backgroundColor = "#539191";
        } else {
            navbar.style.backgroundColor = "rgba(27, 27, 27, 0)";
        }
    }
})