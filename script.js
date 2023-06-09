// Función para mostrar un mensaje en la consola
function mostrarMensaje() {
    console.log("¡Bienvenido a mi portfolio!");
  }
  
  // Función para cambiar el color de fondo del header al hacer clic
  function cambiarColorFondoHeader() {
    const header = document.querySelector("header");
    header.style.backgroundColor = "#FF7F2A";
  }
  
  // Función para validar el formulario de contacto
  function validarFormularioContacto() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    
    if (nombre === "" || email === "") {
      alert("Por favor, completa todos los campos del formulario.");
    } else {
      alert("¡Gracias por tu mensaje! Te contactaré pronto.");
    }
  }
  
  // Función para animar los proyectos al hacer scroll
  function animarProyectos() {
    const proyectos = document.querySelectorAll(".project");
    
    proyectos.forEach((proyecto, index) => {
      setTimeout(() => {
        proyecto.style.opacity = "1";
        proyecto.style.transform = "translateY(0)";
      }, index * 200);
    });
  }
  
  // Llamada a la función mostrarMensaje al cargar la página
  mostrarMensaje();
  
  // Evento clic para cambiar el color de fondo del header
  const header = document.querySelector("header");
  header.addEventListener("click", cambiarColorFondoHeader);
  
  // Evento submit para validar el formulario de contacto
  const formularioContacto = document.getElementById("formulario-contacto");
  formularioContacto.addEventListener("submit", validarFormularioContacto);
  
  // Evento scroll para animar los proyectos
  window.addEventListener("scroll", animarProyectos);
  