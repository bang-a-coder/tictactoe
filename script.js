const clearButton = document.querySelector(`.clear-button`)
const formPopUp = document.querySelector(`.form-popup`)
const formSubmitButton = document.querySelector(`#form-submit`)
const formContainer = document.querySelector(`.container`)
const playerOneField = document.querySelector(`#player-one`)
const playerTwoField = document.querySelector(`#player-two`)
const winPopUP = document.querySelector(`.winPopUP`)

let totem = `X`

class Gameboard {
    constructor(){
        this.grid = Array.from(document.querySelectorAll(`.box`))
    }

    clear() {this.grid.forEach(element => element.innerHTML = ``)}

    init(){
        this.grid.forEach(element => element.addEventListener(`click`, function (e) {
            if (e.target.innerHTML != ``) return
            e.target.innerHTML = totem
            if (totem === `X`) { totem = `O` } else { totem = `X` }
            game.gameCheck()
            game.switchIndicator()
        }))
    }
}

let gameboard = new Gameboard()
gameboard.init()

class Human {
    constructor(namee, score, daddyClass){
        this.namee = namee
        this.score = score
        this.parentElement = document.querySelector(daddyClass)
            this.parentElement.querySelector(`.name`).innerHTML = this.namee  // NOT SURE IF IS SHOULD DO initialisation stuff here but creating a separate method just for that and then having to call it seems lame
    }

    win(){
        this.score += 1
        this.parentElement.querySelector(`.score`).innerHTML = this.score
        gameboard.clear()
    }

    indicate() {this.parentElement.querySelector(`.roundthingy`).classList.toggle(`bluecolor`) }
}

class Game {
    constructor(){
        this.players = []
    }

    createPlayers(){
        this.players[0] = new Human(playerOneField.value, 0, `.Xplayer`)
        this.players[1] = new Human(playerTwoField.value, 0, `.Oplayer`)
    }

    switchIndicator() {this.players.forEach(player => player.indicate())}

    gameCheck(){
        if (winlookup.tableCheck(`X`)) { this.winReveal(`X`), this.players[0].win() }
        if (winlookup.tableCheck(`O`)) { this.winReveal(`O`), this.players[1].win() }
    }

    winReveal(sym){
        winPopUP.innerHTML = sym + ` Won🥳`
        toggleForm(winPopUP, `displayN`)

        setTimeout(function () { toggleForm(winPopUP, `displayN`) }, 1000)
    }
}

let game = new Game()

class winLookUp {
    constructor(){
        this.table = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7,], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
    }

    tableCheck(sym){
        let found = false
        this.table.forEach(arr => {
            if (checker(getIndexesOF(gameboard.grid, sym), arr)) { found = true }
        })

        return found
    }
}

let winlookup = new winLookUp()

//EVENT LISTENERS

clearButton.addEventListener(`click`, function() {
    gameboard.clear()
})

formSubmitButton.addEventListener(`click`, function(){
    game.createPlayers()
    toggleForm(formContainer, `displayN`)
} )

//HELPERS

function toggleForm(elmnt, clss) {
    elmnt.classList.toggle(clss)
}

function getIndexesOF(arr, value) {
    return arr.reduce(function (a, e, i) {
        if (e.innerHTML === value) a.push(i);
        return a;
    }, [])
}

const checker = (arr, target) => target.every(v => arr.includes(v));

window.onload = toggleForm(formContainer, `displayN`)