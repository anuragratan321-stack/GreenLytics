const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".sidebar a");
const hamburger = document.getElementById("hamburger");
const signin = document.getElementById("signIn");
const overlay = document.querySelector(".overlay");
const loginCard = document.querySelector(".loginCard");
const signinDesktop = document.getElementById("signInDesktop");
const getStarted = document.getElementById("getStarted");

signinDesktop.addEventListener("click", toggleLogin);
getStarted.addEventListener("click", toggleLogin);
hamburger.addEventListener("click", toggleMenu);
signin.addEventListener("click", toggleLogin);
overlay.addEventListener("click", toggleLogin);

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

