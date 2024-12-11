//Get Current page Url
const currentURL = window.location.href;



const linkedInButton = document.getElementById


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;


    if (currentURL.includes("/index")) {
        const navbar = document.getElementById('home-navbar');
        if (scrollPosition >= 415) {
            navbar.style.backgroundColor = "#539191";
        } else {
            navbar.style.backgroundColor = "rgba(27, 27, 27, 0)";
        }
    }
})


const updateDateAndTime = () => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateTimeString = `Last Updated: ${formattedDate} ${formattedTime}`;
    
        const footer = document.querySelector('footer');
        const dateTimeElement = footer.querySelector('.date-time');
    
        if (!dateTimeElement) {
          const dateTimeElement = document.createElement('p');
          dateTimeElement.classList.add('date-time');
          footer.appendChild(dateTimeElement);
        }
    
        dateTimeElement.textContent = dateTimeString;
    
};

updateDateAndTime();
setInterval(updateDateTime, 60000);