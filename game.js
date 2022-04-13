const SNAKE_SPEED = 5;
let snake_body = [
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11},
    {x: 13, y: 11},
    {x: 14, y: 11},
];
var gameTemplate = document.getElementById('game');

setInterval(main,SNAKE_SPEED*100)

function main() {
    console.log('MAIN');
    gameTemplate.innerHTML = '';
    update();
    render();
}

// Loop -> Algo que vai se repetir para efetuar uma renderização
function update() {
    // atualiza a comida e a cobra
    for(let i = snake_body.length - 2; i >= 0; i--)
    {
        snake_body[i+1] = {...snake_body[i]}
    }
    snake_body[0].x += 0;
    snake_body[0].y += 1;
}

// Draw/Render
function render() {
    // atualiza a posição
    snake_body.forEach(position => {
        let snake = document.createElement('div');
        snake.style.gridRowStart    = position.x;
        snake.style.gridColumnStart = position.y;
        snake.classList.add('snake');
        gameTemplate.appendChild(snake);
    });
}