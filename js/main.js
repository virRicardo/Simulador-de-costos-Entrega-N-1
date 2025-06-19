const precioNaftaPorKm = 100;
const precioPorNocheHotel = 2000;

let simulacionDeViajes = [];

function obtenerDatos (){
    alert("Bienvenidos a éste simulador de costo de viaje que le ayudará a planificar sus proximas vacaciones!")
    console.log("---Bienvenidos a éste simulador de costo de viaje que le ayudará a planificar sus proximas vacaciones!---");

    let totalKm = 0;
    let totalNoches = 0;

    let inputDistancia = prompt("Por favor ingrese la cantidad total de km que realizará");
    totalKm = parseFloat(inputDistancia);

    while(isNaN(totalKm) || totalKm <=0){
        console.log("Por favor ingrese un numero valido");
        inputDistancia = prompt("Vuelva a ingresar los km totales del viaje");
        totalKm = parseFloat(inputDistancia);
    }

    let inputNoches = prompt("Por favor ingrese el total de noches que se quedará e el alojamiento");
    totalNoches = parseInt(inputNoches);

    while (isNaN(totalNoches) || totalNoches <=0){
        console.log("Por favor ingrese un número valido de noches");
        inputNoches = prompt("Ingrese la cantidad de noches que se hospedará en el hotel");
        totalNoches = parseInt(inputNoches);
    }

    return{
        km: totalKm,
        noches: totalNoches
    };
}

function calcularTotalCombustible (distancia, precioCombustible){
    return distancia * precioCombustible;
}

function calcualarTotalHotel(noches, precioPorNoche){
    return noches * precioPorNoche;
}

function costoTotal(combustible, alojamiento){
    return combustible + alojamiento;
}

function realizarSimulacion(){
    const datosViaje = obtenerDatos();

    const costoNafta = calcularTotalCombustible(datosViaje.km, precioNaftaPorKm);
    const costoHotel = calcualarTotalHotel(datosViaje.noches, precioPorNocheHotel);
    const costoTotalViaje = costoTotal(costoNafta,costoHotel);

    const resumenSimulacion ={
        id: simulacionDeViajes.length +1,
        totalKm : datosViaje.km,
        totalNoches : datosViaje.noches,
        costoNafta : costoNafta,
        costoHotel : costoHotel,
        costoTotalViaje : costoTotalViaje
    };

    simulacionDeViajes.push(resumenSimulacion);

    console.log("---Resumen simulación de viaje---");
    console.log(`Simulación #${resumenSimulacion.id}`);
    console.log(`Distancia total de viaje ${resumenSimulacion.totalKm} km`);
    console.log(`Días totales en hotel ${resumenSimulacion.totalNoches}`);
    console.log(`Costo total de combustible ${resumenSimulacion.costoNafta}`);
    console.log(`Costo total hotel ${resumenSimulacion.costoHotel}`);
    console.log(`Costo toal de viaje ${resumenSimulacion.costoTotalViaje}`);
    alert(`Costo total de viaje $${resumenSimulacion.costoTotalViaje}`);
}

let continuar = true;
while(continuar){
    realizarSimulacion();

    let respuesta = prompt("Desea realizar otra simulación? Escriba si o no por favor").toLocaleLowerCase();
    if(respuesta !==`si`){
        continuar = false;
    }
}

console.log("\n Historial de simulaciones");
if(simulacionDeViajes.length === 0){
    console.log("Aún no realizo ninguna simulación");
}else{
    simulacionDeViajes.forEach(simulacion => {
        console.log(`\n Simulacion #${simulacion.id}`);
        console.log(`\n Km ${simulacion.totalKm}`);
        console.log(`\n Noches ${simulacion.totalNoches}`);
        console.log(`\n Costo nafta ${simulacion.costoNafta}`);
        console.log(`\n Costo hotel ${simulacion.costoHotel}`);
        console.log(`Costo total: $ ${simulacion.costoTotalViaje}`);
    });
}

console.log("--------------------------------------------------------");










