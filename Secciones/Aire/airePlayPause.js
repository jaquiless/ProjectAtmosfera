var estadoPlayer = "pause";

//Funciones para cambiar sonido play/pause y la imagen del boton

//Funcion para el boton 1
function playPause1() {
    var audio = document.getElementById("audioFile1");
    var imagen = document.getElementById("imagenControl1");
  if (estadoPlayer == "pause") {
    estadoPlayer = "play"; 
    audio.play();
    audio.loop =true;
    audio.playbackRate = 2;
    imagen.src = "./img/imgPause/aireAcondicionadoPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/AireAcondicionado.png";
    estadoPlayer = "pause";
    audio.pause();
    imagen.classList.remove("giro");
  }
}

//Funcion para el boton 2
function playPause2() {
  var audio = document.getElementById("audioFile2");
  var imagen = document.getElementById("imagenControl2");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  audio.loop =true;
  audio.playbackRate = 2;
  imagen.src = "./img/imgPause/blizzardPause.png";
  imagen.className += " giro";

} else {
  imagen.src = "./img/blizzard.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}

//Funcion para el boton 3
function playPause3() {
  var audio = document.getElementById("audioFile3");
  var imagen = document.getElementById("imagenControl3");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  audio.loop =true;
  audio.playbackRate = 2;
  imagen.src = "./img/imgPause/ventiladorPause.png";
  imagen.className += " giro";
} else {
  imagen.src = "./img/ventilador.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}

//Funcion para el boton 4
function playPause4() {
  var audio = document.getElementById("audioFile4");
  var imagen = document.getElementById("imagenControl4");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  audio.loop =true;
  audio.playbackRate = 2;
  imagen.src = "./img/imgPause/ventiscaPause.png";
  imagen.className += " giro";
} else {
  imagen.src = "./img/ventisca.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}

//Funcion para el boton 5
function playPause5() {
  var audio = document.getElementById("audioFile5");
  var imagen = document.getElementById("imagenControl5");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  audio.loop =true;
  audio.playbackRate = 2;
  imagen.src = "./img/imgPause/vientoPause.png";
  imagen.className += " giro";
} else {
  imagen.src = "./img/viento.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}
