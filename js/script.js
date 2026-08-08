alert("Bienvenidos a Coffee House");



const boton = document.getElementById("btnMenu");

boton.addEventListener("click", function(){

    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });

});


// Obtener el formulario
const formulario = document.getElementById("formContacto");

// Detectar el envío
formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Obtener el valor del campo nombre
    const nombre = document.getElementById("nombre").value;

    // Obtener el valor del campo mensaje
    const mensaje = document.getElementById("mensaje");

    // Validar que el campo no esté vacío
    if(nombre.trim() == ""){

        mensaje.textContent = "Debe ingresar su nombre.";
        mensaje.className = "error";
    }else{

        // Mostrar mensaje personalizado
        mensaje.textContent = "Gracias " + nombre + ", hemos recibido tu mensaje.";
        mensaje.className = "correcto";
    }
});


