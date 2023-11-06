alert("💸 Bienvenido a Resuelve tus Deudas 💸" )
alert("recuerda leer atentamentelas indicaciones") 

function calcularPagos() {
    let monto = parseFloat(prompt("Por favor, ingresa el monto total de tu deuda sin puntos o comas:"));
    let cuotas = parseInt(prompt("Por favor, ingresa el número de cuotas:"));

    // Validación de los datos ingresados
    if (isNaN(monto) || monto <= 0) {
        alert("El monto ingresado no es válido. Por favor, ingresa un número mayor a 0.");
        return;
    } 

    if (isNaN(cuotas) || cuotas <= 0) {
        alert("El número de cuotas ingresado no es válido. Por favor, ingresa un número mayor a 0.");
        return;
    }
    let pagoPorCuota = monto / cuotas;

    alert("El monto total es: " + monto);
    alert("El número de cuotas es: " + cuotas);
    alert("El pago por cuota es: " + pagoPorCuota.toFixed(2)); //utilice toFixed para redondear el numero

    for (let i = 1; i <= cuotas; i++) {
        alert("Pago " + i + ": " + pagoPorCuota.toFixed(2)); 
    }
}

calcularPagos();