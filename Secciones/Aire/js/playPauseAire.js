var estadoPlayer = "pause";
var botonSonando = 0;

//Funcion para que al clicar un boton, se detenga el anterior ya activado
function paraDeGirar() {
  var imagen1 = document.getElementById("imgControlAireAcondicionado");
  var imagen2 = document.getElementById("imgControlTormenta");
  var imagen3 = document.getElementById("imgControlVentilador");
  var imagen4 = document.getElementById("imgControlVentisca");
  var imagen5 = document.getElementById("imgControlViento");
  imagen1.src = "./img/aireAcondicionado.png";
  imagen2.src = "./img/tormenta.png";
  imagen3.src = "./img/ventilador.png";
  imagen4.src = "./img/ventisca.png";
  imagen5.src = "./img/viento.png";
  
  imagen1.classList.remove("giro");
  imagen2.classList.remove("giro");
  imagen3.classList.remove("giro");
  imagen4.classList.remove("giro");
  imagen5.classList.remove("giro");
}

/* Llamada a la API 🎹🔥 */
const audiosAire = [];
const descriptions = [];
const url = "http://localhost:9090/section/4/media";

async function fetchSonidosJSON() {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
}

fetchSonidosJSON().then((json) => {
  for (const element of json.media) {
    audiosAire.push(element.urls);
    descriptions.push(element.description);
  }
  document.getElementById("aire-0").innerText = descriptions[3];
  document.getElementById("aire-1").innerText = descriptions[2];
  document.getElementById("aire-2").innerText = descriptions[4];
  document.getElementById("aire-3").innerText = descriptions[1];
  document.getElementById("aire-4").innerText = descriptions[0];
});

//Funcion para cambiar sonido play/pause y la imagen del boton

function playPauseAire(botonAudio) {
    var audio = document.getElementById("audioFile");
    if (botonSonando != botonAudio){
      
      estadoPlayer = "pause";
    }
    
    switch (botonAudio) {
      case 1:
    audio.src = audiosAire[3];
    var imagen = document.getElementById("imgControlAireAcondicionado");
    
    if (estadoPlayer == "pause") {
      paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 1;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/aireAcondicionadoPause.png";
      imagen.className += " giro";
    } else {
      imagen.src = "./img/aireAcondicionado.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;

  case 2:
    audio.src = audiosAire[2];
    var imagen = document.getElementById("imgControlTormenta");
    
    if (estadoPlayer == "pause") {
      paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 2;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/tormentaPause.png";
      imagen.className += " giro";
    } 
    else {
      imagen.src = "./img/tormenta.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;

    case 3:
      audio.src = audiosAire[4];
      var imagen = document.getElementById("imgControlVentilador");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 3;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src ="./img/imgPause/ventiladorPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/ventilador.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

        case 4:
      audio.src = audiosAire[1];
      var imagen = document.getElementById("imgControlVentisca");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 4;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/ventiscaPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/ventisca.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

        case 5:
      audio.src = audiosAire[0];
      var imagen = document.getElementById("imgControlViento");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 5;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/vientoPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/viento.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;
      }
    }