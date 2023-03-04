const btnCart = document.querySelector(".container-cart-icon");
const containterCartProducts = document.querySelector(".container-cart-products");

btnCart.addEventListener("click", function(){

    containterCartProducts.classList.toggle("hidden-cart")

})


/* ==================  */

const cartInfo =document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");

//Lista de todos los contenedores de producto
const productsList = document.querySelector(".container-items");


//Variable de arreglo de Productos

let allProducts = [];

productsList.addEventListener("click", function (e){

    console.log(e.target);


})