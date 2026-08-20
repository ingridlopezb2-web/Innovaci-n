// FORMULARIO DE RESERVACIÓN

document.getElementById("formulario").addEventListener("submit", function(event) {

    // Evita que la página se recargue

    event.preventDefault();


    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let correo = document.getElementById("correo").value;

    let tour = document.getElementById("tour").value;

    let personas = document.getElementById("personas").value;

    let fecha = document.getElementById("fecha").value;


    // Lugar donde aparecerá el resultado

    let resultado = document.getElementById("resultado");


    // Verificar que todos los datos estén completos

    if (
        nombre == "" ||
        correo == "" ||
        tour == "" ||
        personas == "" ||
        fecha == ""
    ) {

        resultado.innerHTML =
            "<strong>Faltan datos.</strong><br>" +
            "Por favor completa todos los campos.";

        return;

    }


    // Convertir el número de personas a número

    personas = Number(personas);


    // Calcular el precio total

    let total = tour * personas;


    // Mostrar la reservación

    resultado.innerHTML =

        "<h3>¡Reservación realizada!</h3>" +

        "<p><strong>Nombre:</strong> " +
        nombre +
        "</p>" +

        "<p><strong>Correo:</strong> " +
        correo +
        "</p>" +

        "<p><strong>Número de personas:</strong> " +
        personas +
        "</p>" +

        "<p><strong>Fecha:</strong> " +
        fecha +
        "</p>" +

        "<p><strong>Total:</strong> $" +
        total +
        "</p>" +

        "<p>Gracias por reservar con nosotros.</p>";

});
