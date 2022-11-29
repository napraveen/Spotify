function newelem(){

const page = window.open("playlist.html");
page.addEventListener('DOMContentLoaded',()=>{
    var li = document.createElement("li");
    var inputValue = document.getElementById("sg-name-2").innerHTML;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    console.log(li);
    page.document.getElementById("myul").appendChild(li);

})

}

var audio = new Audio("example.mp3")
var isPlaying = false;

function playsound() { 
    if (audio.paused) {
        audio.play(); 
        document.getElementById("m1").innerHTML ="pause";
        
    }
        
    else {
        audio.pause(); 
        document.getElementById("m1").innerHTML ="play_arrow";
    }
        
}
