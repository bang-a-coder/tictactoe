const boxes = document.querySelectorAll(`.box`)

boxes.forEach(element => element.addEventListener(`click`, function(e){
    console.log(e.target.id)
}))

const Gameboard = (() => {
    const grid = boxes
    
    return {grid}
})()

const Human = () => {
    age = 10
    return {age}
}

function renderGrid() {
    let elements = Gameboard.grid
    ticker = 0
    elements.forEach(element => {
        if (ticker === 0) {
            element.innerHTML = `X`
            ticker++
        } else {
            element.innerHTML = `O`
            ticker--
        }
    })
    
}

renderGrid()