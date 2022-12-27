var estadoPlayer = "pause";
var botonSonando = 0;

//Funcion para que al clicar un boton, se detenga el anterior ya activado
function paraDeGirar() {
  var imagen1 = document.getElementById("imgControlBosque");
  var imagen2 = document.getElementById("imgControlJungla");
  var imagen3 = document.getElementById("imgControlSabana");
  var imagen4 = document.getElementById("imgControlFondoMarino");
  var imagen5 = document.getElementById("imgControlBosqueNocturno");
  imagen1.src = "./img/bosque.png";
  imagen2.src = "./img/jungla.png";
  imagen3.src = "./img/sabana.png";
  imagen4.src = "./img/fondoMarino.png";
  imagen5.src = "./img/bosqueNocturno.png";
  
  imagen1.classList.remove("giro");
  imagen2.classList.remove("giro");
  imagen3.classList.remove("giro");
  imagen4.classList.remove("giro");
  imagen5.classList.remove("giro");
}

/* Llamada a la API 🎹🔥 */
const audiosSalvaje = [];
const descriptions = [];
const url = "http://localhost:9090/section/2/media";

async function fetchSonidosJSON() {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
}

fetchSonidosJSON().then((json) => {
  for (const element of json.media) {
    audiosSalvaje.push(element.urls);
    descriptions.push(element.description);
  }
  document.getElementById("salvaje-0").innerText = descriptions[0];
  document.getElementById("salvaje-1").innerText = descriptions[1];
  document.getElementById("salvaje-2").innerText = descriptions[2];
  document.getElementById("salvaje-3").innerText = descriptions[3];
  document.getElementById("salvaje-4").innerText = descriptions[4];
});

//Funcion para cambiar sonido play/pause y la imagen del boton

function playPauseSalvaje(botonAudio) {
    var audio = document.getElementById("audioFile");
    if (botonSonando != botonAudio){
      
      estadoPlayer = "pause";
    }
  
    switch (botonAudio) {
      case 1:
    audio.src = audiosSalvaje[0];
    var imagen = document.getElementById("imgControlBosque");
    if (estadoPlayer == "pause") {
        paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 1;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/bosquePause.png";
      imagen.className += " giro";
    } else {
      imagen.src = "./img/bosque.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;

  case 2:
    audio.src = audiosSalvaje[1];
    var imagen = document.getElementById("imgControlJungla");
    if (estadoPlayer == "pause") {
        paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 2;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/junglaPause.png";
      imagen.className += " giro";
    } else {
      imagen.src = "./img/jungla.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;

  case 3:
    audio.src = audiosSalvaje[2];
    var imagen = document.getElementById("imgControlSabana");
    if (estadoPlayer == "pause") {
        paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 3;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/sabanaPause.png";
      imagen.className += " giro";
    } else {
      imagen.src = "./img/sabana.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;

  case 4:
    audio.src = audiosSalvaje[3];
    var imagen = document.getElementById("imgControlFondoMarino");
    if (estadoPlayer == "pause") {
        paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 4;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/fondoMarinoPause.png";
      imagen.className += " giro";
    } else {
      imagen.src = "./img/fondoMarino.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;

  case 5:
    audio.src = audiosSalvaje[4];
    var imagen = document.getElementById("imgControlBosqueNocturno");
    if (estadoPlayer == "pause") {
        paraDeGirar();
      estadoPlayer = "play";
      botonSonando = 5;
      audio.play();
      audio.loop = true;
      audio.playbackRate = 2;
      imagen.src = "./img/imgPause/bosqueNocturnoPause.png";
      imagen.className += " giro";
    } else {
      imagen.src = "./img/bosqueNocturno.png";
      estadoPlayer = "pause";
      audio.pause();
      imagen.classList.remove("giro");
    }
    break;
      }
    }