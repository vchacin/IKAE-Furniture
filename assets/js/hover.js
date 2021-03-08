
function ocultarTxt (housearea) {
    let textoVisible = document.getElementById(housearea);
    textoVisible.classList.add("hideTxt");
}

function mostrarTxt (housearea) {
    let textoVisible = document.getElementById(housearea);
    textoVisible.classList.remove("hideTxt");
}