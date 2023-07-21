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
        this.timerArr = []
    }

    get platformeCoor() {
        return this.platformeArr
    }

    get timers() {
        return this.timerArr
    }

    creatPlatforme(x, y, size) {
        let plat = []
        for (let i = 0; i < size; i++) {
            plat[i] = [x, y]
            y += 1
        }
        this.platformeArr.push(plat)
    }

    colorPlatforme(platformeCoor, tableField) {
        for (let i = 0; i < platformeCoor.length; i++) {
            for (let g = 0; g < platformeCoor[i].length; g++) {
                for (let j = 0; j < platformeCoor[i][g].length; j++) {
                    tableField[platformeCoor[i][g][0]][platformeCoor[i][g][1]].style.background = 'black'
                    tableField[platformeCoor[i][g][0] - 1][platformeCoor[i][g][1]].style.background = 'none'
                }

            }
        }
    }

    timeMove(platformeArr, target, platformeCoor, tableField, speed, maxSizeX, timerArr) {
        let timer = setInterval(() => {
            this.stopPlatforme(platformeArr, maxSizeX, timerArr)
            this.movePlatforme(platformeArr, target)
            this.colorPlatforme(platformeCoor, tableField)
        }, speed);
        this.timerArr.push(timer)
    }

    movePlatforme(platformeArr, target) {
        for (let i = 0; i < platformeArr.length; i++) {
            if (platformeArr[i] == platformeArr[target]) {
                for (let g = 0; g < platformeArr[i].length; g++) {
                    platformeArr[i][g][0] = platformeArr[i][g][0] + 1
                }
            }

        }

    }


    stopPlatforme(platformeArr, maxSizeX, timerArr) {
        for (let i = 0; i < platformeArr.length; i++) {
            for (let g = 0; g < platformeArr[i].length; g++) {
                // if (platformeArr[i][g][0] >= maxSizeX) {
                //     console.log(platformeArr[i][g])
                //     platformeArr[i][g].splice(g, 1)
                //     clearInterval(timerArr[g])
                // }
            }
        }
    }
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
        steps.creatPlatforme(28, 0, 30)
        steps.creatPlatforme(5, 7, 2)
        steps.creatPlatforme(7, 15, 4)
        steps.creatPlatforme(10, 2, 3)
        steps.timeMove(steps.platformeArr, 1, steps.platformeCoor, field.tableFieldTab, 1000, field.amountCellX, steps.timers)
        steps.timeMove(steps.platformeArr, 2, steps.platformeCoor, field.tableFieldTab, 200, field.amountCellX, steps.timers)
        steps.timeMove(steps.platformeArr, 3, steps.platformeCoor, field.tableFieldTab, 1000, field.amountCellX, steps.timers)
            // console.log(steps.platformeArr)
    }
}

let game = new TheGame
game.start()



// реализовать удаление или остановку латформы
// в движение платформ можно поменять направление при помощи - и +
//сделать чтоб плиты двигались независимо друг от друга
// реализовать движение плит
// создать массив с таймерами для движения, пушить туда

// '1) создать игровое поле'
'2) создать персонажа'
'3) реализовать прыжок'
'4) добавить лесенки'