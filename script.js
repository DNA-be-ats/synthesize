const stage = document.querySelector("#stage")
const sampleRowCells = Array.from(document.getElementsByClassName("sample-sound"))
const playButton = document.querySelector("#play")
const resetButton = document.querySelector("#reset")
const trackLine = setUpTrackLine()
const atTheReady = setupCells()
const allRows = document.querySelectorAll(".row")
const BPMButton = document.querySelector("#BPM")
const BPMinput = document.querySelector("#BPMinput")
const possibleCellSounds = [new Audio('audio-assets/!anotherdownohat [ohat] @typical1k.wav'),new Audio('audio-assets/CB_Clap.wav'), new Audio('audio-assets/CB_Hat.wav'),new Audio("audio-assets/CB_Kick.wav"), new Audio("audio-assets/CB_snare.wav")]
const possibleCellColors = ["#970380","#2e1258","#fae273",'red','blue']
const form = document.querySelector("#form")
const allButtons = document.getElementsByTagName('button')



let rowCounter = 0
let currBPM = 120
let convertedBPM = 1000/(currBPM/60)
stageWidth = stage.offsetWidth
stageHeight = stage.offsetHeight
setTrackLinePosition()
setUpSampleRowCells()


resetButton.addEventListener("click",resetAllCells)
form.addEventListener('submit', changeBPM)
playButton.addEventListener("click", (e) => {
    const target = e.target
    const bpmInterval = setInterval(playActiveCells, convertedBPM)
    if(target.id === 'play'){
        e.target.id = 'resume'
        e.target.textContent = 'Resume'
        moveTrackLine()
    } else {
        e.target.id = 'play'
        e.target.textContent = 'Play'

    }
})
atTheReady.forEach(cell => {
    cell.element.addEventListener('click', changeCellSate)
})

function setUpSampleRowCells(){
    for(let i = 0; i < sampleRowCells.length; i++){
        const currCell = sampleRowCells[i]
        currCell.style.backgroundColor = possibleCellColors[i]
        currCell.addEventListener('click', () => {
            possibleCellSounds[sampleRowCells.indexOf(currCell)].play()
        })
    }
}

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
    console.log(gameItem.getBoundingClientRect().left)
    gameItem.width = gameItem.offsetWidth;
    gameItem.height = gameItem.offsetHeight;
    gameItem.style.position = "absolute";
    return gameItem;
}

 function moveTrackLine() {
    setTrackLinePosition()
    let currPositionX = trackLine.getBoundingClientRect().left
    const anim = setInterval(animate,convertedBPM/80)
    function animate() {
        currPositionX++
        const newPosition = currPositionX 
        if(newPosition >= stageWidth*1.25) {
            playButton.id = 'play'
            playButton.textContent = 'Play'
            clearInterval(anim)
            setTrackLinePosition()
        }else {
            trackLine.style.left = `${newPosition}px`
        }
    }
 }

function setTrackLinePosition() {
    const row1 = document.querySelector("#row1")
    trackLine.style.left = `${row1.getBoundingClientRect().left - 2}px`;
}

function playActiveCells() {
    const currRow = allRows[rowCounter]
    const childrenOfRow = Array.from(currRow.children)
    childrenOfRow.forEach((cell,i) => {
        if(cell.classList.contains("active-cell")){
            possibleCellSounds[i].play()
            console.log(possibleCellSounds[i])
        }
    })
    rowCounter++
    if(rowCounter >= allRows.length) {
        rowCounter = 0
    }
}

function changeBPM(e) {
    e.preventDefault()
    currBPM = Number(e.target.children[1].value)
    convertedBPM = 1000/(currBPM/60)
}

function changeCellSate(event) {
    const clickedCell = event.target
    let clickedCellStyle = clickedCell.style
    if(clickedCell.classList.contains('sample-sound')) {
        possibleCellSounds[sampleRowCells.indexOf(clickedCell)].play()
    } else if(clickedCell.classList.contains("active-cell")) {
        clickedCell.classList.remove("active-cell")
        clickedCellStyle.backgroundColor = "black"
    } else {
        const childrenOfRow = Array.from(clickedCell.parentNode.children)
        clickedCell.classList.add("active-cell")
        clickedCellStyle.backgroundColor = possibleCellColors[childrenOfRow.indexOf(clickedCell)]
    }
}

function resetAllCells() {
    atTheReady.forEach(cell => {
        cell.element.classList.remove("active-cell")
        cell.element.style.backgroundColor = "black"
    })
}

function playAudio(){
    new Audio("audio-assets/clickSound.mp3").play()
}