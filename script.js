const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".sidebar a");
const hamburger = document.getElementById("hamburger");
const signin = document.getElementById("signIn");
const overlay = document.querySelector(".overlay");
const loginCard = document.querySelector(".loginCard");
const signinDesktop = document.getElementById("signInDesktop");
const getStarted = document.getElementById("getStarted");
const themeButton = document.getElementById("theme_button");
const changeTheme = document.getElementById("changeTheme");

signinDesktop.addEventListener("click", toggleLogin);
getStarted.addEventListener("click", toggleLogin);
hamburger.addEventListener("click", toggleMenu);
signin.addEventListener("click", toggleLogin);
overlay.addEventListener("click", toggleLogin);
themeButton.addEventListener("click", toggleTheme)
themeButton.addEventListener("click", toggleTheme)
changeTheme.addEventListener("click", toggleTheme)

function toggleMenu() {
    sidebar.classList.toggle("active");
}

function toggleLogin(e) {
    if (e) e.preventDefault(); // prevent # link jump
    loginCard.classList.toggle("active");
    overlay.classList.toggle("active");
}

links.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

function toggleTheme(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark"){
        document.body.classList.add("dark-theme");
    }
});



const images = [
    "https://i.pinimg.com/1200x/b8/37/b5/b837b5c6489df23eddb9de1f871d8e4b.jpg",
    "https://i.pinimg.com/736x/6b/c3/15/6bc315c37c8b9f16971eab580f97e090.jpg",
    "https://i.pinimg.com/736x/a4/5a/a5/a45aa5445819d931923606db66ef4ac0.jpg"
];

let currentIndex = 0;

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Set initial images
function setImages() {

    const allImgs = document.querySelectorAll(".img");

    // Fade out
    allImgs.forEach(img => img.style.opacity = "0");

    setTimeout(() => {

        document.getElementById("img1").style.backgroundImage =
            `url(${images[currentIndex]})`;

        document.getElementById("img2").style.backgroundImage =
            `url(${images[(currentIndex + 1) % images.length]})`;

        document.getElementById("img3").style.backgroundImage =
            `url(${images[(currentIndex + 2) % images.length]})`;

        // Fade in
        allImgs.forEach(img => img.style.opacity = "1");

    }, 300);
}


setImages();

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    setImages();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setImages();
});
