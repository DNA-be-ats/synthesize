/*
<button id="start" class = "sound" onclick = "playAudio('clickSound.mp3'); window.location.href= './mid.html';">Start</button>
        <br/>
        <br>
    
         <i class="fa-solid fa-volume-high" onclick = "playTrance('Trance.mp3')"></i>
         <div>
*/

let startButton = document.getElementById("start").addEventListener("click", handleStartClick)

function playAudio(){
    new Audio("./audio-assets/clickSound.mp3").play()
}

function playTrance(){
    new Audio("../synthesize/sounds/Trance.mp3").play()
}

function goToMidPage(){
    window.location.href= './mid.html';
}

function handleStartClick(){
   
    goToMidPage()
}

