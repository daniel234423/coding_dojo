var world = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
var worlElement = {
    0: 'vacio',
    1: 'muros',
    3: 'points'
};

var score = 0;

function drawWorlds() {
    output = '';
    for (let z = 0; z < world.length; z++) {
        output += "<div class='z'>";
        for (let a = 0; a < world.length; a++) {
            output += "<div class='" + worlElement[world[z][a]] + "'></div>";
            
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}
drawWorlds();

var paCman = {
    x: 1,
    y: 1
};
function drawscore(){
    if(0 & 2 ){
        score = score + 5
    }
    else if(0 & 3){
        score = score + 10;
    }
    document.getElementById('score').innerHTML = score;
}


function drawPacmans() {
    document.getElementById('pacman').style.top = paCman.y * 10 + "px";
    document.getElementById('pacman').style.left = paCman.x * 40 + "px";
}
drawPacmans();



