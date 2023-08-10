
// Cria o canvas onde o jogo será renderizado
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 320;
document.body.appendChild(canvas);

// Define as propriedades do jogo
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

// Desenha a bola
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Atualiza a posição da bola e detecta colisões com as bordas do canvas
function updateBall() {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

// Limpa o canvas e desenha a bola
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    updateBall();
}

// Inicia o jogo
setInterval(draw, 10);