const navbar = document.querySelector("#navbar");
const navbar_menu = document.querySelector(".navbar_menu");
const logo = document.querySelector(".header_logo");

navbar.addEventListener("click", () => {
    if (navbar_menu.style.display === "block") {
        navbar_menu.style.display = "none"
    }
    else {
        navbar_menu.style.display = "block"
    }
})

logo.addEventListener("click", () => {
    window.location = "/components/home_page/home_page.html";
})