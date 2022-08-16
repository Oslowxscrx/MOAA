function validacion(){
    if(formulario.nombre.value==null){
        alert("llene campo")
    }
    else{
        validarNombre();
    validarApellido();
    validarfecha()
    window.location = "./dashboard.html";
    }
    
}
function validarNombre(){
    if (formulario.nombre.value==0){
        alert("Falta nombre");
    }
}
function validarApellido(){
    if (formulario.apellido.value==0){
        alert("Falta apellido");
    }
}
function validarfecha() {
    if(formulario.fecha.value==0){
        alert("ingrese fecha")
    }
    }
function validarSexo() {
    if(formulario1.sexo[0].checked==true || formulario1.sexo[1].checked==true){

    }
    else{
        alert("escoja su sexo");
    }
}
function validarCondiciones(){
    if(formulario1.terminos.checked==true){

    }
    else{
        alert("acepte terminos")
    }

}