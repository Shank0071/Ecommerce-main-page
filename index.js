const products = document.querySelector(".container112");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const navimgCart = document.querySelector(".cart")
const addCart = document.querySelector(".container1222")

console.log(navimgCart)

function openModal(imgsrc) {
    const html = `
    <div onclick=closeModal()>X</div>
    <img src="${imgsrc}" alt="img">
    `
    document.querySelector(".modal").classList.add("open")
    document.querySelector(".modal-container").innerHTML += html
}

products.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("p1") ||
    e.target.classList.contains("p2") ||
    e.target.classList.contains("p3") ||
    e.target.classList.contains("p4")) {
        e.target.classList.add("opacity")
    }
})

products.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("opacity")){
        e.target.classList.remove("opacity")
    }
   })


products.addEventListener("click", (e) => {
    switch(e.target.src) {
        case "http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg":
            openModal("http://127.0.0.1:5500/images/image-product-1.jpg")
            return
        case "http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg":
            openModal("http://127.0.0.1:5500/images/image-product-2.jpg")
            return
        case "http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg":
            openModal("http://127.0.0.1:5500/images/image-product-3.jpg")
            return
        case "http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg":
            openModal("http://127.0.0.1:5500/images/image-product-4.jpg")
            return
        default:
            openModal("http://127.0.0.1:5500/images/image-product-1.jpg")
            return
    }
})

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
    document.querySelector(".modal-container").innerHTML = ""
}

plus.addEventListener("click", () => {
    const num = Number(document.querySelector(".items").innerHTML) + 1;
    document.querySelector(".items").innerHTML = "";
    document.querySelector(".items").innerHTML = num;
})

minus.addEventListener("click", () => {
    const num = Number(document.querySelector(".items").innerHTML) - 1;
    if (num >= 0) {
        document.querySelector(".items").innerHTML = "";
        document.querySelector(".items").innerHTML = num;
    }
})

function showDiv() {
    const html = `
    <div class="popupdiv">
        <h4>Cart</h4>
        <p>Your cart is empty</p>
    </div>
    `
    document.querySelector(".navimg").innerHTML += html
}



navimgCart.addEventListener("click", () => {
    console.log(document.querySelector(".popupdiv"))
    document.querySelector(".popupdiv").classList.toggle("open")
})

addCart.addEventListener("click", () => {
    addToCart()
})

function addToCart() {
    const total = Number(document.querySelector(".items").innerHTML) * 125;
    document.querySelector(".popupdiv p").innerHTML = `Limited Edition Shoes - ${document.querySelector(".items").innerHTML} * $125 = $${total}`;
}







