const clearButton = document.querySelector(`.clear-button`)

let totem = `X`

const Gameboard = (() => {
    const grid =  Array.from(document.querySelectorAll(`.box`))
        grid.forEach(element => element.addEventListener(`click`, function (e) {
            if (e.target.innerHTML != ``) return
            e.target.innerHTML = totem
            if (totem === `X`) {totem = `O`} else {totem = `X`}
        }))

    const clear = () => {Gameboard.grid.forEach(element => element.innerHTML = ``)}

    const gameCheck = () => {
        console.log(getIndexesOF(grid, totem))
        let locations = getIndexesOF(grid, totem)
        for (i=0; i<locations.length; i++){
            
        }
    }

    return {grid, clear, gameCheck}
})()

const Human = () => {
    age = 10
    return {age}
}

function getIndexesOF(arr, value){
    return arr.reduce(function (a, e, i) {
        console.log(a)
        if (e.innerHTML === value)
            a.push(i);
        return a;
    }, [])
}



clearButton.addEventListener(`click`, function() {
    Gameboard.clear()
})


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