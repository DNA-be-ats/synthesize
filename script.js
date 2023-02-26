const stage = document.querySelector("#stage")


import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
kaboom({
    width: +stage.style.width.value,
    height: +stage.style.height.value,
    canvas: stage,
    background: [ 0, 0, 255, ],
})


document.addEventListener("HTMLContentLoaded", makeGrid())

function makeGrid() {
    const grid = []
    let startX = 345
    let startY = 250
    for (let i = 0; i < 3; i++) {
        startX = 345
        startY += 100
        grid.push([])
        for (let j = 0; j < 6; j++) {
            startX += 100
             makeCell(startX, startY)
            grid[i].push(0)
        }
    }
    return grid
}

function makeCell (x, y) {
    return add([
        // sprite('cell'),
        pos(x, y),
        rect(60, 70),
        outline(4),
        area(),
    ])
}





