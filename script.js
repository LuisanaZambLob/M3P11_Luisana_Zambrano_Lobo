function obtenerNombreDia(dia) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[dia];
}

function obtenerNombreMes(mes) {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes];
}

function actualizarFechaHora() {
    const fechaActual = new Date();
    const diaSemana = obtenerNombreDia(fechaActual.getDay());
    const diaMes = fechaActual.getDate();
    const mes = obtenerNombreMes(fechaActual.getMonth());
    const ano = fechaActual.getFullYear();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0'); 

    const mensaje = `Hoy es ${diaSemana}, ${diaMes} de ${mes} de ${ano}, y son las ${horas}:${minutos} horas.`;

    document.getElementById("fecha-hora").textContent = mensaje;
}

setInterval(actualizarFechaHora, 1000);
