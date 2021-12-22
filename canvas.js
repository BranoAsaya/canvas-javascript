const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const square1 = { x: 100, y: (canvas.height) - 150, w: 50, h: 50, }
const square2 = { x: 600, y: (canvas.height) - 400, w: 70, h: 70, }
const circle1 = { x: 100, y: 75, r: 30, sAngle: 0, eAngle: 2 * Math.PI, }
const circle2 = { x: 300, y: 300, r: 50, sAngle: 0, eAngle: 2 * Math.PI, }
const circle3 = { x: 500, y: 500, r: 50, sAngle: 0, eAngle: 2 * Math.PI, }
const circle4 = { x: 600, y: 100, r: 50, sAngle: 0, eAngle: 2 * Math.PI, }
const square3 = { x: 200, y: (canvas.height) - 200, w: 50, h: 50, }
const square4 = { x: 400, y: (canvas.height) - 500, w: 70, h: 70, }
const square5 = { x: 700, y: (canvas.height) - 378, w: 70, h: 70, }
const floor = { x: 0, y: (canvas.height) - 70, w: canvas.width, h: 70, }
const player = { x: 0, y: (canvas.height) - floor.h -70, w: 70, h: 70, }
const playerJump = { x: 200, y: (canvas.height) - floor.h -70, w: 70, h: 70, }
const randomSquare = { x: 600, y: (canvas.height) - 200, w: 50, h: 50, }
const randomCircle = { x: 300, y: 300, r: 50, sAngle: 0, eAngle: 2 * Math.PI, }
const randomColorSquare = { x: 200, y: (canvas.height) - 200, w: 50, h: 50, }
const circleSmileFace = { x: 900, y: 200, r: 200, sAngle: 0, eAngle: 2 * Math.PI, }
const circleSmileLeftEye = { x: 800, y: 150, r: 50, sAngle: 0, eAngle: 2 * Math.PI, }
const circleSmileRightEye = { x: 1000, y: 150, r: 50, sAngle: 0, eAngle: 2 * Math.PI, }
const circleSmileSmileI = { x: 900, y: 280, r: 100, sAngle: 0, eAngle: 2 * Math.PI, }
const circleSmileSmileII = { x: 900, y: 250, r: 100, sAngle: 0, eAngle: 2 * Math.PI, }




context.fillRect(square1.x, square1.y, square1.w, square1.h)
context.fillStyle = 'red'
context.fillRect(square2.x, square2.y, square2.w, square2.h)

context.beginPath();
context.arc(circle1.x, circle1.y, circle1.r, circle1.sAngle, circle1.eAngle,);
context.fill();

context.beginPath();
context.arc(circle2.x, circle2.y, circle2.r, circle2.sAngle, circle2.eAngle,);
context.fillStyle = 'blue'
context.fill();

context.beginPath();
context.arc(circle3.x, circle3.y, circle3.r, circle3.sAngle, circle3.eAngle,);
context.fillStyle = 'green'
context.fill();
context.beginPath();
context.arc(circle4.x, circle4.y, circle4.r, circle4.sAngle, circle4.eAngle,);
context.fill();

function MoveRectangles(){
    context.clearRect(square3.x, square3.y, square3.w, square3.h)
    context.clearRect(square4.x, square4.y, square4.w, square4.h)
    context.clearRect(square5.x, square5.y, square5.w, square5.h)
    square3.x+=20
    square4.x+=20
    square5.x+=20
    context.fillStyle = 'yellow'
    context.fillRect(square3.x, square3.y, square3.w, square3.h)
    context.fillRect(square4.x, square4.y, square4.w, square4.h)
    context.fillRect(square5.x, square5.y, square5.w, square5.h)      
}
// setInterval(MoveRectangles,500)

context.fillStyle = 'yellow'
context.fillRect(floor.x, floor.y, floor.w, floor.h)
context.fillStyle = 'purple'
context.fillRect(player.x, player.y, player.w, player.h)

const jumpHeight=playerJump.x+50
function makePlayerJump(){
context.clearRect(playerJump.x, playerJump.y, playerJump.w, playerJump.h)
if(playerJump.x < jumpHeight){
playerJump.y-=10
playerJump.x+=10    
}
if(playerJump.x >= jumpHeight){
    playerJump.y+=10
    playerJump.x+=10
}
if(playerJump.y===451){
clearInterval(JumpTimer)
}

context.fillStyle = 'aqua'
context.fillRect(playerJump.x, playerJump.y, playerJump.w, playerJump.h)

}

// const JumpTimer= setInterval(makePlayerJump,500)
let count=0
function createRandomSquares(){
context.fillStyle = 'grey'

randomSquare.x =Math.floor((Math.random() * 1000) + 1);
randomSquare.y =Math.floor((Math.random() * 500) + 1);

context.fillRect(randomSquare.x, randomSquare.y, randomSquare.w, randomSquare.h)
count++
if(count >= 11){
clearInterval(createTimer)
}
}
// const createTimer= setInterval(createRandomSquares,100)


let countCir=0
function createRandomCircles(){
context.fillStyle = 'pink'

randomCircle.x =Math.floor((Math.random() * 800) + 100);
randomCircle.y =Math.floor((Math.random() * 400) + 100);

context.beginPath();
context.arc(randomCircle.x, randomCircle.y, randomCircle.r, randomCircle.sAngle, randomCircle.eAngle,);
context.fill();countCir++
if(countCir >= 11){
clearInterval(circleTimer)
}
}
// const circleTimer= setInterval(createRandomCircles,100)

let countT=0
function createRandomColorSquares(){
let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
context.fillStyle = randomColor

randomColorSquare.x =Math.floor((Math.random() * 1000) + 1);
randomColorSquare.y =Math.floor((Math.random() * 500) + 1);

context.fillRect(randomColorSquare.x, randomColorSquare.y, randomColorSquare.w, randomColorSquare.h)
countT++
if(countT >= 11){
clearInterval(squaresTimer)
}
}
// const squaresTimer= setInterval(createRandomColorSquares,100)

context.fillStyle = 'yellow'
context.beginPath();
context.arc(circleSmileFace.x, circleSmileFace.y, circleSmileFace.r, circleSmileFace.sAngle, circleSmileFace.eAngle,);
context.fill();
context.fillStyle = 'black'
context.beginPath();
context.arc(circleSmileLeftEye.x, circleSmileLeftEye.y, circleSmileLeftEye.r, circleSmileLeftEye.sAngle, circleSmileLeftEye.eAngle,);
context.fill();
context.beginPath();
context.arc(circleSmileRightEye.x, circleSmileRightEye.y, circleSmileRightEye.r, circleSmileRightEye.sAngle, circleSmileRightEye.eAngle,);
context.fill();
context.beginPath();
context.arc(circleSmileSmileI.x, circleSmileSmileI.y, circleSmileSmileI.r, circleSmileSmileI.sAngle, circleSmileSmileI.eAngle,);
context.fill();

context.fillStyle = 'yellow'
context.beginPath();
context.arc(circleSmileSmileII.x, circleSmileSmileII.y, circleSmileSmileII.r, circleSmileSmileII.sAngle, circleSmileSmileII.eAngle,);
context.fill();

