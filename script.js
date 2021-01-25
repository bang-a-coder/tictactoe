const clearButton = document.querySelector(`.clear-button`)
const formPopUp = document.querySelector(`.form-popup`)
const formSubmitButton = document.querySelector(`#form-submit`)
const formContainer = document.querySelector(`.container`)
const playerOneField = document.querySelector(`#player-one`)
const playerTwoField = document.querySelector(`#player-two`)

let totem = `X`

const Gameboard = (() => {
    const grid =  Array.from(document.querySelectorAll(`.box`))
        grid.forEach(element => element.addEventListener(`click`, function (e) {
            if (e.target.innerHTML != ``) return
            e.target.innerHTML = totem
            if (totem === `X`) {totem = `O`} else {totem = `X`}
            Game.gameCheck()
            Game.switchIndicator()
    }))

    const clear = () => {Gameboard.grid.forEach(element => element.innerHTML = ``)}

    return {grid, clear}
})()

const Human = (name, score, daddyClass, sym) => {
    const getName = () => name
    const getScore = () => score
    const parentElement = document.querySelector(daddyClass)
    parentElement.querySelector(`.name`).innerHTML = name
    const win = () => {
        score += 1
        parentElement.querySelector(`.score`).innerHTML = score
        Gameboard.clear()
    }
    const indicate = () => {parentElement.querySelector(`.roundthingy`).classList.toggle(`bluecolor`)}
    const resetScore = () => {score = 0}

    return {getName, getScore, win, resetScore, indicate}
}

const Game = (() => {
    const players = []
    const createPlayers = () => {
        players[0] = Human(playerOneField.value, 0, `.Xplayer`)
        players[1] = Human(playerTwoField.value, 0,`.Oplayer`)
    }
    const switchIndicator = () => {players.forEach(player => player.indicate())}

    const gameCheck = () => {
        if (winLookUp.tableCheck(`X`)) {alert(`X WOM`)}
        if (winLookUp.tableCheck(`O`)) {alert(`O WOM`)}

    }

    return {switchIndicator,players, createPlayers, gameCheck}
})()

const winLookUp = (() => {
    const table = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7,], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    const checker = (arr, target) => target.every(v => arr.includes(v));

    const tableCheck = (sym) => {
        let found = false 
        table.forEach(arr => {
            if (checker(getIndexesOF(Gameboard.grid, sym), arr)) {
                console.log(`exists`)
                found =true
            }
        })

        return found
    }

    return {table, tableCheck}
})()

//EVENT LISTENERS

clearButton.addEventListener(`click`, function() {
    Gameboard.clear()
})

formSubmitButton.addEventListener(`click`, function(){
    Game.createPlayers()
    toggleForm()
} )

//HELPERS

function toggleForm() {formContainer.classList.toggle(`displayN`)}

function getIndexesOF(arr, value) {
    return arr.reduce(function (a, e, i) {
        if (e.innerHTML === value) a.push(i);
        return a;
    }, [])
}

window.onload = toggleForm()