const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".menu");
const compras = document.querySelector(".product-detail");
const carritoImg = document.querySelector(".navbar-shopping-cart");
const contenedorCartas = document.querySelector(".cards-container");
const productoEspecifico = document.querySelector(".especific-product");
const productInfoImg = document.querySelector(".product-info-img");
const price = document.querySelector(".price");
const nombre = document.querySelector(".name");
const descripcion = document.querySelector(".description");
const cruzeta = document.querySelector(".product-detail-close");



email.addEventListener("click", () => {
    desktopMenu.classList.toggle("inactive")
    if (compras.classList.contains("inactive") == false){
        compras.classList.toggle("inactive");
    }
    if (!productoEspecifico.classList.contains("inactive")){
        productoEspecifico.classList.add("inactive");
    }   
});
logo.addEventListener("click", () => {
    mobileMenu.classList.toggle("inactive")
    if (compras.classList.contains("inactive") == false){
        compras.classList.toggle("inactive");
    }
    if (!productoEspecifico.classList.contains("inactive")){
        productoEspecifico.classList.add("inactive");
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
    if (!productoEspecifico.classList.contains("inactive")){
        productoEspecifico.classList.add("inactive");
    }

});

const products = [{
    name: "Computadora",
    price: 500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MrfC8OiqiLpF2l8TxcVe15_0Eq_M_-EIaA&usqp=CAU",
    description: "Una computadora de ultima gama, con 8GB de RAM entre otras cosas de utilidad.",
},{
    name:"Bicicleta",
    price: 240,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfapCzny1hUz5JJg_Ds3JvyPlPYLwQGcNSFg&usqp=CAU",
    description: "Una Bicicleta de marca Montagne, original, y de muy buena calidad.", 
},{
    name: "Pelota",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDOkYOA9tAb0PNt6N_DtbZTb0WHf_kvqklw&usqp=CAU",
    description: "Una pelota tamaño GX7, de marca Molten, de muy buena calidad.",
},{
    name: "Libro",
    price: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6C2uOcPpZ1vWD5mahby8BjeUlgO0weU13g&usqp=CAU",
    description: "Libro de don Quijote de La Mancha original, lo tuvo el en sus manos.",
}];

 function changeInfoProfuct(element){
    productInfoImg.setAttribute("src", element.image);
    price.innerHTML ="$" + element.price
    nombre.innerHTML = element.name
    descripcion.innerHTML = element.description;
    productoEspecifico.classList.remove("inactive")
    
 }

function createProduct(array){
    
    for(element of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute("src", element.image);
        img.style.cursor = 'pointer';
        img.setAttribute("data-index", array.indexOf(element))
        img.addEventListener("click", () => {   
            console.log(img) 
            console.log(img.getAttribute("data-index"));
            changeInfoProfuct(array[img.getAttribute("data-index")]);
            if (!compras.classList.contains("inactive")) compras.classList.add("inactive");
            if (!mobileMenu.classList.contains("inactive")) mobileMenu.classList.add("inactive");
            if (!carrito.classList.contains("inactive")) carrito.classList.add("inactive"); 
        });
    
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
        
    };
}


cruzeta.addEventListener("click", () => productoEspecifico.classList.add("inactive"));
createProduct(products);