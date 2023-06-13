"use strict"

let field = {
    width: 1080,
    height: 1920,
    amountCellX: 30,
    amountCellY: 30,
    cellWidth: 20,
    cellHeight: 20,
    difrGrToSp: 10,
    maxStepSize: 5,
    minStepSize: 2,
}

let ground = []
let groundCoor = []
let steps = []
let stepsCoor = []

let divMain = document.createElement('div')
divMain.style.height = `${field.height}px`
divMain.style.width = `${field.width}px`
divMain.style.margin = 'auto'
divMain.className = 'divMain'
document.body.append(divMain)

let tableField = document.createElement('table')
tableField.className = 'tableField'
divMain.append(tableField)


// Поле отрисовывается от 0 до 29 (если х и н = 30)

for (let i = -1; i < field.amountCellX + 1; i++) {
    tableField[i] = document.createElement('tr')
    tableField.append(tableField[i])

    for (let g = -1; g < field.amountCellY + 1; g++) {
        tableField[i][g] = document.createElement('td')
        tableField[i][g].style.height = `${field.cellHeight}px`
        tableField[i][g].style.width = `${field.cellWidth}px`
        tableField[i].append(tableField[i][g])

        if (i > -1 && i < field.amountCellX && g > -1 && g < field.amountCellY) {
            tableField[i][g].style.border = 'solid'
        } else if (i == field.amountCellX && g > -1 && g < field.amountCellY) {
            tableField[i - 1][g].style.background = 'black'
            tableField[i - 1][g].spike = true
            ground.push(tableField[i - 10][g])
            groundCoor.push([i - 10, g])
        }
    }
}

//подсветка краев экрана
tableField[-1][-1].style.background = 'black'
tableField[-1][field.amountCellY].style.background = 'black'
tableField[field.amountCellY][field.amountCellY].style.background = 'black'
tableField[field.amountCellY][-1].style.background = 'black'


function groundFalls(ground) {
    for (let i = 0; i < ground.length; i++) {
        if (groundCoor[i][0] + 2 < field.amountCellX) {
            ground[i].style.background = 'none'
            ground[i].ground = false
            groundCoor[i] = [
                Number([groundCoor[i][0]]) + 1, [groundCoor[i][1]]
            ]
            ground[i] = tableField[groundCoor[i][0]][groundCoor[i][1]]
            ground[i].style.background = 'green'
            ground[i].ground = true
        } else {
            ground[i].style.background = 'none'
            ground[i].ground = false
        }
    }
    return ground
}

function stepsFalls(steps) {
    for (let i = 0; i < steps.length; i++) {
        for (let g = 0; g < steps[i].length; g++) {
            steps[i][g] = tableField[stepsCoor[g][0]][stepsCoor[g][1]]
            steps[i][g].style.background = 'none'
            steps[i][g] = tableField[stepsCoor[g][0] + 1][stepsCoor[g][1]]
            steps[i][g].style.background = 'red'
        }

    }
}
косяк в координатах ступенек массиве

function creatSteps() {
    let randomY = Math.floor(Math.random() * field.amountCellY - field.maxStepSize)
    let randomStepsSize = Math.floor(Math.random() * field.maxStepSize)
    console.log(randomY)
    console.log(randomStepsSize)
    if (randomY > 0 && randomStepsSize > 1) {
        let step = []
        for (let i = 0; i < randomStepsSize; i++) {
            tableField[0][randomY + i].style.background = 'red'
            stepsCoor.push([0, randomY + i])
            step.push([tableField[0][randomY + i]])
        }
        steps.push(step)
    } else {
        creatSteps()
    }
}
creatSteps()
console.log(steps)
console.log(ground)
console.log(stepsCoor)

function startGame() {
    groundFalls(ground)
    stepsFalls(steps)
        // creatSteps()
}

let groundInterval = setInterval(() => startGame(), 1000)

// let char = tableField[]

'1) создать игровое поле'
'2) создать персонажа'
'3) реализовать прыжок'
'4) добавить лесенки'

// доделать функцю создания ступенек чтоб каждая супенька было в отдельном 
// массиве.