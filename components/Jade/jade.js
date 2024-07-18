const products = document.querySelectorAll(".product_item");
const list_product = document.querySelector(".list_product");
const product_detail = document.querySelector(".product_detail");
const detail_img_small_jade = document.querySelector(".detail_img_small_jade");
const detail_img_big = document.querySelector(".detail_img_big");
const name_product = document.querySelector(".detail_info p:nth-child(1)");
const detail_ads = document.querySelector(".detail_ads");
const des = document.querySelector(".des");
const material = document.querySelector(".material");
const detail_info = document.querySelector(".detail_info");
const name_product_jade = document.querySelector(".detail_name_product_jade");
const first_product = document.querySelector("#img_jade1");
const hidden = document.querySelectorAll(".hidden");
let is_animation = false;
let x;

for (let i = 0; i < 3; i++) {
    products[i].addEventListener('click', () => {

        detail_img_small_jade.src = `./imgjade/imgjade${i + 1}.png`;
        // detail_img_big.src = `./imgjade/imgjade${i + 1}`;

        if (window.innerWidth <= 480) {
            first_product.style.opacity = 0;
            list_product.style.animation = "blur_none 2s forwards";
            product_detail.style.display = "flex";
            product_detail.style.animation = "appear 0.5s forwards";
            if (i === 0) {
                detail_img_small_jade.style.animation = "scale_right 2.5s forwards";
            }
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
                    des.style.animation = "appear_block 1s forwards";
                }, 500);
                x = -1;
            }
        }

        if (i === 0) {
            detail_img_small_jade.style.width = "%";
            detail_img_small_jade.style.top = "px";
            detail_img_small_jade.style.right = "px";
            // detail_img_big.style.width = "%";
            // detail_img_big.style.top = "px";
            name_product.innerHTML = "Quan Vũ";
            name_product.style.width = "129px";
            name_product.style.zIndex = "10";
            name_product.style.position = "relative";
            name_product_jade.innerHTML = "Quan Vũ";
        }

        if (i === 1) {
            detail_img_small_jade.style.width = "...%";
            detail_img_small_jade.style.top = "...px";
            detail_img_small_jade.style.right = "...px";
            // detail_img_big.style.width = "...%";
            // detail_img_big.style.top = "...px";
            name_product.innerHTML = "Phật A-Di-Đà";
            name_product.style.lineHeight = "37.74px";
            name_product.style.width = "114px";
            name_product_jade.innerHTML = "Phật A-Di-Đà";
        }

        if (i === 2) {
            detail_img_small_jade.style.width = "55%";
            detail_img_small_jade.style.top = "...px";
            detail_img_small_jade.style.right = "...px";
            // detail_img_big.style.width = "...%";
            // detail_img_big.style.top = "...px";
            name_product.innerHTML = "Thần Tài";
            name_product.style.lineHeight = "37.74px";
            name_product.style.width = "114px";
            name_product_jade.innerHTML = "Thần Tài";
        }
    }
    )
};
// click vào ảnh để scale to ra
detail_img_small_jade.addEventListener("click", () => {
    if(is_animation === false){
        for(let i = 0; i<hidden.length; i++){
            hidden[i].style.animation = "blur 1s forwards";
       }
    detail_img_small_jade.style.animation = "scale_down 2s forwards";
    if(window.innerWidth > 481){
        detail_img_small_jade.style.animation = "scale_down_tablet 2s forwards";
    }
    name_product_jade.style.display = "block";
    name_product_jade.style.animation = "appear 2s forwards";
    is_animation = true;
} else{
     is_animation = false;
     for(let i = 0; i<hidden.length; i++){
           hidden[i].style.animation = "appear 1s forwards";
     }
     detail_img_small_jade.style.animation = "none";
     name_product_jade.style.animation = "blur_none 1s forwards";
}})