let map = "right";
const img = document.querySelector(".img");
img.addEventListener("click", () => {
    if (window.innerWidth >= 769 && map === "right") {
        map = "left";
        console.log(432 - window.innerWidth + 768);
        img.style.right = `-${432 - window.innerWidth + 768}px`;
        document.querySelector(".mini_logo").style.right = `${163 + window.innerWidth - 768
            }px`;
    } else if (map === "right") {
        map = "left";
        img.style.right = "-432px";
        document.querySelector(".mini_logo").style.right = "163px";
    } else {
        map = "right";
        img.style.right = "-120px";
        document.querySelector(".mini_logo").style.right = "475px";
    }
});