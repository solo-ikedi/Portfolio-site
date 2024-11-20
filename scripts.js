function initAudio() {
    var audio =new Audio();
    audio.src = "national.mp3";
    audio.play();
    var speedlist = document.getElementById("speedlist");
    speedlist.addEventListener("change", changeSpeed);

    function changeSpeed(event) {
        audio.playbackRate = event.target.value;
    }
}
window.addEventListener("load", initAudio);

var wss_i = 0;
var wss_array =[" Portfolio", " Personal site", " Page"];
var wss_elem;
function wssNext(){
    wss_i++;
    wss_elem.style.opacity = 0;
    wss_elem.style.color = "red";
    
    if (wss_i > (wss_array.length- 1)) {
        wss_i = 0;
    }
    setTimeout('wssSlide()', 1000);
} 



function wssSlide (){
    wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
    setTimeout('wssNext()', 2000);

}
wss_elem = document.getElementById("wss"); wssSlide();