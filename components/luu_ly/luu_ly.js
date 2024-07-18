// chỉnh sửa lại querySelectorAll
const products = document.querySelectorAll(".shapes_first .product_item");
const list_product = document.querySelector(".cover_list_shape");

const product_detail = document.querySelector(".product_detail");

const detail_img_small = document.querySelector(".detail_img_small");
const detail_img_big = document.querySelector(".detail_img_big");
const name_product = document.querySelector(".detail_info p:nth-child(1)");
const detail_ads_luu_ly = document.querySelector(".detail_ads_luu_ly");
const des = document.querySelector(".des");
const material = document.querySelector(".material");
const detail_info = document.querySelector(".detail_info")

const buddha_four = document.querySelector(".buddha_four");
buddha_four.addEventListener("click", () => {
  document.querySelector("#img_four").style.animation =
    "img_four_scale_right 1.5s ease both";
  document.querySelector(".product_contain_luu_ly").style.animation =
    "blur 2s both";
  document.querySelector(".shape_product").style.zIndex = "0";
  document.querySelector(".shape_product").style.animation = "appear 2s  both";
  document.querySelector("#two").style.animation = "two_four_down 0.6s linear both";
  document.querySelector("#four").style.animation = "two_four_down 0.6s linear both";
  document.querySelector("#five").style.animation = "five_down_right 0.6s linear both";
  document.querySelector("#seven").style.animation =
    "seven_eight_up_right 0.6s linear both";
  document.querySelector("#eight").style.animation =
    "seven_eight_up_right 0.6s linear both";
  // shape
  document.querySelector("#img_shapes_second").style.animation = "collection 2s ease -0.3s both";
  document.querySelector("#two_pro").style.animation = "two_three_up_right 2s 0.1s both";
  document.querySelector("#three_pro").style.animation = "two_three_up_right 2s 0.1s both";
  document.querySelector("#five_pro").style.animation = "four_five_down 2s 0.1s both";
  document.querySelector("#four_pro").style.animation = "four_five_down 2s 0.1s both";
  document.querySelector("#six_pro").style.animation = "six_down_right 2s 0.1s both";
});

//  product detail
const hidden = document.querySelectorAll(".hidden");
const sub_name_product = document.querySelector(".detail_name_product ");
let is_animation = false;
let x;
let y;

for (let i = 0; i < 3; i++) {
  products[i].addEventListener("click", () => {
    if (window.innerWidth <= 480) {
      list_product.style.animation = "blur_none 2s forwards";
      product_detail.style.display = "flex";
      product_detail.style.animation = "appear 2s forwards";
    }

    if (window.innerWidth > 480 && window.innerWidth <= 768) {
      product_detail.scrollIntoView({
        behavior: "smooth"
      })
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
          des.style.animation = "appear_block 1s forwards";
        }, 1000);
        x = -1;
      }
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 480) {
        list_product.style.animation = "blur_none 2s forwards";
        product_detail.style.display = "flex";
        product_detail.style.animation = "appear 2s forwards";
      }

      if (window.innerWidth > 480 && window.innerWidth <= 768) {
        list_product.style.animation = "appear_block 2s forwards";
      }

    })
    detail_img_small.src = `./img/detail_small${i + 1}.png`;
    detail_img_big.src = `./img/detail_big${i + 1}.png`;

    if (i === 0) {
      detail_img_small.style.width = "56.46%";
      detail_img_small.style.maxWidth = "223px";
      detail_img_small.style.top = "13px";
      detail_img_small.style.right = "25px";
      detail_img_big.style.maxWidth = "331px";
      detail_info.style.marginBottom = "26px";
      detail_img_big.style.width = "...%";
      detail_img_big.style.top = "...px";
      name_product.style.lineHeight = "32.24px"
      name_product.style.marginBottom = "3px";
      name_product.innerHTML = "Phật</br>a-di-đà";
      detail_ads_luu_ly.style.marginBottom = "8px";
      detail_ads_luu_ly.innerHTML = "Ngọc lưu ly khắc hình Phật A Di Đà mang trong mình ý nghĩa tinh thần sâu sắc và linh thiêng. Phật A Di Đà, vị Phật của ánh sáng vô lượng và trí tuệ vô biên, biểu trưng cho sự cứu rỗi và dẫn dắt chúng sinh đến cõi Tây Phương Cực Lạc, nơi không có đau khổ và phiền não. Ngọc lưu ly, với màu xanh lấp lánh, được coi là biểu tượng của sự tinh khiết và thanh tịnh, giúp thanh lọc tâm hồn và mang lại cảm giác bình yên, tĩnh lặng. Khi kết hợp với hình ảnh Phật A Di Đà, ngọc lưu ly trở thành biểu tượng của sự bảo hộ, an lành và lòng từ bi vô hạn. Đeo ngọc lưu ly khắc Phật A Di Đà không chỉ mang lại may mắn và bình an mà còn giúp tăng cường niềm tin vào sự dẫn dắt của Phật, khuyến khích người đeo sống theo những phẩm hạnh tốt đẹp và hướng tới sự giác ngộ.";
      y = 0;
      if (is_animation === true) {
        is_animation = false;
        for (let i = 0; i < hidden.length; i++) {
          hidden[i].style.animation = "appear 1s forwards";
        }
        detail_img_small.style.animation = "none";
        detail_img_big.style.display = "none";
        detail_img_big.style.animation = "none";
        detail_img_big.style.maxWidth = "331px";
        sub_name_product.style.display = "none";
        sub_name_product.style.animation = "none";
      }
    }

    if (i === 1) {
      detail_img_small.style.width = "66.58%";
      detail_img_small.style.maxWidth = "263px";
      detail_img_small.style.top = "27px";
      detail_img_small.style.right = "15px";
      detail_img_big.style.maxWidth = "360px";
      detail_info.style.marginBottom = "31px";
      detail_img_big.style.width = "...%";
      detail_img_big.style.top = "...px";
      name_product.style.lineHeight = "37.74px"
      name_product.style.marginBottom = "3px";
      name_product.innerHTML = "Phật</br>.....";
      detail_ads_luu_ly.style.marginBottom = "23px";
      detail_ads_luu_ly.innerHTML = "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br/>Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br/>Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br/>Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";
      y = 1;
      if (is_animation === true) {
        is_animation = false;
        for (let i = 0; i < hidden.length; i++) {
          hidden[i].style.animation = "appear 1s forwards";
        }
        detail_img_small.style.animation = "none";
        detail_img_big.style.display = "none";
        detail_img_big.style.animation = "none";
        detail_img_big.style.maxWidth = "360px";
        sub_name_product.style.display = "none";
        sub_name_product.style.animation = "none";
        sub_name_product.innerHTML = "Phật ..."
      }
    }

    if (i === 2) {
      detail_img_small.style.width = "54.43%";
      detail_img_small.style.maxWidth = "215px";
      detail_img_small.style.top = "16px";
      detail_img_small.style.objectFit = "cover";
      detail_img_small.style.objectPosition = "left";
      detail_img_small.style.minHeight = "396px";
      detail_info.style.marginBottom = "31px";
      detail_img_small.style.right = "32px";
      // detail_img_small.style.transform = 'translateX(50%)'
      detail_img_big.style.maxWidth = "358px";
      detail_img_big.style.width = "...%";
      detail_img_big.style.top = "...px";
      name_product.style.lineHeight = "37.74px"
      name_product.style.marginBottom = "3px";
      name_product.innerHTML = "Phật</br>...";
      detail_ads_luu_ly.style.marginBottom = "23px";
      detail_ads_luu_ly.innerHTML = "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br/>Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br/>Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br/>Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";
      y = 2;
      if (is_animation === true) {
        is_animation = false;
        for (let i = 0; i < hidden.length; i++) {
          hidden[i].style.animation = "appear 1s forwards";
        }
        detail_img_small.style.animation = "none";
        detail_img_big.style.display = "none";
        detail_img_big.style.animation = "none";
        detail_img_big.style.maxWidth = "358px";
        sub_name_product.style.display = "none";
        sub_name_product.style.animation = "none";
        sub_name_product.innerHTML = "Phật ..."
      }
    }
  });
}


// prduct detail
detail_img_small.addEventListener('click', () => {
  if (is_animation === false) {
    if (y === 0) {
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.animation = "blur_none 1s forwards";
      }
      detail_img_small.style.animation = "blur_none 0.1s forwards";
      detail_img_big.style.display = "block";
      detail_img_big.style.animation = "scale_buddha_one 1.5s forwards";
      name_product.style.animation = "blur_none 1s forwards";
      sub_name_product.innerHTML = "Phật a-di-đà";
      sub_name_product.style.display = "block";
      sub_name_product.style.animation = "name_slide_right 1.5s forwards";
    }
    if (y === 1) {
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.animation = "blur_none 1s forwards";
      }
      detail_img_small.style.animation = "blur_none 1s forwards";
      detail_img_big.style.display = "block";
      detail_img_big.style.animation = "appear 1s forwards";
      sub_name_product.innerHTML = "Phật ..."
      sub_name_product.style.display = "block";
      sub_name_product.style.animation = "appear 1s forwards";
    }
    if (y === 2) {
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.animation = "blur_none 1s forwards";
      }
      detail_img_small.style.animation = "scale_buddha_three 1.7s forwards";
      sub_name_product.innerHTML = "Phật ..."
      sub_name_product.style.display = "block";
      sub_name_product.style.animation = "appear 1.7s forwards";
    }
    is_animation = true;
  } else {
    is_animation = false;
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.animation = "appear 1s forwards";
    }
    detail_img_small.style.animation = "none";
    detail_img_big.style.animation = "none";
    detail_img_big.style.display = "none";
    name_product.style.animation = "none";
    sub_name_product.style.display = "none";
    sub_name_product.style.animation = "none";
  }
});
detail_img_big.addEventListener('click', () => {
  if (is_animation === true) {
    is_animation = false;
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.animation = "appear 1s forwards";
    }
    detail_img_small.style.animation = "none";
    detail_img_big.style.animation = "none";
    detail_img_big.style.display = "none";
    name_product.style.animation = "none";
    sub_name_product.style.display = "none";
    sub_name_product.style.animation = "none";
  }
})


