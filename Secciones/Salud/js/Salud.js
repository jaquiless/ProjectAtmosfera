/* Llamada a la API 🎹🔥 */
const mensajesSalud = [];
const descriptions = [];
const url = "http://localhost:9090/section/5/media";

async function fetchMensajesJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
}

fetchMensajesJSON().then((json) => {
    for (const element of json.media) {
    mensajesSalud.push(element.urls);
    descriptions.push(element.description);
    }

    document.getElementById("salud-0").innerText=descriptions[0];
    document.getElementById("salud-1").innerText=descriptions[6];
    document.getElementById("salud-2").innerText=descriptions[2];
    document.getElementById("salud-3").innerText=descriptions[17];
    document.getElementById("salud-4").innerText=descriptions[13];
    document.getElementById("salud-5").innerText=descriptions[10];
});

var maxNotiNumber = [0,0,0,0,0,0];
var notificacionNumber = [0,0,0,0,0,0];
function generarNotificacion(idType = ""){
    //parrafoContenido.textContent = mensajesSalud[0];

    var notificador = document.querySelectorAll(".notifySpace"); //4
    let ids = ["Alimentacion", "Ejercicio", "Mindfulness", "Yoga", "Tecnologia", "Introduccion"];
    
    if(idType == ids[0] && maxNotiNumber[0] <= 4)
    {
        maxNotiNumber[0]++;
        setTimeout(() => {
            maxNotiNumber[0]--;
        }, 12000);
    }
    if(idType == ids[1] && maxNotiNumber[1] <= 4)
    {
        maxNotiNumber[1]++;
        setTimeout(() => {
            maxNotiNumber[1]--;
        }, 12000);
    }
    if(idType == ids[2] && maxNotiNumber[2] <= 2)
    {
        maxNotiNumber[2]++;
        setTimeout(() => {
            maxNotiNumber[2]--;
        }, 12000);
    }
    if(idType == ids[3] && maxNotiNumber[3] <= 4)
    {
        maxNotiNumber[3]++;
        setTimeout(() => {
            maxNotiNumber[3]--;
        }, 12000);
    }
    if(idType == ids[4] && maxNotiNumber[4] <= 3)
    {
        maxNotiNumber[4]++;
        setTimeout(() => {
            maxNotiNumber[4]--;
        }, 12000);
    }
    if(idType == ids[5] && maxNotiNumber[5] <= 5)
    {
        maxNotiNumber[5]++;
        setTimeout(() => {
            maxNotiNumber[5]--;
        }, 12000);
    }


    for (const element of notificador) {
        //Alimentación
        if(maxNotiNumber[0] <= 4){
            if(idType == ids[0]){
                if(element.id == ids[0]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[0]){
                            
                            case 0: element.removeChild(divNotificacion); break;
                            
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[0]){
                        case 0: parrafoContenido.textContent = mensajesSalud[6]; break;
                        case 1: parrafoContenido.textContent = mensajesSalud[7]; break;
                        case 2: parrafoContenido.textContent = mensajesSalud[8]; break;
                        case 3: parrafoContenido.textContent = mensajesSalud[9]; break;
                        // case 4: parrafoContenido.textContent = mensajesSalud[2]; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleNaranja";
                    parrafoContenido.className = "notificacionContent notiContNaranja";

                    notificacionNumber[0]++;
                    if(notificacionNumber[0] >= 5) {
                        notificacionNumber[0] = 0;
                    }
                }
            }
        }

        //Ejercicio
        if(maxNotiNumber[1] <= 4){
            if(idType == ids[1]){
                if(element.id == ids[1]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('h4');
                    setTimeout(() => {
                        switch(notificacionNumber[1]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[1]){
                        case 0: parrafoContenido.textContent = mensajesSalud[2]; break;
                        case 1: parrafoContenido.textContent = mensajesSalud[3]; break;
                        case 2: parrafoContenido.textContent = mensajesSalud[4]; break;
                        case 3: parrafoContenido.textContent = mensajesSalud[5]; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleCerceta";
                    parrafoContenido.className = "notificacionContent notiContCerceta";

                    notificacionNumber[1]++;
                    if(notificacionNumber[1] >= 5) {
                        notificacionNumber[1] = 0;
                    }
                }
            }
        }

        //Mindfulness
        if(maxNotiNumber[2] <= 2){
            if(idType == ids[2]){
                if(element.id == ids[2]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[2]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[2]){
                        case 0: parrafoContenido.textContent = mensajesSalud[17]; break;
                        case 1: parrafoContenido.textContent = mensajesSalud[18]; break;
                        // case 2: parrafoContenido.textContent = console.log(mensajesSalud[2]); break;
                        // case 3: parrafoContenido.textContent = console.log(mensajesSalud[2]); break;
                        // case 4: parrafoContenido.textContent = console.log(mensajesSalud[2]); break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleAmarillo";
                    parrafoContenido.className = "notificacionContent notiContAmarillo";

                    notificacionNumber[2]++;
                    if(notificacionNumber[2] >= 5) {
                        notificacionNumber[2] = 0;
                    }
                }
            }
        }

        //Yoga
        if(maxNotiNumber[3] <= 4){
            if(idType == ids[3]){
                if(element.id == ids[3]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[3]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[3]){
                        case 0: parrafoContenido.textContent = mensajesSalud[13]; break;
                        case 1: parrafoContenido.textContent = mensajesSalud[14]; break;
                        case 2: parrafoContenido.textContent = mensajesSalud[15]; break;
                        case 3: parrafoContenido.textContent = mensajesSalud[16]; break;
                        // case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleRosa";
                    parrafoContenido.className = "notificacionContent notiContRosa";

                    notificacionNumber[3]++;
                    if(notificacionNumber[3] >= 5) {
                        notificacionNumber[3] = 0;
                    }
                }
            }
        }

        //Tecnologia
        if(maxNotiNumber[4] <= 3){
            if(idType == ids[4]){
                if(element.id == ids[4]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[4]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[5]){
                        case 0: parrafoContenido.textContent = mensajesSalud[10]; break;
                        case 1: parrafoContenido.textContent = mensajesSalud[11]; break;
                        case 2: parrafoContenido.textContent = mensajesSalud[12]; break;
                        // case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        // case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleAzul";
                    parrafoContenido.className = "notificacionContent notiContAzul";

                    notificacionNumber[4]++;
                    if(notificacionNumber[4] >= 5) {
                        notificacionNumber[4] = 0;
                    }
                }
            }
        }

        //Introduccion

        if(maxNotiNumber[5] <= 2){
            if(idType == ids[5]){
                if(element.id == ids[5]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[5]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[5]){
                        case 0: parrafoContenido.textContent = mensajesSalud[0]; break;
                        case 1: parrafoContenido.textContent = mensajesSalud[1]; break;
                        // case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        // case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        // case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleBlanco";
                    parrafoContenido.className = "notificacionContent notiContBlanco";

                    notificacionNumber[5]++;
                    if(notificacionNumber[5] >= 5) {
                        notificacionNumber[5] = 0;
                    }
                }
            }
        }
    }
}

