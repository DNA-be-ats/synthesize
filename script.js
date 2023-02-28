const stage = document.querySelector("#stage")
const resumeButton = document.querySelector("#resume")
const trackLine = setUpTrackLine()
const atTheReady = setupCells()
const allRows = document.querySelectorAll(".row")
const BPMButton = document.querySelector("#BPM")
const BPMinput = document.querySelector("#BPMinput")


let currBPM = 120






stageWidth = stage.offsetWidth
stageHeight = stage.offsetHeight
setTrackLinePosition()



resumeButton.addEventListener("click", moveTrackLine)
atTheReady.forEach(cell => {
    // cell.element.addEventListener('dbclick', (e) => {
    //     console.log(e)
    //     const clickedCell = e.target
    //     let clickedCellStyle = clickedCell.style
    //     clickedCellStyle.backgroundColor = "red"
    // })
    cell.element.addEventListener('click', changeCellSate)
})

// BPMinput.addEventListener("submit", (e) =>{
//     e.preventDefault()
//     console.log(e)
// })

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
    const anim = setInterval(animate,10)
    function animate() {
        isTouchingRow ()
        currPositionX++
        const newPosition = currPositionX
        if(newPosition >= stageWidth*1.25) clearInterval(anim)
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
            activeCells(currRow)
        } else{
            currRow.classList.remove("active-row")
        } 
    }
}

function activeCells(row) {
// RE-VISIT THIS ONCE YOU MADE CELLS CLICKABLE

//     row.classList.add("active-row")
//     row.forEach(cell => {
//         cell.active = true
//         cell.sound = new Audio(cell.element.dataset.sound)
//         cell.sound.play()
//     })
}

// function playSound(cell) {

// }

function changeBPM() {


}
/////////////////////////////////////////////
////Attempting Audio Import for Samples
////////////////////////////////////////////
bass.addEventListener("click", function(e){
    console.log(e)
    const bassAudio = document.getElementById("sample-sound");
    // const audioCtx = new AudioContext(); 
    bassAudio.play();

})

function changeCellSate(event) {
    const clickedCell = event.target
    let clickedCellStyle = clickedCell.style
    if(clickedCell.classList.contains("active-cell")) {
        clickedCell.classList.remove("active-cell")
        clickedCellStyle.backgroundColor = "black"
    } else {
        const childrenOfRow = Array.from(clickedCell.parentNode.children)
        clickedCell.classList.add("active-cell")
        if(childrenOfRow.indexOf(clickedCell) === 0){
            clickedCellStyle.backgroundColor = "#970380"
        } else if(childrenOfRow.indexOf(clickedCell) === 1){
            clickedCellStyle.backgroundColor = "#2e1258"
        } else if(childrenOfRow.indexOf(clickedCell) === 2){
            clickedCellStyle.backgroundColor = "#fae273"
        } 
    }
   
}

// function chooseCellColor(Cell) {
    
//     if(childrenOfRow.indexOf(clickedCell) === 0){
//         clickedCellStyle.backgroundColor = "#970380"
//     } else if(childrenOfRow.indexOf(clickedCell) === 1){
//         clickedCellStyle.backgroundColor = "#2e1258"
//     } else if(childrenOfRow.indexOf(clickedCell) === 2){
//         clickedCellStyle.backgroundColor = "#fae273"
//     } 
// }
// function rightclick() {
//     const rightclick;
//     const e = window.event;
//     if (e.which) rightclick = (e.which == 3);
//     else if (e.button) rightclick = (e.button == 2);
//     alert(rightclick); // true or false, you can trap right click here by if comparison
// }