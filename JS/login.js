  function iniciarSesion(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
  
    if(usuario == "moaastyle@gmail.com" && clave =="123" ){
      redireccionar();   
    }else{
        alert("El usuario o contraseña es incorrecto");
    }
  }
  function redireccionar(){
    window.location = "./pp.html";
    console.log("entra");
  }
