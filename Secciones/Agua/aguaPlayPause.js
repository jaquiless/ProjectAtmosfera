var estadoPlayer = "pause";

//Funciones para cambiar sonido play/pause y la imagen del boton

//Funcion para el boton 1
function playPause1() {
  var audio = document.getElementById("audioAgua1");
  var imagen = document.getElementById("imagenControl1");
  if (estadoPlayer == "pause") {
    estadoPlayer = "play";
    audio.play();
    audio.loop =true;
  audio.playbackRate = 2;
    imagen.src = "./img/imgPause/lluviaPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/lluvia.png";
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
    imagen.src = "./img/imgPause/rioPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/rio.png";
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
    imagen.src = "./img/imgPause/olaPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/ola.png";
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
    imagen.src = "./img/imgPause/oceanoPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/oceano.png";
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
    imagen.src = "./img/imgPause/goteoPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/goteo.png";
    estadoPlayer = "pause";
    audio.pause();
    imagen.classList.remove("giro");
  }
}

function repro(){
  var audio = new Audio('https://github.com/AlexRmCreative/Proyecto-Final-Esplai/blob/master/Secciones/Sounds/Agua/Rio.mp3');
    audio.play();
}
