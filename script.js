const stage = document.querySelector("#stage")
const resumeButton = document.querySelector("#resume")
const trackLine = setUpTrackLine()
const atTheReady = setupCells()
const allRows = document.querySelectorAll(".row")





stageWidth = stage.offsetWidth
stageHeight = stage.offsetHeight
setTrackLinePosition()



resumeButton.addEventListener("click", moveTrackLine)
atTheReady.forEach(cell => {
    cell.element.addEventListener(true, () => {
        console.log(yeah)
    })
})

function setupCells () {
    const collectedCells = document.querySelectorAll(".cell")
    return Array.from(collectedCells).map((cell) => {
        return {
            element: cell,
            x : cell.getBoundingClientRect().x,
            y : cell.getBoundingClientRect().y,
            width : cell.getBoundingClientRect().width,
            height : cell.getBoundingClientRect().height,
            active: false,
            sound: null,
        }
    }) 
}

function setUpTrackLine() {
    const gameItem = document.querySelector('#track-line')
    gameItem.width = gameItem.offsetWidth;
    gameItem.height = gameItem.offsetHeight;
    gameItem.style.position = "absolute";
    return gameItem;
}

 function moveTrackLine() {
    setTrackLinePosition()
    let currPositionX = trackLine.getBoundingClientRect().left
    const anim = setInterval(animate,5)
    function animate() {
        isTouchingRow ()
        currPositionX++
        const newPosition = currPositionX
        if(newPosition >= stageWidth*1.46) clearInterval(anim)
        trackLine.style.left = `${newPosition}px`;
    }
 }

function setTrackLinePosition () {
    const row1 = document.querySelector("#row1")
    trackLine.style.left = `${row1.getBoundingClientRect().left - 10}px`;
}

function isTouchingRow () {
    for(let i = 0; i < allRows.length; i++) {
        const currRow = allRows[i]
        if(trackLine.getBoundingClientRect().x + trackLine.offsetWidth > currRow.getBoundingClientRect().x && trackLine.getBoundingClientRect().x < currRow.getBoundingClientRect().x + currRow.offsetWidth){
            currRow.classList.add("active")
        } else{
            currRow.classList.remove("active")
        } 
    }
}

// function trackLineIsAtEnd() {

// }