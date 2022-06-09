var video = document.getElementById("videoPlayer");
function playPause() {
    if (video.paused) video.play();
    else video.pause();
}
var audio = document.getElementById("audioPlayer");
function playPauseAd() {
    if (audio.onpause) audio.onplay;
    else audio.onpause;
}
const grande = document.querySelector(".imagenes");
const punto = document.querySelectorAll(".punto");
// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK
// Recorrer TODOS los punto
punto.forEach((cadaPunto, i1)=>{
    // Asignamos un CLICK a cadaPunto
    punto[i1].addEventListener("click", ()=>{
        // Guardar la posición de ese PUNTO
        let posicion = i1;
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.33;
        // MOVEMOS el grand
        grande.style.transform = `translateX(${operacion}%)`;
        // Recorremos TODOS los punto
        punto.forEach((cadaPunto, i)=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove("activo");
        });
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i1].classList.add("activo");
    });
}) /*
var imagen = document.getElementById("image")
var imagenes = [
    "multimedia/escenario1.png",
    "multimedia/escenario2.png",
    "multimedia/escenario3.png"
]
function siguiente(){
    if (imagen == imagenes[2]){
        imagen.src = imagenes[0]
    }
    else {
        imagen.src = imagenes[(imagenes.indexOf(imagen)-1)]
    }
}
function atras(){
    if (imagen == imagenes[0]){
        imagen.src = imagenes[imagenes.length]
    }
    else{
        imagen.src = imagenes[(imagenes.indexOf(imagen)+1)]
    }
}

/*var imagen = document.getElementById("carrusel")
var imagenes = ["escenario1.png","escenario2.png","escenario3.png"]
function anterior(){
    if (imagen == imagenes[0]){
        imagen = imagenes[3]
    }
    else{
        imagen = imagenes[(imagenes.indexOf(imagen))-1]
    }
}
function siguiente(){
    if (imagen == imagenes[3]){
        imagen = imagenes[0]
    }
    else{
        imagen = imagenes[(imagenes.indexOf(imagen))+1]
    }
}*/ ;

//# sourceMappingURL=index.72fb3220.js.map
