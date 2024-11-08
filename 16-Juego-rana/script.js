var tablero = document.getElementById("juego")//recogemos el valor del tablero de juego
var rana = document.getElementById("fotoRana")//recogemos la imagen de la rana
rana.addEventListener("click",clickRana);//Añadimos el evento de click a la imagen de la rana llamanado a la funcion 
var veces =0;
var nAciertos = 0;
var time=1000;
var tamaño = 200;

console.log(tamaño);

var intervalID=setInterval(setPosition, time)

function setPosition() {
    var maxX = tablero.offsetWidth - rana.offsetWidth
    var maxY = tablero.offsetHeight - rana.offsetHeight
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    rana.style.marginTop = randomY + "px";
    rana.style.marginLeft = randomX + "px";
}
function clickRana(){
    let dado = document.getElementById("dado");
    veces++;
    clearInterval(intervalID);
    time-=time*0.05;
    tamaño -=10
    rana.style.height=`${tamaño}px`
    let resutado = dado.innerHTML = veces;
    setPosition();
    intervalID =setInterval(setPosition, time);
}









