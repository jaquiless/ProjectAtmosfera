var estadoPlayer = "pause";
var botonSonando = 0;

//Funcion para que al clicar un boton, se detenga el anterior ya activado
function paraDeGirar() {
  var imagen1 = document.getElementById("imgControlHoguera");
  var imagen2 = document.getElementById("imgControlChimenea");
  var imagen3 = document.getElementById("imgControlSecador");
  var imagen4 = document.getElementById("imgControlMicroondas");
  var imagen5 = document.getElementById("imgControlCalefactor");
  imagen1.src = "./img/hoguera.png";
  imagen2.src = "./img/chimenea.png";
  imagen3.src = "./img/Secador.png";
  imagen4.src = "./img/microondas.png";
  imagen5.src = "./img/calefactor.png";

  imagen1.classList.remove("giro");
  imagen2.classList.remove("giro");
  imagen3.classList.remove("giro");
  imagen4.classList.remove("giro");
  imagen5.classList.remove("giro");
}

/* Llamada a la API 🎹🔥 */
const audiosCalido = [];
const descriptions = [];
const url = "http://localhost:9090/section/1/media";

async function fetchSonidosJSON() {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
}

fetchSonidosJSON().then((json) => {
  for (const element of json.media) {
    audiosCalido.push(element.urls);
    descriptions.push(element.description);
  }
  document.getElementById("calido-0").innerText = descriptions[0];
  document.getElementById("calido-1").innerText = descriptions[1];
  document.getElementById("calido-2").innerText = descriptions[2];
  document.getElementById("calido-3").innerText = descriptions[3];
  document.getElementById("calido-4").innerText = descriptions[4];
});

//Funcion para cambiar sonido play/pause y la imagen del boton

function playPauseCalido(botonAudio) {
  var audio = document.getElementById("audioFile");
  if (botonSonando != botonAudio){
    estadoPlayer = "pause";
  }

  switch (botonAudio) {
    case 1:
      audio.src = audiosCalido[0];
      var imagen = document.getElementById("imgControlHoguera");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 1;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/hogueraPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/hoguera.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 2:
      audio.src = audiosCalido[1];
      var imagen = document.getElementById("imgControlChimenea");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 2;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/chimeneaPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/chimenea.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 3:
      audio.src = audiosCalido[2];
      var imagen = document.getElementById("imgControlSecador");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 3;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/secadorPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/secador.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 4:
      audio.src = audiosCalido[3];
      var imagen = document.getElementById("imgControlMicroondas");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 4;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/microondasPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/microondas.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 5:
      audio.src = audiosCalido[4];
      var imagen = document.getElementById("imgControlCalefactor");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 5;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/calefactorPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/calefactor.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;
  }
}
