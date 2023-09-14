'use strict'

class gameField {
    constructor(size) {
        this.size = size
        this.arrField = []
        this.ctx = undefined
        this.canvas = undefined
    }

    creatField(sizePxX, sizePxY) {
        let x = 0
        let y = -sizePxY
        for (let i = 0; i < this.size; i++) {
            this.arrField.push([])
            y += sizePxY
            x = 0
            this.arrField[i].coor = []
            for (let j = 0; j < this.size; j++) {
                this.arrField[i].push(0)
                this.arrField[i].coor.push([x, y])
                x += sizePxX
            }
        }

    }

    creatCell(arrField, coorCell, value) {
            for (let i = 0; i < arrField.length; i++) {
                for (let j = 0; j < arrField[i].length; j++) {
                    for (let g = 0; g < coorCell.length; g++) {
                        if (i == coorCell[g][0] && j == coorCell[g][1]) {
                            arrField[i][j] = value
                        }
                    }
                }
            }
        }
        //строки квадрата
        //параметры заливки ширина 68 высота 34
        // шаг между клетками y=4 x=2
    creatCanvas(sizePx) {
        this.canvas = document.getElementById('canvas')
        this.canvas.style.width = sizePx
        this.canvas.style.height = sizePx
        this.ctx = canvas.getContext('2d')
    }

    colorCell(arrField, ctx, pixWidth, pixHeight, value, color) {
        for (let i = 0; i < arrField.length; i++) {
            for (let j = 0; j < arrField[i].length; j++) {
                if (arrField[i][j] > value) {
                    ctx.fillStyle = color
                    ctx.fillRect(arrField[i].coor[j][0], arrField[i].coor[j][1], pixWidth, pixHeight)
                }
            }
        }
    }

    creatTable(sizeInRowCell, sizePx) {
        let table = document.createElement('table')
        table.style.zIndex = -1
        table.style.width = sizePx
        table.style.height = sizePx
        let wrapper = document.getElementById('wrapper')
        wrapper.append(table)
        for (let i = 0; i < sizeInRowCell; i++) {
            let tr = document.createElement('tr')
            table.append(tr)
            for (let j = 0; j < sizeInRowCell; j++) {
                let td = document.createElement('td')
                tr.append(td)
                td.style.border = 'solid'
            }
        }
    }
}

class Generator {
    constructor() {
        this.arrCoor = []
    }

    genRandomCoor(needRandom, sizeField) {
        let arrPair = []
        for (let i = 0; i < needRandom; i++) {
            arrPair.push([])
            for (let j = 0; j < 2; j++) {
                let random = Math.random() * sizeField
                random = Math.floor(random)
                arrPair[i].push(random)
                if (i >= 1 && j >= 1) {
                    if (arrPair[i - 1].toString() == arrPair[i].toString()) {
                        arrPair[i].splice(1, 1)
                        j -= 1
                    }
                }
            }
            this.arrCoor.push(arrPair)
        }
        return arrPair
    }

    genValue() {
        let value = Math.random() * 10
        value = Math.floor(value)
        console.log(value)
        if (value < 9) {
            return 2
        } else {
            return 4
        }
    }
}

class Controls {
    constructor() {
            this.direction = undefined
        }
        // slider(direction, fUp, fDown, fLeft, fRight) {
        //     if (direction === 'up') {
        //         fUp
        //     } else if (direction === 'down') {
        //         fDown
        //     } else if (direction === 'left') {
        //         fLeft
        //     } else if (direction === 'right') {
        //         fRight
        //     }
        // }

    move(field, gen) {
        field.creatCell(field.arrField, gen.genRandomCoor(2, 4), gen.genValue())
    }

    goUp(fieldArr) {
        for (let i = fieldArr.length - 1; i > 0; i--) {
            for (let j = fieldArr[i].length - 1; j >= 0; j--) {
                if (fieldArr[i][j] > 0 && fieldArr[i - 1][j] === 0) {
                    fieldArr[i - 1][j] = fieldArr[i][j]
                    fieldArr[i][j] = 0

                } else if (fieldArr[i - 1][j] === fieldArr[i][j]) {
                    fieldArr[i - 1][j] = fieldArr[i][j] * 2
                    fieldArr[i][j] = 0
                }
            }
        }
        console.log(fieldArr)
        return fieldArr
    }

    onKeyboardButtons(direction, fUp, fDawn, fLeft, fRight, arrField, field, gen, move) {
        document.addEventListener('keydown', function(event) {
            if (event.code == 'KeyW' || direction === 'up') {
                fUp(arrField)
                field.colorCell(field.arrField, field.ctx, 68, 34, -1, 'gray')
                field.colorCell(field.arrField, field.ctx, 68, 34, 0, 'red')
                move(field, gen)
                field.colorCell(field.arrField, field.ctx, 68, 34, -1, 'gray')
                field.colorCell(field.arrField, field.ctx, 68, 34, 0, 'red')
                field.colorCell(field.arrField, field.ctx, 68, 34, 2, 'blue')
                field.colorCell(field.arrField, field.ctx, 68, 34, 4, 'purple')
                console.log('Up')
            } else if (event.code == 'KeyS' || direction === 'dawn') {
                // fDawn
                console.log('Dawn')
            } else if (event.code == 'KeyA' || direction === 'left') {
                // fLeft
                console.log('Left')
            } else if (event.code == 'KeyD' || direction === 'right') {
                // fRight
                console.log('Right')
            }
        })
    }

    getMouseCoorDawn(elem) {
        let coorDawn = 0
        coorDawn = [elem.clientX, elem.clientY]
        console.log(coorDawn)
    }

    getMouseCoorUp(elem) {
        let coorUp = 0
        coorUp = [elem.clientX, elem.clientY]
        console.log(coorUp)
    }
}

class theGame {
    constructor() {
        this.score = 0
        this.field = undefined
        this.gen = undefined
        this.controls = undefined
    }

    start() {
        this.field = new gameField(4)
        this.field.creatField(72, 36)
        this.field.creatTable(4, '402px')
        this.field.creatCanvas('420px')

        this.gen = new Generator()

        this.field.creatCell(this.field.arrField, this.gen.genRandomCoor(2, 4), 2)
        this.field.colorCell(this.field.arrField, this.field.ctx, 68, 34, -1, 'gray')
        this.field.colorCell(this.field.arrField, this.field.ctx, 68, 34, 0, 'red')

        this.controls = new Controls

        this.field.canvas.onmousedown = this.controls.getMouseCoorDawn
        this.field.canvas.onmouseup = this.controls.getMouseCoorUp
        console.log(this.field.arrField)

        this.controls.onKeyboardButtons(this.controls.direction, this.controls.goUp, 0, 0, 0, this.field.arrField, this.field, this.gen, this.controls.move)
    }






}

let game = new theGame()
game.start()

//сделать управление(возможность сдвигать клетки)
//реализовать сумму квадратов
//поправить сложение и появление новых клеток
//(не заменять клетки и останавливать перед ними,
//если сумма другая и появление на пустых клетках)