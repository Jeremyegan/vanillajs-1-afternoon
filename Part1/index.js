let gameProg = [];
let catGame = true;

const play = (par) => {
    let player = document.getElementById('player');
    let elm = document.getElementById(par);
 if (elm.innerText === '') {
    elm.innerText = elm.innerText
 if (player.innerText === 'X') {
    player.innerText = 'O';
    elm.innerText = 'X';
    gameProg[par] = 'X';
} else {
    player.innerText = 'X';
    elm.innerText = 'O';
    gameProg[par] = 'O';
    }
}

let box1 = gameProg[0];
let box2 = gameProg[1];
let box3 = gameProg[2];
let box4 = gameProg[3];
let box5 = gameProg[4];
let box6 = gameProg[5];
let box7 = gameProg[6];
let box8 = gameProg[7];
let box9 = gameProg[8];

if(box1 !== undefined && box1 === box2 && box1 === box3) {
    window.alert(`${box1} Winner Winner!`);
    return
} else if(box1 !== undefined && box1 === box4 && box1 === box7) {
    window.alert(`${box1} Winner Winner!`);
    return
} else if(box4 !== undefined && box4 === box5 && box4 === box6) {
    window.alert(`${box4} Winner Winner!`);
    return
} else if(box7 !== undefined && box7 === box8 && box7 === box9) {
    window.alert(`${box7} Winner Winner!`);
    return
} else if(box2 !== undefined && box2 === box5 && box2 === box8) {
    window.alert(`${box2} Winner Winner!`);
    return
} else if(box3 !== undefined && box3 === box6 && box3 === box9) {
    window.alert(`${box3} Winner Winner!`);
    return
} else if(box1 !== undefined && box1 === box5 && box1 === box9) {
    window.alert(`${box1} Winner Winner!`);
    return
} else if(box3 !== undefined && box3 === box5 && box3 === box7) {
    window.alert(`${box3} Winner Winner!`);
    return
}

    for(var i = 0; i <= 8; i++)
    if(gameProg[i] === undefined) {
        catGame = false
    }
}
if(catGame === true){
    window.alert("Cat's game!")
    }





   gameProg.push(player.innerText)
    
    console.log(gameProg)

