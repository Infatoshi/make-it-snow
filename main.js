document.addEventListener('keydown', keydownHandler)

function keydownHandler(event) {
    if (event.keyCode == 38) {
        upArrowTrigger();
    } else if (event.keyCode == 40) {
        downArrowTrigger();
    }
}


let cnv = document.getElementById('my-canvas');
let ctx = cnv.getContext('2d');

cnv.width = 600;
cnv.height = 400;




let snowflake = [];
// snowflake.push(newFlake(25, 0, 7, 'white'));
// snowflake.push(newFlake(75, 0, 7, 'white'));
// snowflake.push(newFlake(125, 0, 7, 'white'));
// snowflake.push(newFlake(175, 0, 7, 'white'));
// snowflake.push(newFlake(225, 0, 7, 'white'));
// snowflake.push(newFlake(275, 0, 7, 'white'));
// snowflake.push(newFlake(325, 0, 7, 'white'));
// snowflake.push(newFlake(375, 0, 7, 'white'));
// snowflake.push(newFlake(425, 0, 7, 'white'));
// snowflake.push(newFlake(475, 0, 7, 'white'));
// snowflake.push(newFlake(525, 0, 7, 'white'));
// snowflake.push(newFlake(575, 0, 7, 'white'));




requestAnimationFrame(draw);
function draw() {
    // redraw background
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // move and draw all snowflakes
    for (let i = 0; i < snowflake.length; i++) {
        moveFlake(snowflake[i]);
        drawFlake(snowflake[i]);

    }
console.log(snowflake.length);
    requestAnimationFrame(draw);
}


function newFlake(initX, initY, initR, initColor, ySpeed) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor,
        speed: ySpeed
    };
}

function drawFlake(aFlake) {
    fill(aFlake.color);
    circle(aFlake.x, aFlake.y, aFlake.r, 'fill');
}

// making the snowflakes move and reset at the top with random x positions wqhen they hit the bottom of the canvas
function moveFlake(aFlake) {
    aFlake.y += aFlake.speed;
    if (aFlake.y > cnv.height) {
        aFlake.y = -10;
        aFlake.x = randomDec(0, cnv.width + 5);
        
    }
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}


// up arrow = 38 | down = 40
function upArrowTrigger() {
    snowflake.push(newFlake(randomDec(0, 600), -10, randomDec(3, 7), 'white', randomDec(0.3, 3)));

}

function downArrowTrigger() {
    snowflake.pop();
}
