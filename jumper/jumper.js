"use strict"

class GameField {
    constructor(width, height, amountCellX, amountCellY, cellHeight, cellWidth, divMain, tableField, ) {
        this.width = width,
            this.height = height,
            this.amountCellX = amountCellX,
            this.amountCellY = amountCellY,
            this.cellHeight = cellHeight,
            this.cellWidth = cellWidth,
            this.divMain = divMain,
            this.tableField = tableField

        this.divMain = document.createElement('div')
        this.divMain.style.height = `${height}px`
        this.divMain.style.width = `${width}px`
        this.divMain.style.margin = 'auto'
        this.divMain.className = 'divMain'
        document.body.append(this.divMain)

        this.tableField = document.createElement('table')
        this.tableField.className = 'tableField'
        this.divMain.append(this.tableField)
    }
    creat() {
        for (let i = -1; i < this.amountCellX + 1; i++) {
            this.tableField[i] = document.createElement('tr')
            this.tableField.append(this.tableField[i])
            for (let g = -1; g < this.amountCellY + 1; g++) {
                this.tableField[i][g] = document.createElement('td')
                    // tableField[i][g].style.border = 'none'
                this.tableField[i][g].style.height = `${this.cellHeight}px`
                this.tableField[i][g].style.width = `${this.cellWidth}px`
                this.tableField[i].append(this.tableField[i][g])
                if (i > -1 && i < this.amountCellX && g > -1 && g < this.amountCellY) {
                    this.tableField[i][g].style.border = 'solid'
                }
            }

        }

        this.tableField[-1][-1].style.background = 'black'
        this.tableField[-1][30].style.background = 'black'
        this.tableField[30][-1].style.background = 'black'
        this.tableField[30][30].style.background = 'black'
    }

    get tableFieldTab() {
        return this.tableField
    }
}

class Platforme {
    constructor(minSize, maxSize) {
        this.minSize = minSize
        this.maxSize = maxSize
        this.platformeArr = []
    }

    creatPlatforme() {
        this.platformeArr.push([5, 5])
        this.platformeArr.push([7, 7])
        return this.platformeArr
    }

    get platformeCoor() {
        return this.platformeArr
    }

    colorPlatforme(platformeArr, tableField) {
        for (let i = 0; i < platformeArr.length; i++) {
            for (let g = 0; g < platformeArr[i].length; g++) {
                tableField[platformeArr[g][0]][platformeArr[g][1]].style.background = 'black'
            }
        }
    }

    // movePlatforme(platformeArr, tableField) {
    //     for (let i = 0; i < platformeArr.length; i++) {
    //         for (let g = 0; g < platformeArr[i].length; g++) {
    //             tableField[platformeArr[g][0]][platformeArr[g][1]].style.background = 'black'
    //         }
    //     }
    // }
}

class Generator {
    constructor() {

    }

    creatStep() {
        let step = new Platforme
        step.creatPlatforme()
            // step.movePlatforme()
    }
}

class TheGame {
    constructor() {

    }
    start() {
        let field = new GameField(900, 500, 30, 30, 20, 20)
        field.creat()
        let steps = new Platforme()
        steps.creatPlatforme()
        steps.colorPlatforme(steps.platformeCoor, field.tableFieldTab)
            // steps.movePlatforme()
        console.log(steps.platformeCoor)
    }
}

let game = new TheGame
game.start()







// реализовать движение плит

// '1) создать игровое поле'
'2) создать персонажа'
'3) реализовать прыжок'
'4) добавить лесенки'