let hamburguesa = document.getElementById('hamburguesa');

hamburguesa.addEventListener("click", (e) =>{
    e.preventDefault();
    navegar.classList.toggle("navv");

});

document.getElementById("navegar").onclick = remoce;
function remoce(){
    navegar.classList.toggle("navv");
}
