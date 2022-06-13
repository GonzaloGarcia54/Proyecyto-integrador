// CARRUSEL
// const grande = document.querySelector(".grande");
// const punto = document.querySelectorAll(".punto");

// // Cuando CLICK en punto
// // Saber la posición de ese punto
// // Aplicar un transform translateX al grande
// // QUITAR la clase activo de TODOS puntos
// // AÑADIR la clase activo al punto que hemos hecho CLICK

// // Recorrer TODOS los punto
// punto.forEach((cadaPunto, i) => {
//   // Asignamos un CLICK a cadaPunto
//   punto[i].addEventListener("click", () => {
//     // Guardar la posición de ese PUNTO
//     let posicion = i;
//     // Calculando el espacio que debe DESPLAZARSE el GRANDE
//     let operacion = posicion * -50;

//     // MOVEMOS el grand
//     grande.style.transform = `translateX(${operacion}%)`;

//     // Recorremos TODOS los punto
//     punto.forEach((cadaPunto, i) => {
//       // Quitamos la clase ACTIVO a TODOS los punto
//       punto[i].classList.remove("activo");
//     });
//     // Añadir la clase activo en el punto que hemos hecho CLICK
//     punto[i].classList.add("activo");
//   });
// });

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -(100 / 3);

    grande.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});

// MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var cruz = document.getElementsByClassName("close")[0];

var btnInternoModal = document.getElementsByClassName("btn-interno-modal")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
cruz.addEventListener("click", function () {
  modal.style.display = "none";
});

btnInternoModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
///////////
// function ventanaNueva() {
//   let ventana = open("", "", "width=600,height=300");
// }
