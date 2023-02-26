const stage = document.querySelector("#stage")
const resumeButton = document.querySelector("#resume")
const trackLine = {
    element : document.createElement("div")
    width :
}


document.addEventListener("HTMLContentLoaded", makeTrackLine())
resumeButton.addEventListener("click", setInterval(moveTrackLine, 250))


function makeTrackLine (){
    const trackLine = document.createElement("div")
    stage.appendChild(trackLine)
    trackLine.style.width = "10px"
    trackLine.style.height = "250px"
    trackLine.style.backgroundColor = "white"
    trackLine.style.position = "absolute"
    return trackLine
}

function moveTrackLine (){
    trackLine.style.left = 
}

