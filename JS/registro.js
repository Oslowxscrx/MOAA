function validacion() {


    validarNombre();
    validarApellido();
    validarfecha()
    window.location = "./dashboard.html";


}
function validarNombre() {
    if (formulario.nombre.value == 0) {
        alert("Falta nombre");
    }
}
function validarApellido() {
    if (formulario.apellido.value == 0) {
        alert("Falta apellido");
    }
}
function validarfecha() {
    if (formulario.fecha.value == 0) {
        alert("ingrese fecha")
    }
}
function validarSexo() {
    if (formulario1.sexo[0].checked == true || formulario1.sexo[1].checked == true) {

    }
    else {
        alert("escoja su sexo");
    }
}
function validarDireccion() {
    window.location = "./dashboard.html";

}
function validarCondiciones() {
    if (formulario1.terminos.checked == true) {
        window.location = "./dashboard.html";
    }
    else {
        alert("acepte terminos")
    }

}