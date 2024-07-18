const products = document.querySelectorAll(".product_item");
const list_product = document.querySelector(".list_product");
const id_list = document.querySelector(".product_item:first-child p");
const product_detail = document.querySelector(".product_detail");
const id_detail = document.querySelector(".detail_info p:nth-child(2)");
const detail_img_small = document.querySelector(".detail_img_small");
const detail_img_big = document.querySelector(".detail_img_big");
const name_product = document.querySelector(".detail_info p:nth-child(1)");
const detail_ads = document.querySelector(".detail_ads");
const des = document.querySelector(".des");
const material = document.querySelector(".material");
let is_animation = false;
let x;
let y;

for (let i = 0; i < 3; i++) {
    products[i].addEventListener("click", () => {
        if (window.innerWidth <= 480) {
            list_product.style.animation = "blur_none 2s forwards";
            id_list.style.animation = "id_list 2s forwards";
            product_detail.style.display = "flex";
            product_detail.style.animation = "appear 2s forwards";
            id_detail.style.animation = "id_detail 2s forwards";
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
                }, 1000);
                x = -1;
            }
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 480) {
                list_product.style.animation = "blur_none 2s forwards";
                id_list.style.animation = "id_list 2s forwards";
                product_detail.style.display = "flex";
                product_detail.style.animation = "appear 2s forwards";
                id_detail.style.animation = "id_detail 2s forwards";
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
        })
        detail_img_small.src = `./img/product_img${i}.png`;
        detail_img_big.src = `./img/product_img${i}.png`;

        if (i === 0) {
            detail_img_small.style.width = "60.76%";
            detail_img_small.style.top = "15px";
            detail_img_small.style.right = "12px";
            detail_img_big.style.width = "92.66%";
            // detail_img_big.style.maxWidth = "370px"; hình tượng Quan Vũ bé
            detail_img_big.style.maxWidth = "400px";
            detail_img_big.style.top = "50px";
            name_product.innerHTML = "QUAN VŨ";
            y = 0;
            if (is_animation === true) {
                sub_name_product.innerHTML = "QUAN VŨ";
                name_product.innerHTML = "QUAN VŨ";
            }
        }

        if (i === 1) {
            // detail_img_small.style.width = "80%"; Hình tượng phật quá to
            detail_img_small.style.width = "67%";
            detail_img_small.style.top = "-40px";
            // detail_img_small.style.right = "-25px"; Hình tượng phật chưa đúng bị trí giống thiết kế
            // detail_img_small.style.right = "-5px"; Hình tượng phật chưa đúng bị trí giống thiết kế
            detail_img_small.style.right = "3px";
            detail_img_big.style.width = "121.52%";
            // detail_img_big.style.maxWidth = "479px"; hình tượng quá to
            detail_img_big.style.maxWidth = "426px";
            detail_img_big.style.top = "-40px";
            name_product.innerHTML = "PHẬT <br> A-DI-ĐÀ";
            y = 1;
            if (is_animation === true) {
                sub_name_product.innerHTML = "PHẬT A-DI-ĐÀ";
                name_product.innerHTML = "PHẬT A-DI-ĐÀ";
            }
        }

        if (i === 2) {
            detail_img_small.style.width = "55.19%";
            detail_img_small.style.top = "26px";
            detail_img_small.style.right = "23px";
            detail_img_big.style.width = "89.37%";
            detail_img_big.style.maxWidth = "353px";
            detail_img_big.style.top = "24px";
            name_product.innerHTML = "PHẬT <br> A-DI-ĐÀ";
            y = 2;
            if (is_animation === true) {
                sub_name_product.innerHTML = "PHẬT A-DI-ĐÀ";
                name_product.innerHTML = "PHẬT A-DI-ĐÀ";
            }
        }
    }
    );
}
const hidden = document.querySelectorAll(".hidden");
const sub_name_product = document.querySelector(".detail_name_product");

detail_img_small.addEventListener('click', () => {
    if (is_animation === false) {
        is_animation = true;
        if (y === 0) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.animation = "blur_none 1s forwards";
            }
            detail_img_small.style.animation = "blur_none 0.1s forwards";
            detail_img_big.style.display = "block";
            detail_img_big.style.animation = "scale_down_QV 2s forwards";
            name_product.innerHTML = "QUAN VŨ";
            name_product.style.animation = "name_product_fly 2s forwards";
        }
        if (y === 1) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.animation = "blur_none 1s forwards";
            }
            detail_img_small.style.animation = "blur_none 2s forwards";
            detail_img_big.style.display = "block";
            detail_img_big.style.animation = "appear 2s forwards";
            name_product.innerHTML = "PHẬT <br> A-DI-ĐÀ";
            name_product.style.animation = "blur_none 1s forwards";
            sub_name_product.innerHTML = "PHẬT A-DI-ĐÀ";
            sub_name_product.style.textAlign = "none";
            sub_name_product.style.display = "block";
            sub_name_product.style.animation = "appear 1s forwards";
        }
        if (y === 2) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.animation = "blur_none 1s forwards";
            }
            detail_img_small.style.animation = "blur_none 2s forwards";
            detail_img_big.style.display = "block";
            detail_img_big.style.animation = "appear 2s forwards";
            name_product.innerHTML = "PHẬT <br> A-DI-ĐÀ";
            name_product.style.animation = "blur_none 1s forwards";
            sub_name_product.innerHTML = "PHẬT A-DI-ĐÀ";
            sub_name_product.style.textAlign = "none";
            sub_name_product.style.display = "block";
            sub_name_product.style.animation = "appear 1s forwards";
        }
    }
});
detail_img_big.addEventListener('click', () => {
    if (is_animation === true) {
        is_animation = false;
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].style.animation = "appear 1s forwards";
        }
        detail_img_small.style.animation = "none";
        detail_img_big.style.display = "none";
        detail_img_big.style.animation = "none";
        name_product.style.animation = "none";
        sub_name_product.innerHTML = "QUAN VŨ"
        sub_name_product.style.display = "none";
        sub_name_product.style.animation = "none";
    }
    if (y !== 0) {
        name_product.innerHTML = "PHẬT <br> A-DI-ĐÀ";
    }
});