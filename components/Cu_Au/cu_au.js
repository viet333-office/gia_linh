const products = document.querySelectorAll(".product_item");
const list_product = document.querySelector(".list_product");
const product_detail = document.querySelector(".product_detail");
const detail_img_small = document.querySelector(".detail_img_small");
const detail_img_big = document.querySelector(".detail_img_big");
const name_product = document.querySelector(".detail_info p:nth-child(1)");
const detail_ads = document.querySelector(".detail_ads");
const des = document.querySelector(".des");
const material = document.querySelector(".material");


//  product detail
const hidden = document.querySelectorAll(".hidden");
const sub_name_product = document.querySelector(".detail_name_product");
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

        detail_img_small.src = `img/product${i + 1}png.png`;
        // detail_img_big.src = `...`;

        if (i === 0) {
            detail_img_small.style.width = "63.55%";
            detail_img_small.style.maxWidth = "251px";
            detail_img_small.style.top = "4px";
            detail_img_small.style.right = "5px";
            // detail_img_big.style.width = "...%";
            // detail_img_big.style.top = "...px";
            name_product.innerHTML = "Quan Vũ";
            detail_ads.innerHTML = "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br/> Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br/> Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br/> Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";
            y = 0;
        }

        if (i === 1) {
            detail_img_small.style.width = "68.61%";
            detail_img_small.style.maxWidth = "271px";
            detail_img_small.style.objectFit = "cover";
            detail_img_small.style.objectPosition = "left";
            detail_img_small.style.minHeight = "380px";
            detail_img_small.style.top = "30px";
            detail_img_small.style.right = "2px";
            name_product.innerHTML = "VĂN THÙ<br/>BỒ TÁT";
            detail_ads.innerHTML = "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br/>Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br/>Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br/>Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";
            y = 1;
        }

        if (i === 2) {
            detail_img_small.style.width = "53.42%";
            detail_img_small.style.maxWidth = "211px";
            detail_img_small.style.top = "17px";
            detail_img_small.style.right = "36px";
            name_product.innerHTML = "PHẬT<br/>A-DI-ĐÀ";
            detail_ads.innerHTML = "Quan Vũ - Quan Vân Trường, một vị tướng nổi tiếng trong lịch sử Trung Quốc được biết đến với sự trung thành, dũng cảm và uy quyền.<br/>Thờ Quan Vũ là một nét tín ngưỡng lâu đời với mục đích bảo vệ gia đình, doanh nghiệp khỏi những điều xấu xa, mang lại bình an.<br/>Quan Vũ cưỡi mây thể hiện sự thăng tiến và thành công trong sự nghiệp. Hình ảnh cưỡi mây biểu trưng cho việc vượt qua khó khăn, thử thách để đạt được thành công, thể hiện sự thăng hoa và tiến bước không ngừng.<br/>Ngọc Phỉ Thúy là biểu tượng của sự giàu có & thịnh vượng khi được kết hợp với tượng Quan Vũ không chỉ mang ý nghĩa bảo vệ và quyền uy mà còn thu hút tài lộc phú quý.";
            y = 2;
        }
    })
}


// prduct detail
detail_img_small.addEventListener('click', () => {
    if (is_animation === false) {
        if (y === 0) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.animation = "blur 1s forwards";
            }
            detail_img_small.style.animation = "scale_buddha_one 2s forwards";
            detail_img_big.style.animation = "";
            name_product.style.animation = "blur 1s forwards";
            sub_name_product.innerHTML = "phật ...";
            sub_name_product.style.display = "block";
            sub_name_product.style.animation = "appear 2s forwards";
            if (window.innerWidth > 481) {
                detail_img_small.style.animation = "scale_buddha_one_tablet_ngang 2s forwards";
            }
        }
        if (y === 1) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.animation = "blur 1s forwards";
            }
            detail_img_small.style.animation = "scale_buddha_two 1.6s forwards";
            // detail_img_big.style.animation = "";
            name_product.style.animation = "name_product_two 1.6s forwards";
            sub_name_product.innerHTML = "văn thù bồ tát";
            sub_name_product.style.display = "block";
            sub_name_product.style.animation = "sub_name_product_two 1.8s forwards";
            if (window.innerWidth > 481) {
                detail_img_small.style.animation = "scale_buddha_two_tablet_ngang 1.6s forwards";
            }
        }
        if (y === 2) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.animation = "blur 1s forwards";
            }
            detail_img_small.style.animation = "scale_buddha_three 2s forwards";
            name_product.style.animation = "blur 1s forwards";
            sub_name_product.innerHTML = "phật a-di-đà";
            sub_name_product.style.display = "block";
            sub_name_product.style.animation = "appear 2s forwards";
            if (window.innerWidth > 481) {
                detail_img_small.style.animation = "scale_buddha_three_tablet_ngang 2s forwards";
            }
        }
        is_animation = true;
    } else {
        is_animation = false;
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].style.animation = "appear 1s forwards";
        }
        detail_img_small.style.animation = "none";
        detail_img_big.style.animation = "none";
        name_product.style.animation = "none";
        sub_name_product.style.display = "none";
        sub_name_product.style.animation = "none";
    }
});