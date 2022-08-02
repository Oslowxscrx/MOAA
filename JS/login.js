var usuariosRegistrados = [];
function ingresarSistema(usuario, clave, sesionIniciada = false) {
    console.log(usuario);
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (
        usuario == usuariosRegistrados[i].usuario &&
        clave == usuariosRegistrados[i].clave
      ) {
        usuariosRegistrados[i].sesionIniciada = sesionIniciada;
        localStorage.setItem(
          "usuarioLogueado",
          JSON.stringify(usuariosRegistrados[i])
        );
        redireccionar();
        return;
      }
    }

    alert("el usuario o contrseña son incorrectos")
    return;
  }
  
  function verificarInicioSesion() {
    let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuarioLogueado != null && usuarioLogueado.sesionIniciada == true) {
     

    }
  }
  
  function redireccionar() {
    window.location = "../usuarios/dashboard.html";
  }
  
  function obtenerUsuarios() {
    usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));
    if (usuariosRegistrados == null  || usuariosRegistrados.length == 0 ) {
      usuariosRegistrados = [
        {
          usuario: "MOAA",
          clave: "123",
          nombre: "juan",
          apellido: "perez",
          sesionIniciada: false,
        },
      ];
    }
  }

  obtenerUsuarios();
  verificarInicioSesion();

