function seleccionarPelicula(){
    console.log("1: Air")
    console.log("2: Flash")
    console.log("3: Elementos")
    console.log("4: Guardianes de la Galaxia vol 3")
    console.log("5: Evil Dead")
    console.log("--------------------->")


    let peli = prompt("Ingrese la opcion")
    switch(peli){
        case "1":
            peli1()
            console.log("--------------------->")
            break;
        default:
            console.log("Pelicula No Disponible")
    }
}

function peli1(hora1, hora2, hora3, hora4){
    let hora11 = 15
    for(let hora = hora11; hora < 22; hora+=2){
        console.log("Los horarios para Air son a las: " + hora + " horas")
    }
    let horario = prompt("Ingrese la hora que desea asistir")
    switch(horario){
        case "15":
            console.log("--------------------->")
            formato()
            break;
        default:
            console.log("La pelicula no está disponible en ese horario")
    }
}

let form1 = "2D"
let form2 = "3D"
let form3 = "4D"
let form4 = "Imax"

function formato(peli1){
    console.log("En este horario, la pelicula esta disponible en formato " + form1)
    console.log("En este horario, la pelicula esta disponible en formato " + form2)
    console.log("En este horario, la pelicula esta disponible en formato " + form3)
    console.log("En este horario, la pelicula esta disponible en formato " + form4)
    console.log("--------------------->")
    seleccionarFormato()
}

function seleccionarFormato(formato){
    let formatoSeleccionado = prompt("Inserte el formato en el cual desea ver la pelicula")
    if(formatoSeleccionado == form1){
        console.log("La pelicula es subtitulada");
        let entradas = Number(prompt("Inserte la cantidad de entradas que deseas"))
        console.log("Usted selecciono " + entradas + " asientos")
        decision(formatoSeleccionado, entradas)
    } else if (formatoSeleccionado == form2 || formato == form4 ){
        console.log("La pelicula esta disponible es en español");
        let entradas = Number(prompt("Inserte la cantidad de entradas que deseas"))
        console.log("Usted selecciono " + entradas + " asientos")
        decision(formatoSeleccionado, entradas)
    } else if (formatoSeleccionado == form3){
        console.log("La pelicula es subtitulada");
        let entradas = Number(prompt("Inserte la cantidad de entradas que deseas"))
        console.log("Usted selecciono " + entradas + " asientos")
        decision(formatoSeleccionado, entradas)
    } else {
        console.log("Formato incorrecto. Seleccione un formato disponible");
    }
}

let boleto1 = Number(900);
let boleto2 = Number(1400);
let boleto3 = Number(2000);
let boleto4 = Number(2500);

function decision(formatoSeleccionado, entradas){
    let totalEntradas = 0;
    switch(formatoSeleccionado){
    case "2D":
        totalEntradas = Number((+(entradas)*(boleto1)));
        console.log("--------------------->")
        break;
    case "3D":
        totalEntradas = Number((+(entradas)*(boleto2)));
        console.log("--------------------->")
        break;
    case "4D":
        totalEntradas4D = Number((+(entradas)*(boleto3)));
        console.log("--------------------->")
        break;
    case "Imax":
        totalEntradasImax = Number((+(entradas)*(boleto4)));
        console.log("--------------------->")
        break;
    default:
        console.log("Operacion invalida")
    }

    console.log("El total de las entradas es: " + totalEntradas + " de pesos")
    menu(totalEntradas)
}



function menu(totalEntradas){
    console.log("--------------------->")
    let consulta = prompt("Desea añadir comida?")
    switch(consulta){
        case "Si":
            opcionMenu(totalEntradas)
            console.log("--------------------->")
            break;
        default:
            console.log("Espere mientras calculamos el total a pagar")
            console.log("--------------------->")
            totalPagar(totalEntradas)
            final()
    }
}

let combo1;
combo1 = combo1pop1sodaChico = 2500;
let combo2;
combo2 = combo1pop1sodaMediano = 3500;
let combo3;
combo3 = combo1pop1sodaGrande = 4500;
let combo4;
combo4 = combo1popGrande2sodaMedianas = 6000; 

function opcionMenu(menu, totalEntradas){
    console.log("La opcion 1 tiene un precio de " + combo1 )
    console.log("La opcion 2 tiene un precio de " + combo2 )
    console.log("La opcion 3 tiene un precio de " + combo3 )
    console.log("La opcion 4 tiene un precio de " + combo4 );
    comida(totalEntradas)
}

function comida(opcionMenu, totalEntradas){
    let seleccionComida = Number(prompt("Indique numero de opción del combo que desea"))
    let cantidadComida = Number(prompt("Cuantos combos desea agregar"))
    let totalComida = 0;
    if(seleccionComida == 1 && cantidadComida>0){
        totalComida = Number((+(combo1)*(cantidadComida)))
        console.log("--------------------->")
    } else if (seleccionComida == 2 && cantidadComida>0){
        totalComida = Number((+(combo2)*(cantidadComida)))
        console.log("--------------------->")
    } else if(seleccionComida == 3 && cantidadComida>0){
        totalComida = Number((+(combo3)*(cantidadComida)))
        console.log("--------------------->")
    } else if (seleccionComida == 4 && cantidadComida>0){
        totalComida = Number((+(combo4)*(cantidadComida)))
        console.log("--------------------->")
    }

    console.log("Total a pagar por comida: " + totalComida)
    totalPagar(totalEntradas, totalComida)
}

function totalPagar(totalEntradas, totalComida){
    let totalTodo = totalEntradas + totalComida
    console.log("--------------------->")
    console.log("Aguarde un momento, estamos calculando el total de lo que usted selecciono")
        console.log("El total a pagar es " + totalTodo  + " de pesos")
    
    final(totalTodo)
}

function final(totalTodo){
    console.log("--------------------->")
    if(totalTodo>0){
    console.log("Su pedido ha sido realizado. Acerquese a las cajas a pagar, o escoga la opción de pagar al finalizar la operación, introduciendo el código que sale en pantalla")
    } else {
        console.log("Ha habido un problema al procesar su pedido. Por favor acerquese a una taquilla para poder realizar su orden.")}
}


seleccionarPelicula();