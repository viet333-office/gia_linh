const navbar = document.querySelector("#navbar");
const navbar_menu = document.querySelector(".navbar_menu");
const logo = document.querySelector(".logo");

navbar.addEventListener("click", () => {
    if (navbar_menu.style.display === "block") {
        navbar_menu.style.display = "none";
    } else {
        navbar_menu.style.display = "block";
    }
});

logo.addEventListener("click", () => {
    window.location = "/component/home_page/home_page.html";
});
