const precioNaftaPorKm = 100;
const precioPorNocheHotel = 2000;

let totalKm = 0;
let totalNoches = 0;
let costoTotalViaje = 0;
let costoNafta = 0;
let costoHotel = 0;


function obtenerDatos (){
    alert("Bienvenidos a éste simulador de costo de viaje que le ayudará a planificar sus proximas vacaciones!")
    console.log("---Bienvenidos a éste simulador de costo de viaje que le ayudará a planificar sus proximas vacaciones!---");

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
}
obtenerDatos();

function calcularTotalCombustible (distancia, precioCombustible){
    return distancia * precioCombustible;
}

function calcualarTotalHotel(noches, precioPorNoche){
    return noches * precioPorNoche;
}

function costoTotal(combustible, alojamiento){
    return combustible + alojamiento;
}

costoNafta = calcularTotalCombustible(totalKm, precioNaftaPorKm);
costoHotel = calcualarTotalHotel(totalNoches, precioPorNocheHotel);
costoTotalViaje = costoTotal( costoNafta, costoHotel);

console.log("---Resumen del viaje---");
console.log(`Distancia total del viaje: ${totalKm} Km`);
console.log(`Días totales de hotel: ${totalNoches} noches`);
console.log(`Costo total de combustible: $ ${costoNafta}`);
console.log(`Costo total de Hotel: $ ${costoHotel}`);
console.log(`Costo total de viaje: $ ${costoTotalViaje}`);
alert(`Costo total de viaje: $ ${costoTotalViaje}`);