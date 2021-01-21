const clearButton = document.querySelector(`.clear-button`)

let totem = `X`

const Gameboard = (() => {
    const grid =  Array.from(document.querySelectorAll(`.box`))
        grid.forEach(element => element.addEventListener(`click`, function (e) {
            if (e.target.innerHTML != ``) return
            e.target.innerHTML = totem
            if (totem === `X`) {totem = `O`} else {totem = `X`}
            Gameboard.gameCheck()
        }))

    const clear = () => {Gameboard.grid.forEach(element => element.innerHTML = ``)}

    const gameCheck = () => {
        if (verticalCheck(grid)) {alert( verticalCheck(grid) + ` won!`)}
        if (horizontalCheck(grid)) {alert(horizontalCheck(grid) + `won`)}
        if (diagonalCheck(grid)) {alert(diagonalCheck(grid) + ` won`)}
    }

    return {grid, clear, gameCheck}
})()

const Human = () => {
    age = 10
    return {age}
}

function verticalCheck(arr){
    for (i = 0; i < 3; i++) {
        if (arr[i].innerHTML === arr[i + 3].innerHTML && arr[i].innerHTML === arr[i + 6].innerHTML) {
            return  arr[i].innerHTML
        }
    }
}

function horizontalCheck(arr){
    for (i = 0; i < 6; i += 3) {
        if (arr[i].innerHTML === arr[i + 1].innerHTML && arr[i].innerHTML === arr[i + 2].innerHTML) {
            return arr[i].innerHTML
        }
    }
}

function diagonalCheck(arr){
    if (arr[0].innerHTML === arr[4].innerHTML && arr[0].innerHTML === arr[8].innerHTML){
        return arr[0].innerHTML
    } else if (arr[2].innerHTML === arr[4].innerHTML && arr[2].innerHTML === arr[6].innerHTML){
        return arr[2].innerHTML
    }
}


clearButton.addEventListener(`click`, function() {
    Gameboard.clear()
})