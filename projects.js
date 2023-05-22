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
snakeDiv.onclick = function() {
    window.open('./snake2/index.html')
}

// rabbits
let rabbitsGameDiv = document.getElementById('rabbitsGame')
rabbitsGameDiv.onclick = function() {
    window.open('./rabbitsGame2/index.html')
}