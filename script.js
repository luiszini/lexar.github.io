
document.addEventListener('DOMContentLoaded', (event) => {
    const inputFechaNacimiento = document.getElementById('fecha-nacimiento');
    const inputEdad = document.getElementById('edad');
    const inputCumplio18 = document.getElementById('18años');
    

    inputFechaNacimiento.addEventListener('change', () => {
        const fechaNacimiento = inputFechaNacimiento.value;
        if (fechaNacimiento) {
            const { años, meses, días } = calcularEdadCompleta(fechaNacimiento);
            inputEdad.value = `${años} años, ${meses} meses, ${días} días`;
            inputCumplio18.value = calcularCumplio18(fechaNacimiento);
        }
    });

    // Detectar el cambio en la selección del género
   // const generoRadios = document.getElementsByName('genero');
    //const tarfecing = document.querySelector('.tarfecing');

  //  generoRadios.forEach(radio => {
  //      radio.addEventListener('change', () => {
    //        if (document.getElementById('femenino').checked) {
      //          tarfecing.style.display = 'block';
        //        agregarAñosPorCuidadoDeHijos(); // Llamar a la función al cambiar el género
          //  } else {
            //    tarfecing.style.display = 'none';
              //  limpiarTabla(); // Limpiar la tabla si se cambia el género
    //        }
     //   });
    //});

    // Detectar cambios en la cantidad de hijos
    const inputHijos = document.getElementById('input-hijos');
    const inputHijosAdoptados = document.getElementById('input-hijos-adoptados');
    const inputHijosAUH = document.getElementById('input-hijos-auh');
    const inputHijosDiscapacidad = document.getElementById('input-hijos-discapacidad');

    const inputsHijos = [inputHijos, inputHijosAdoptados, inputHijosAUH, inputHijosDiscapacidad];

    inputsHijos.forEach(input => {
        input.addEventListener('input', () => {
            if (document.getElementById('femenino').checked) {
                agregarAñosPorCuidadoDeHijos(); // Llamar a la función al cambiar la cantidad de hijos
            }
        });
    });

    function limpiarTabla() {
        const tabla = document.getElementById('tabla-info');
        while (tabla.rows.length > 1) {
            tabla.deleteRow(1); // Eliminar todas las filas excepto la primera (encabezado)
        }
    }


    // Detectar el cambio en la selección de la nacionalidad
    const nacionalidadRadios = document.getElementsByName('nacionalidad');
    const fecingresoDiv = document.querySelector('.fec-ingreso');

    nacionalidadRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (document.getElementById('extranjera').checked) {
                fecingresoDiv.style.display = 'block';
            } else {
                fecingresoDiv.style.display = 'none';
            }
        });
    });
});

function calcularEdadCompleta(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let días = hoy.getDate() - nacimiento.getDate();

    // Ajustar los meses y días si es necesario
    if (días < 0) {
        meses--;
        const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        días += mesAnterior.getDate();
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    return { años, meses, días };
}

function calcularCumplio18(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    nacimiento.setFullYear(nacimiento.getFullYear() + 18);
    const dia = String(nacimiento.getDate()).padStart(2, '0');
    const mes = String(nacimiento.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0
    const año = nacimiento.getFullYear();
    return `${dia}/${mes}/${año}`;
}

function calcularTotales() {
    const tabla = document.getElementById('tabla-info');
    const filasTotales = document.getElementsByClassName('fila-totales');

    // Eliminar filas de totales existentes
    while (filasTotales.length > 0) {
        filasTotales[0].remove();
    }

    let totalAños = 0;
    let totalMeses = 0;
    let totalDías = 0;

    const filas = tabla.getElementsByTagName('tr');

    // Empezamos desde 1 para omitir la fila de encabezado
    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        totalAños += parseInt(celdas[5].innerHTML); // Años
        totalMeses += parseInt(celdas[6].innerHTML); // Meses
        totalDías += parseInt(celdas[7].innerHTML); // Días
    }

    // Convertir los días extras a meses y meses extras a años
    totalMeses += Math.floor(totalDías / 30);
    totalDías %= 30;
    totalAños += Math.floor(totalMeses / 12);
    totalMeses %= 12;

    // Mostrar los totales en la fila de totales
    const filaTotales = tabla.insertRow(-1);
    filaTotales.classList.add('fila-totales');

    const celdaTotalDesde = filaTotales.insertCell(0);
    const celdaTotalHasta = filaTotales.insertCell(1);
    const celdaTotalRazonSocial = filaTotales.insertCell(2);
    const celdaTotalCaja = filaTotales.insertCell(3);
    const celdaTotalServicio = filaTotales.insertCell(4);
    const celdaTotalAños = filaTotales.insertCell(5);
    const celdaTotalMeses = filaTotales.insertCell(6);
    const celdaTotalDias = filaTotales.insertCell(7);
    const celdaTotalAcciones = filaTotales.insertCell(8);

    celdaTotalDesde.innerHTML = "Total";
    celdaTotalAños.innerHTML = totalAños;
    celdaTotalMeses.innerHTML = totalMeses;
    celdaTotalDias.innerHTML = totalDías;
}

function agregarFila() {
    const tabla = document.getElementById('tabla-info');
    const filasTotales = document.getElementsByClassName('fila-totales');

    // Obtener la última fila de totales
    const ultimaFilaTotal = filasTotales[filasTotales.length - 1];

    const nuevaFila = tabla.insertRow(ultimaFilaTotal.rowIndex); // Insertar la nueva fila antes de la última fila de totales

    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    const celda3 = nuevaFila.insertCell(2);
    const celda4 = nuevaFila.insertCell(3);
    const celda5 = nuevaFila.insertCell(4);
    const celda6 = nuevaFila.insertCell(5);
    const celda7 = nuevaFila.insertCell(6);
    const celda8 = nuevaFila.insertCell(7);
    const celda9 = nuevaFila.insertCell(8); // Nueva celda para el botón Eliminar

    const inputDesdeValue = document.getElementById('input-desde').value;
    const inputHastaValue = document.getElementById('input-hasta').value;
    const inputRazonSocial = document.getElementById('input-razon-social').value;
    const inputCaja = document.getElementById('input-caja').value;
    const inputServicio = document.getElementById('input-servicio').value;

    // Validar fechas
    if (new Date(inputDesdeValue) >= new Date(inputHastaValue)) {
        alert('La fecha "Hasta" debe ser posterior a la fecha "Desde".');
        return;
    }

    // Crear objetos Date con las fechas
    const inputDesde = new Date(inputDesdeValue);
    const inputHasta = new Date(inputHastaValue);

    // Ajustar las fechas para evitar el problema del día anterior
    inputDesde.setDate(inputDesde.getDate() + 1);
    inputHasta.setDate(inputHasta.getDate() + 1);

    // Asignar las fechas a las celdas de la fila
    celda1.innerHTML = inputDesde.toLocaleDateString();
    celda2.innerHTML = inputHasta.toLocaleDateString();
    celda3.innerHTML = inputRazonSocial;
    celda4.innerHTML = inputCaja;
    celda5.innerHTML = inputServicio;

    // Calcular el tiempo transcurrido
    const tiempoTranscurrido = calcularTiempoTranscurrido(inputDesde, inputHasta);
    celda6.innerHTML = tiempoTranscurrido.años;
    celda7.innerHTML = tiempoTranscurrido.meses;
    celda8.innerHTML = tiempoTranscurrido.días;

    // Agregar el botón Eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        tabla.deleteRow(nuevaFila.rowIndex);
        calcularTotales(); // Recalcular totales después de eliminar la fila
    });
    celda9.appendChild(botonEliminar);

    calcularTotales();
}


function calcularTiempoTranscurrido(desde, hasta) {
    const desdeCopy = new Date(desde); // Hacemos copias de las fechas para no modificar las originales
    const hastaCopy = new Date(hasta);

    // Agregamos un día a la fecha final para asegurarnos de incluirlo en el cálculo
    hastaCopy.setDate(hastaCopy.getDate() + 1);

    const años = hastaCopy.getFullYear() - desdeCopy.getFullYear();
    const meses = hastaCopy.getMonth() - desdeCopy.getMonth();
    const días = hastaCopy.getDate() - desdeCopy.getDate();

    let totalMeses = años * 12 + meses;
    let totalDías = días;

    // Ajustar los meses y días si es necesario
    if (totalDías < 0) {
        totalMeses--;
        totalDías += 30; // Equiparar todos los meses a 30 días
    }

    const añosTranscurridos = Math.floor(totalMeses / 12);
    const mesesTranscurridos = totalMeses % 12;

    return { años: añosTranscurridos, meses: mesesTranscurridos, días: totalDías };
}

function agregarAñosPorCuidadoDeHijos() {
    const inputHijos = parseInt(document.getElementById('input-hijos').value);
    const inputHijosAdoptados = parseInt(document.getElementById('input-hijos-adoptados').value);
    const inputHijosAUH = parseInt(document.getElementById('input-hijos-auh').value);
    const inputHijosDiscapacidad = parseInt(document.getElementById('input-hijos-discapacidad').value);

    // Calcular años adicionales por cuidado de hijos
    const añosPorHijos = inputHijos;
    const añosPorHijosAdoptados = inputHijosAdoptados;
    const añosPorHijosAUH = inputHijosAUH;
    const añosPorHijosDiscapacidad = inputHijosDiscapacidad;

    // Total de años por cuidado de hijos
    const totalAñosPorCuidado = añosPorHijos + añosPorHijosAdoptados + añosPorHijosAUH + añosPorHijosDiscapacidad;

    // Agregar fila solo si hay años por cuidado de hijos
    if (totalAñosPorCuidado > 0) {
        const tabla = document.getElementById('tabla-info');
        const nuevaFila = tabla.insertRow();

        const celda1 = nuevaFila.insertCell(0);
        const celda2 = nuevaFila.insertCell(1);
        const celda3 = nuevaFila.insertCell(2);
        const celda4 = nuevaFila.insertCell(3);
        const celda5 = nuevaFila.insertCell(4);
        const celda6 = nuevaFila.insertCell(5);
        const celda7 = nuevaFila.insertCell(6);
        const celda8 = nuevaFila.insertCell(7);
        const celda9 = nuevaFila.insertCell(8);

        // Establecer los valores para la fila
        celda1.innerHTML = '';
        celda2.innerHTML = '';
        celda3.innerHTML = 'Decreto 475/2021';
        celda4.innerHTML = '';
        celda5.innerHTML = '';
        celda6.innerHTML = totalAñosPorCuidado;
        celda7.innerHTML = 0;
        celda8.innerHTML = 0;

        // Botón eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function () {
            tabla.deleteRow(nuevaFila.rowIndex);
            calcularTotales();
        });
        celda9.appendChild(botonEliminar);

        // Calcular totales después de agregar la fila
        calcularTotales();
    }
}




let filaAñosPorCuidado; // Variable global para mantener una referencia a la fila de años por cuidado de hijos

document.addEventListener('DOMContentLoaded', (event) => {
    // Tu código existente aquí...

    // Detectar el cambio en la selección del género
    const generoRadios = document.getElementsByName('genero');
    const tareasCuidadoDiv = document.querySelector('.tareas-cuidado');

   // generoRadios.forEach(radio => {
     //   radio.addEventListener('change', () => {
       //     if (document.getElementById('femenino').checked) {
         //       tareasCuidadoDiv.style.display = 'block';
           //     agregarAñosPorCuidadoDeHijos(); // Llamar a la función al cambiar el género
            //} else {
              //  tareasCuidadoDiv.style.display = 'none';
                //limpiarFilaAñosPorCuidado(); // Limpiar la fila de años por cuidado si se cambia el género
        //    }
       // });
    //}); //

    // Detectar cambios en la cantidad de hijos
    const inputHijos = document.getElementById('input-hijos');
    const inputHijosAdoptados = document.getElementById('input-hijos-adoptados');
    const inputHijosAUH = document.getElementById('input-hijos-auh');
    const inputHijosDiscapacidad = document.getElementById('input-hijos-discapacidad');

    const inputsHijos = [inputHijos, inputHijosAdoptados, inputHijosAUH, inputHijosDiscapacidad];

    inputsHijos.forEach(input => {
        input.addEventListener('input', () => {
            if (document.getElementById('femenino').checked) {
                agregarAñosPorCuidadoDeHijos(); // Llamar a la función al cambiar la cantidad de hijos
            }
        });
    });
});

function agregarAñosPorCuidadoDeHijos() {
    const tabla = document.getElementById('tabla-info');
    const filas = tabla.getElementsByTagName('tr');

    // Buscar si ya existe una fila para años por cuidado
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        if (celdas.length > 0 && celdas[2].innerHTML === 'Decreto 475/2021') {
            filaAñosPorCuidado = filas[i];
            // Actualizar los valores
            const inputHijos = parseInt(document.getElementById('input-hijos').value);
            const inputHijosAdoptados = parseInt(document.getElementById('input-hijos-adoptados').value);
            const inputHijosAUH = parseInt(document.getElementById('input-hijos-auh').value);
            const inputHijosDiscapacidad = parseInt(document.getElementById('input-hijos-discapacidad').value);

            const totalAños = inputHijos + inputHijosAdoptados + inputHijosAUH + inputHijosDiscapacidad;

            filaAñosPorCuidado.cells[5].innerHTML = totalAños; // Actualizar la cantidad de años
            filaAñosPorCuidado.cells[6].innerHTML = 0; // Resetear meses
            filaAñosPorCuidado.cells[7].innerHTML = 0; // Resetear días
            calcularTotales();
            return; // Salir de la función
        }
    }

    // Si no existe la fila, crearla
    const nuevaFila = tabla.insertRow();

    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    const celda3 = nuevaFila.insertCell(2);
    const celda4 = nuevaFila.insertCell(3);
    const celda5 = nuevaFila.insertCell(4);
    const celda6 = nuevaFila.insertCell(5);
    const celda7 = nuevaFila.insertCell(6);
    const celda8 = nuevaFila.insertCell(7);
    const celda9 = nuevaFila.insertCell(8);

    // Establecer los valores para la fila
    celda1.innerHTML = '';
    celda2.innerHTML = '';
    celda3.innerHTML = 'Decreto 475/2021';
    celda4.innerHTML = '';
    celda5.innerHTML = '';
    celda6.innerHTML = inputHijos.value;
    celda7.innerHTML = 0;
    celda8.innerHTML = 0;

    // Botón eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        tabla.deleteRow(nuevaFila.rowIndex);
        limpiarFilaAñosPorCuidado(); // Limpiar la fila de años por cuidado al eliminarla
    });
    celda9.appendChild(botonEliminar);

    // Calcular totales después de agregar la fila
    calcularTotales();

    // Asignar la nueva fila a la variable global
    filaAñosPorCuidado = nuevaFila;
}

function limpiarFilaAñosPorCuidado() {
    if (filaAñosPorCuidado) {
        filaAñosPorCuidado.remove(); // Eliminar la fila de años por cuidado
        filaAñosPorCuidado = null; // Resetear la variable global
        calcularTotales(); // Recalcular totales después de eliminar la fila
    }
}





//calculo del excedente por edad

document.addEventListener('DOMContentLoaded', (event) => {
    // Tu código existente aquí...

    // Detectar el cambio en la selección del género
    const generoRadios = document.getElementsByName('genero');
    const fechaNacimientoInput = document.getElementById('fecha-nacimiento');

    generoRadios.forEach(radio => {
        radio.addEventListener('change', calcularExcedenteEdad);
    });

    fechaNacimientoInput.addEventListener('change', calcularExcedenteEdad);
});

function calcularExcedenteEdad() {
    const fechaNacimientoInput = document.getElementById('fecha-nacimiento');
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fechaNacimiento = new Date(fechaNacimientoInput.value);
    const hoy = new Date();
    let edadJubilatoria = genero === 'femenino' ? 60 : 65;
    let fechaJubilacion = new Date(fechaNacimiento);
    fechaJubilacion.setFullYear(fechaJubilacion.getFullYear() + edadJubilatoria);

    // Si hoy es menor que la fecha de jubilación, no hay excedente
    if (hoy < fechaJubilacion) {
        return;
    }

    let excedenteAños = hoy.getFullYear() - fechaJubilacion.getFullYear();
    let excedenteMeses = hoy.getMonth() - fechaJubilacion.getMonth();
    let excedenteDias = hoy.getDate() - fechaJubilacion.getDate();

    // Ajustar los meses y días si es necesario
    if (excedenteDias < 0) {
        excedenteMeses--;
        excedenteDias += 30; // Aproximación de 30 días por mes
    }

    if (excedenteMeses < 0) {
        excedenteAños--;
        excedenteMeses += 12;
    }

    // Convertir el excedente en aportes
    const aportesAños = Math.floor(excedenteAños / 2);
    const aportesMeses = Math.floor((excedenteAños % 2) * 6 + excedenteMeses / 2); // Cada año excedente contribuye con 6 meses
    const aportesDias = Math.floor((excedenteMeses % 2) * 15 + excedenteDias / 2); // Cada mes excedente contribuye con 15 días

    // Ajustar los meses y días de aportes si es necesario
    const totalAportesMeses = aportesMeses + Math.floor(aportesDias / 30);
    const finalAportesMeses = totalAportesMeses % 12;
    const finalAportesAños = aportesAños + Math.floor(totalAportesMeses / 12);
    const finalAportesDias = aportesDias % 30;

    // Actualizar la fila existente o agregar una nueva si no existe
    const tabla = document.getElementById('tabla-info');
    let filaExcedente = null;
    const filas = tabla.getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        if (celdas.length > 0 && celdas[2].innerHTML === 'art. 19 inc. b') {
            filaExcedente = filas[i];
            break;
        }
    }

    if (!filaExcedente) {
        filaExcedente = tabla.insertRow();
        const celdas = [];
        for (let i = 0; i < 9; i++) {
            celdas.push(filaExcedente.insertCell(i));
        }
        celdas[2].innerHTML = 'art. 19 inc. b';
    }

    filaExcedente.cells[0].innerHTML = '';
    filaExcedente.cells[1].innerHTML = '';
    filaExcedente.cells[3].innerHTML = '';
    filaExcedente.cells[4].innerHTML = '';
    filaExcedente.cells[5].innerHTML = finalAportesAños;
    filaExcedente.cells[6].innerHTML = finalAportesMeses;
    filaExcedente.cells[7].innerHTML = finalAportesDias;
    calcularTotales();
}



//COMPRA DE APORTES

document.getElementById('btnLey24476').addEventListener('click', function () {
    agregarCompraAportes('24.476');
});

document.getElementById('btnLey27705').addEventListener('click', function () {
    agregarCompraAportes('27.705');
});


function agregarCompraAportes(ley) {
    const tabla = document.getElementById('tabla-info');
    const fechaNacimientoInput = document.getElementById('fecha-nacimiento').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fechaNacimiento = new Date(fechaNacimientoInput);
    const fechaCumpleaños18 = new Date(fechaNacimiento);
    fechaCumpleaños18.setFullYear(fechaCumpleaños18.getFullYear() + 18);
    fechaCumpleaños18.setMonth(0); // Ajustar al primer mes del año siguiente al cumplir 18
    fechaCumpleaños18.setDate(1); // Establecer el primer día del mes

    let fechaInicioCompra = new Date(fechaCumpleaños18); // Iniciar la compra desde el primer día del año siguiente al cumplir 18

    // Establecer la fecha de corte según la ley seleccionada
    let fechaCorte;
    if (ley === '24.476') {
        fechaCorte = new Date('1993-09-30T23:59:59'); // Último segundo del 30 de septiembre de 1993
    } else if (ley === '27.705') {
        fechaCorte = new Date('2008-12-31T23:59:59'); // Último segundo del 31 de diciembre de 2008
    } else {
        console.error('Ley no válida');
        return;
    }

    // Eliminar cualquier fila de compra existente para esta ley que se superponga con las fechas de compra
    const filas = tabla.getElementsByTagName('tr');
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        if (celdas.length > 0 && celdas[2].innerHTML.includes(`Ley ${ley}`)) {
            const fechaDesdeFila = new Date(celdas[0].innerHTML);
            const fechaHastaFila = new Date(celdas[1].innerHTML);
            if ((fechaInicioCompra >= fechaDesdeFila && fechaInicioCompra <= fechaHastaFila) || 
                (fechaCorte >= fechaDesdeFila && fechaCorte <= fechaHastaFila)) {
                tabla.deleteRow(i);
                i--; // Reducir el índice ya que eliminamos una fila
            }
        }
    }

    // Agregar fila de compra si no hay superposición y la compra abarca todo el período
    const nuevaFila = tabla.insertRow();
    const celdas = [];
    for (let i = 0; i < 9; i++) {
        celdas.push(nuevaFila.insertCell(i));
    }
    celdas[2].innerHTML = `Ley ${ley}`;

    // Establecer los valores para la fila
    celdas[0].innerHTML = fechaInicioCompra.toLocaleDateString();
    celdas[1].innerHTML = fechaCorte.toLocaleDateString();
    celdas[3].innerHTML = '';
    celdas[4].innerHTML = '';
    const tiempoTranscurrido = calcularTiempoTranscurrido(fechaInicioCompra, fechaCorte);
    celdas[5].innerHTML = tiempoTranscurrido.años;
    celdas[6].innerHTML = tiempoTranscurrido.meses;
    celdas[7].innerHTML = tiempoTranscurrido.días;

    // Agregar el botón eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        tabla.deleteRow(nuevaFila.rowIndex);
        calcularTotales(); // Recalcular totales después de eliminar la fila de compra
    });
    celdas[8].appendChild(botonEliminar);

    // Recalcular totales después de agregar la fila de compra
    calcularTotales();
}

