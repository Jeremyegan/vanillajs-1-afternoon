const gameProg = [];

const play = (par) => {
    const player = document.getElementById('player');
    const elm = document.getElementById(par);

    if (player.innerText === 'X') {
        player.innerText = 'O';
        elm.innerText = 'X';
        gameProg[par] = 'X';
    } else {
        player.innerText = 'X';
        elm.innterText = 'O';
        gameProg[par] = 'O';
    }
    console.log(board)
}
