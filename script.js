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

    let checker = (arr, target) => target.every(v => arr.includes(v));

    const gameCheck = () => {
        winLookUp.forEach(arr => { if (checker(getIndexesOF(grid, `X`), arr)) alert(`X WON`)})
        winLookUp.forEach(arr => { if (checker(getIndexesOF(grid, `O`), arr)) alert(`O WON`)})
    }

    return {grid, clear, gameCheck}
})()

const Human = () => {
    age = 10
    return {age}
}

const winLookUp = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7,],[2,5,8],
    [0,4,8],[2,4,6]
]

clearButton.addEventListener(`click`, function() {
    Gameboard.clear()
})

function getIndexesOF(arr, value) {
    return arr.reduce(function (a, e, i) {
        if (e.innerHTML === value)
            a.push(i);
        return a;
    }, [])
}


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