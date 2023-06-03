"use strict"

let field = {
    width: 900,
    height: 500,
    amountCellX: 30,
    amountCellY: 30,
    cellWidth: 20,
    cellHeight: 20,
}

let divMain = document.createElement('div')
divMain.style.height = `${field.height}px`
divMain.style.width = `${field.width}px`
divMain.style.margin = 'auto'
divMain.className = 'divMain'
document.body.append(divMain)

let tableField = document.createElement('table')
tableField.className = 'tableField'
divMain.append(tableField)

for (let i = -1; i < field.amountCellX + 1; i++) {
    tableField[i] = document.createElement('tr')
    tableField.append(tableField[i])
    for (let g = -1; g < field.amountCellY + 1; g++) {
        tableField[i][g] = document.createElement('td')
            // tableField[i][g].style.border = 'none'
        tableField[i][g].style.height = `${field.cellHeight}px`
        tableField[i][g].style.width = `${field.cellWidth}px`
        tableField[i].append(tableField[i][g])
        if (i > -1 && i < field.amountCellX - 1 && g > -1 && g < field.amountCellY - 1) {
            tableField[i][g].style.border = 'solid'
        }
    }
}
tableField[-1][-1].style.background = 'black'
tableField[-1][30].style.background = 'black'

'1) создать игровое поле'
'2) создать персонажа'
'3) реализовать прыжок'
'4) добавить лесенки'

// правильнорасчитатьполе чтоб не соответствовало реальное количество клеток