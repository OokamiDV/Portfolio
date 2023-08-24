'use strict'

class gameField {
    constructor(size) {
        this.size = size
        this.arrField = []
    }

    creatField() {
        for (let i = 0; i < this.size; i++) {
            this.arrField.push([])
            for (let j = 0; j < this.size; j++) {
                this.arrField[i].push(0)
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
            }

        }
        this.arrCoor.push(arrPair)
        return arrPair
    }

}

class theGame {
    constructor() {
        this.score = 0
    }

    start() {
        let field = new gameField(4)
        field.creatField()
        console.log(field.arrField)

        let gen = new Generator()

        field.creatCell(field.arrField, gen.genRandomCoor(2, 4), 2)

    }
}



let game = new theGame()
game.start()

написать проверку на одинаковый рандом