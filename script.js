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
            Gameboard.gameCheck()
        }))

    const clear = () => {Gameboard.grid.forEach(element => element.innerHTML = ``)}

    const checker = (arr, target) => target.every(v => arr.includes(v));

    const gameCheck = () => {
        winLookUp.forEach(arr => { if (checker(getIndexesOF(grid, `X`), arr)) alert(`X WON`)})
        winLookUp.forEach(arr => { if (checker(getIndexesOF(grid, `O`), arr)) alert(`O WON`)})
    }

    return {grid, clear, gameCheck}
})()

const Human = (name, score) => {
    const getName = () => name
    const getScore = () => score
    const win = () => {score += 1}

    return {getName, getScore, win}
}

const Game = (() => {
    const players = []
    const createPlayers = () => {
        players[0] = Human(playerOneField.value, 0)
        players[1] = Human(playerTwoField.value, 0)
    }



    return {players, createPlayers}
})()

let mothafucker = Human(`Motherfucker`, 0)

const winLookUp = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7,],[2,5,8],
    [0,4,8],[2,4,6]
]


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


// function renderGrid() {
//     let elements = Gameboard.grid
//     ticker = 0
//     elements.forEach(element => {
//         if (ticker === 0) {
//             element.innerHTML = `X`
//             ticker++
//         } else {
//             element.innerHTML = `O`
//             ticker--
//         }
//     })

// }

// console.log(e.target.id)
// console.log(e.target)