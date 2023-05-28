// калькулятор площади и периметра прямоугольника
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let x = null;
let y = null;
let result1 = null;
let result2 = null;

function rectArea(x, y) {
    result = x * y
    return result
}

function rectPerim(x, y) {
    result = x * 2 + y * 2
    return result
}

input1.oninput = function() {
    x = input1.value;
    if (x > 0) {
        input1.style.borderColor = "black"
        result1 = rectArea(x, y)
        result2 = rectPerim(x, y)
        if (x !== null, y !== null) {
            output1.innerHTML = result1 + " мм2";
            output2.innerHTML = result2 + " мм";
        }
    } else {
        input1.style.borderColor = "red"
    }
}
input2.oninput = function() {
    y = input2.value;
    if (y > 0) {
        input2.style.borderColor = "black"
        result1 = rectArea(x, y)
        result2 = rectPerim(x, y)
        if (x !== null, y !== null) {
            output1.innerHTML = result1 + " мм2";
            output2.innerHTML = result2 + " мм";
        }
    } else {
        input2.style.borderColor = "red"
    }
}

// snake
let snakeDiv = document.getElementById('snakeDiv')
let snakeMove = document.createElement('video')
snakeMove.src = './snake2/gameDev/textures/snakeMove.mp4'
snakeMove.style.position = 'relative'
snakeMove.hidden = true
snakeMove.style.width = '335px'
snakeMove.style.right = '20px'
snakeMove.style.bottom = '60px'
snakeMove.volume = '0.20'
snakeDiv.append(snakeMove)

snakeDiv.onclick = function() {
    window.open('./snake2/index.html')
}

snakeDiv.onmouseover = function() {
    snakeDiv.style.cursor = 'pointer'
    snakeMove.play()
    snakeMove.hidden = false
    snakeDiv.style.boxShadow = '-1px 2px 11px 9px rgba(212, 174, 233, 0.932)'
}

snakeDiv.onmouseout = function() {
    snakeMove.pause()
    snakeMove.hidden = true
    snakeDiv.style.boxShadow = 'none'
}

// rabbits
let rabbitsGameDiv = document.getElementById('rabbitsGame')
let rabbitsGameMove = document.createElement('video')
rabbitsGameMove.src = './rabbitsGame2/rabbitsMove.mp4'
rabbitsGameMove.style.position = 'relative'
rabbitsGameMove.hidden = true
rabbitsGameMove.style.width = '360px'
rabbitsGameMove.style.right = '27px'
rabbitsGameMove.style.bottom = '59px'
rabbitsGameMove.volume = '0.20'
rabbitsGameDiv.append(rabbitsGameMove)

rabbitsGameDiv.onclick = function() {
    window.open('./rabbitsGame2/index.html')
}

rabbitsGameDiv.onmouseover = function() {
    rabbitsGameDiv.style.cursor = 'pointer'
    rabbitsGameMove.play()
    rabbitsGameMove.hidden = false
    rabbitsGameDiv.style.boxShadow = '-1px 2px 11px 9px rgba(212, 174, 233, 0.932)'
}

rabbitsGameDiv.onmouseout = function() {
    rabbitsGameMove.pause()
    rabbitsGameMove.hidden = true
    rabbitsGameDiv.style.boxShadow = 'none'
}