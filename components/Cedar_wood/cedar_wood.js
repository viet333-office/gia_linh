// -------------- HEADER ------------------
const navbar = document.querySelector("#navbar");
const navbar_menu = document.querySelector(".navbar_menu");
const logo = document.querySelector(".header_logo");

navbar.addEventListener("click", () => {
  if (navbar_menu.style.display === "block") {
    navbar_menu.style.display = "none";
  } else {
    navbar_menu.style.display = "block";
  }
});

logo.addEventListener("click", () => {
  window.location = "../Home_Page/home_Page.html";
});
// ------------ list product ------------------
const products = document.querySelectorAll(".product_item");
const list_product = document.querySelector(".list_product");
const detail_info = document.querySelector(".detail_info");
const id_list = document.querySelector(".product_item:first-child p");
const product_detail = document.querySelector(".product_detail");
const id_detail = document.querySelector(".detail_info p:nth-child(2)");
const detail_img_small = document.querySelector(".detail_img_small");
const detail_img_big = document.querySelector(".detail_img_big");
const name_product = document.querySelector(".detail_info p:nth-child(1)");
const detail_ads = document.querySelector(".detail_ads");
const des = document.querySelector(".des");
const material = document.querySelector(".material");
const sub_name_product = document.querySelector(".detail_name_product");
let x = -1;
let y;
let is_animation = false;
for (let i = 0; i < 3; i++) {
  products[i].addEventListener("click", () => {
    if (window.innerWidth <= 480) {
      list_product.style.opacity = 1;
      list_product.style.animation = "blur_none 3s forwards";
      id_list.style.animation = "id_list 3s forwards";

      product_detail.style.display = "flex";
      product_detail.style.animation = "appear 3s forwards";
      id_detail.style.animation = "id_detail 3s forwards";
    }
    if (window.innerWidth > 480 && window.innerWidth <= 768) {
      product_detail.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (window.innerWidth > 768) {
      if (x !== i) {
        des.style.animation = "blur_none 1s forwards";
        setTimeout(() => {
          material.style.flexDirection = "row-reverse";
          product_detail.style.display = "flex";
          product_detail.style.animation = "appear 1s forwards";
        }, 1000);
        x = i;
      } else {
        product_detail.style.animation = "blur_none 1s forwards";
        setTimeout(() => {
          material.style.flexDirection = "row";
          product_detail.style.display = "none";
          des.style.animation = "appear_block 1s forwards";
        }, 500);
        x = -1;
      }
    }
    detail_img_small.src = `./img/detail_${i + 1}.png`;
    detail_img_big.src = `./img/detail_${i + 1}.png`;

    if (i === 0) {
      detail_img_big.style.maxWidth =
        window.innerWidth > 350
          ? window.innerWidth > 768
            ? "330px"
            : "370px"
          : "260px";
      detail_img_small.style.maxWidth =
        window.innerWidth > 768 ? "230px" : "240px";
      detail_img_small.style.top = "15px";
      detail_img_small.style.right = "12px";
      name_product.innerHTML = "QUAN VŨ";
      name_product.style.width = "170px";
      sub_name_product.innerHTML = "QUAN VŨ";
      detail_ads.innerHTML =
        "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br /> Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br /> Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br /> Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";
      y = 0;
    } else {
      detail_img_small.style.width = "80%";
      detail_img_small.style.top = "-32px";
      detail_img_small.style.right = "-25px";
      detail_img_small.style.maxWidth =
        window.innerWidth > 768 ? "290px" : "320px";
      detail_info.style.marginBottom = "36px";
      name_product.style.textAlign = "unset";
      name_product.style.lineHeight = "37px";
      name_product.style.marginBottom = "4px";
      name_product.innerHTML = "PHẬT <br>A-DI-ĐÀ";
      name_product.style.width = "120px";
      sub_name_product.innerHTML = "PHẬT A-DI-ĐÀ";
      detail_ads.style.marginBottom = "13px";
      detail_ads.innerHTML =
        "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br /> Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br /> Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br /> Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";

      detail_ads.style.marginBottom = "23px";
      y = i;
    }
    if (window.innerWidth > 480) {
      detail_img_small.style.animation = "none";
      detail_img_big.style.animation = "none";
      detail_img_big.style.zIndex = -1;
      name_product.style.animation = "none";
      sub_name_product.style.animation = "none";
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.animation = "none";
      }
    }

    is_animation = false;
  });
}
// ------------- Product Detail -------------------

const hidden = document.querySelectorAll(".hidden");
detail_img_small.addEventListener("click", () => {
  if (is_animation === false) {
    console.log(y);
    if (y === 0 || !y) {
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.animation = "blur 1s forwards";
      }
      detail_img_small.style.animation = "blur 1s forwards";
      detail_img_small.style.maxWidth =
        window.innerWidth > 768 ? "230px" : "240px";

      detail_img_big.style.top = window.innerWidth > 350 ? "50px" : "100px";
      detail_img_big.style.zIndex = 1;
      name_product.style.textAlign = "center";

      detail_img_big.style.animation = "appear_block 2s forwards";
      name_product.style.animation = "name_product_fly 2s forwards";
    } else {
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.animation = "blur 1s forwards";
      }
      detail_img_small.style.animation = "run_img_2 2s forwards";
      detail_img_small.style.maxWidth =
        window.innerWidth > 768 ? "430px" : "476px";
      name_product.style.animation = "name_product_fly_none 2s forwards";
      sub_name_product.style.display = "block";
      sub_name_product.style.opacity = 0;
      sub_name_product.style.width = "202px";

      sub_name_product.style.animation =
        "sub_name_product_fly_none 2s 0.2s forwards";
    }

    is_animation = true;
  } else {
    is_animation = false;
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.animation = "appear 1s forwards";
    }

    if (y === 1 || y === 2) {
      detail_img_small.style.width = "80%";
      detail_img_small.style.maxWidth =
        window.innerWidth > 480 ? "290px" : "480px";
    }

    detail_img_small.style.animation = "none";
    detail_img_big.style.animation = "none";
    name_product.style.animation = "none";

    sub_name_product.style.display = "none";
    sub_name_product.style.animation = "none";
  }
});
detail_img_big.addEventListener("click", () => {
  if (is_animation === true) {
    is_animation = false;
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.animation = "appear 1s forwards";
    }
    name_product.style.textAlign = "unset";
    detail_img_small.style.animation = "none";
    detail_img_big.style.animation = "none";
    detail_img_big.style.zIndex = -1;
    name_product.style.animation = "none";
    sub_name_product.style.display = "none";
    sub_name_product.style.animation = "none";
  }
});
