  function iniciarSesion(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
  
<<<<<<< HEAD
    if(usuario == "moaastyle@gmail.com" && clave =="123" ){
      redireccionar();   
=======
    if(usuario == "moaastyles@gmail.com" && clave =="123" ){
        window.location = "./dashboard.html";
>>>>>>> S-2
    }else{
        alert("El usuario o contraseña es incorrecto");
    }
  }
  function redireccionar(){
    window.location = "./pp.html";
    console.log("entra");
  }
