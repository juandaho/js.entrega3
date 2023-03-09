// Script para ingreso y registro de usuario

let arreglo_usuarios = [];

function usuario_registrado() {
  let nombre_usuario = document.getElementById("correo");
  let pass_usuario = document.getElementById("pass");

  //Objeto de usuario

  let usuario = { nombre: nombre_usuario.value, password: pass_usuario.value };

  console.log(usuario);

  arreglo_usuarios.push(usuario);

  let arreglo_json = JSON.stringify(arreglo_usuarios);
  localStorage.setItem("arreglo_usuarios", arreglo_json);
}

function bucar_usuario(usuario) {
  let nombre_usuario = document.getElementById("correo").value;
  let pass_usuario = document.getElementById("pass").value;

  return nombre_usuario == usuario.nombre && pass_usuario == usuario.password;
}

function login_usuario() {
  let arr = localStorage.getItem("arreglo_usuarios");

  if (arr != null) {
    arr = JSON.parse(arr);
    // console.log(arr);

    let resultado_find = arr.find(bucar_usuario);

    if (resultado_find != null) {
      window.location.assign("carrito.html");
    } else {
      alert("Usuario no encontrado");
    }
  }
}

let btn_registro = document.getElementById("btn_registro");
btn_registro.addEventListener("click", usuario_registrado);

let btn_login = document.getElementById("btn_login");
btn_login.addEventListener("click", login_usuario);

// // Script para carrito de compras

// const btnCart = document.querySelector(".container-cart-icon");
// const containterCartProducts = document.querySelector(".container-cart-products");

// btnCart.addEventListener("click", function(){

//     containterCartProducts.classList.toggle("hidden-cart")

// })

// /* ==================  */

// const cartInfo =document.querySelector(".cart-product");
// const rowProduct = document.querySelector(".row-product");

// //Lista de todos los contenedores de producto
// const productsList = document.querySelector(".container-items");

// //Variable de arreglo de Productos

// let allProducts = [];

// productsList.addEventListener("click", function (e){

//     console.log(e.target);

// })
