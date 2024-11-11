var tablero = document.getElementById("juego")//recogemos el valor del tablero de juego
var rana = document.getElementById("fotoRana")//recogemos la imagen de la rana
rana.addEventListener("click",clickRana);//Añadimos el evento de click a la imagen de la rana llamanado a la funcion 
var veces =0;
var nAciertos = 0;
var time=1000;
var tamaño = 200;

var intervalID=setInterval(setPosition, time)//Iniciamos un interval

/*Funcion que cambia a la rana de forma aleatoria por el tablero*/
function setPosition() { 
    //Tamaño por donde puede estar la rana
    var maxX = tablero.offsetWidth - rana.offsetWidth
    var maxY = tablero.offsetHeight - rana.offsetHeight
    //Posicion random
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    //Movimiento de la rana
    rana.style.marginTop = randomY + "px";
    rana.style.marginLeft = randomX + "px";
}
/*Efecto sobre la rana cuando le haces click */
function clickRana(){
    let dado = document.getElementById("dado");
    veces++;//Mostramos el incremento del marcador
    clearInterval(intervalID);//borramos el interval anterior
    /*Bajamos un 5% el timer y reducimos el tamaño */
    time-=time*0.05;
    tamaño -=10
    rana.style.height=`${tamaño}px`//Actualizamos el tamaño de la rana
    let resutado = dado.innerHTML = veces;//Mostramos las veces dadas a la rana
    setPosition();//cambia la posicion otra vez
    intervalID =setInterval(setPosition, time);//hace otro interval con el nuevo tiempo
}









