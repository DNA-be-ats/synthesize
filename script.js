const stage = document.querySelector("#stage")
const resumeButton = document.querySelector("#resume")
const trackLine = makeTrackLine()
stageWidth = stage.offsetWidth
stageHeight = stage.offsetHeight


resumeButton.addEventListener("click", () => setInterval(moveTrackLine, 250))

function makeTrackLine() {
    const gameItem = {
        element: document.querySelector('#track-line'),
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        directionX: 0,
        directionY: 0,
        speed: 10,
    }
    gameItem.width = gameItem.element.offsetWidth;
    gameItem.height = gameItem.element.offsetHeight;
    gameItem.element.style.position = "absolute";
    stage.appendChild(gameItem.element);
    return gameItem;
}

function moveTrackLine() {
    trackLine.x += trackLine.directionX * trackLine.speed;
    trackLine.y += trackLine.directionY * trackLine.speed;
    trackLine.element.style.left = `${trackLine.x}px`;
    trackLine.element.style.top = `${trackLine.y}px`;
}