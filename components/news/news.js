const news_item = document.querySelectorAll(".news_item");
const list_product = document.querySelector(".list_product_news");
const des_content_news = document.querySelector(".des_content_news");
const left_img = document.querySelector(".left_img");
let x = 0;
for (let i = 0; i < 9; i++) {
  news_item[i].addEventListener("click", () => {
    if (i !== x || window.innerWidth <= 480) {
      x = i;
      if (window.innerWidth <= 480) {
        list_product.style.animation = "blur_none 1s forwards";
        des_content_news.style.zIndex = "1";
        des_content_news.style.animation = "appear 2s forwards";
      }
      if (window.innerWidth > 480 && window.innerWidth <= 768) {
        des_content_news.scrollIntoView({
          behavior: "smooth",
        });
      }
      left_img.style.animation = "blur 0.3s forwards";
      setTimeout(() => {
        left_img.src = `./img/news_${i + 1}.png`;
        left_img.style.animation = "appear 0.3s forwards";
        setTimeout(() => {
          left_img.style.animation = "none";
        }, 300);
      }, 300);
    }
  });
}
