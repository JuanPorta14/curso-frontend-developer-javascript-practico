const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".menu");
const compras = document.querySelector(".product-detail");
const carritoImg = document.querySelector(".navbar-shopping-cart");
const contenedorCartas = document.querySelector(".cards-container");


email.addEventListener("click", () => {
    desktopMenu.classList.toggle("inactive")
    if (compras.classList.contains("inactive") == false){
        compras.classList.toggle("inactive");
    }
    

});
logo.addEventListener("click", () => {
    mobileMenu.classList.toggle("inactive")
    if (compras.classList.contains("inactive") == false){
        compras.classList.toggle("inactive");
    }
});
carritoImg.addEventListener("click", () =>{
    compras.classList.toggle("inactive")
    if (desktopMenu.classList.contains("inactive") == false){
        desktopMenu.classList.toggle("inactive");
    }
    else if (mobileMenu.classList.contains("inactive") == false){
        mobileMenu.classList.toggle("inactive");
    }

});

const products = [{
    name: "Computadora",
    price: 500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MrfC8OiqiLpF2l8TxcVe15_0Eq_M_-EIaA&usqp=CAU"
},{
    name:"Bicicleta",
    price: 240,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfapCzny1hUz5JJg_Ds3JvyPlPYLwQGcNSFg&usqp=CAU"
},{
    name: "Pelota",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDOkYOA9tAb0PNt6N_DtbZTb0WHf_kvqklw&usqp=CAU"
}];


/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

products.forEach(element => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute("src", element.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divInfo = document.createElement("div");

    const precio = document.createElement("p");
    precio.innerText = "$" + element.price;
    const text = document.createElement("p");
    text.innerText = element.name;

    const figura = document.createElement("figure");
    const icono = document.createElement("img");
    icono.setAttribute("src", "./icons/bt_add_to_cart.svg");
    figura.append(icono);
    divInfo.append(precio,text);
    productInfo.append(divInfo,figura);
    productCard.append(img,productInfo);
    contenedorCartas.append(productCard);
});