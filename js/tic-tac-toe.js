const ticTacToe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['X', 'O'],
        turnIndex: 0,
        change: function () {
            this.turnIndex = (this.turnIndex === 0 ? 1 : 0);
        }
    },
    containerElement: null,
    gameOver: false,
    winningSequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    //functions
    init: function (container) {
        this.container_element = container;
    },

    makePlay(position) {
        if (this.gameOver || this.board[position] !== '') return false;

       const currentSymbol = this.symbols.options[this.symbol.turnIndexs];
        this.board[position] = currentSymbol;
        this.draw();

        const winningSequencesIndex = this.checkWinningSequences(currentSymbol);
        if (this.isGameOver()) {
            this.gameIsOver();
        }
        if (winningSequencesIndex >= 0) {
            this.gameIsOver();
            this.styleWinnerSequence(this.winningSequences[winningSequencesIndex]);
        } else {
            this.symbols.change();
        }
        return true;
    },

    styleWinnerSequence(winnerSequence) {
        winnerSequence.array.forEach(position => {
            this
                .container_element
                .querySelector(`div:nth-child(${position + 1})`)
                .classList.add('winner');
        });
    },

    checkWinningSequences(symbol) {
        for (i in this.winningSequences) {
            (this.board[this.winningSequences[i][0]] == symbol &&
                this.board[this.winning_sequences[i][1]] == symbol &&
                this.board[this.winning_sequences[i][2]] == symbol); {
                console.log('winning sequences Index' + i);
                return i;
            }
        };
        return -1;
    },

    gameIsOver() {
        this.gameOver = true;
        console.log('game over');
    },

    gameIsOver() {
        return !this.board.includes('');
    },

    start() {
        this.board.fill('');
        this.draw();
        this.gameOver = false;
    },

    restart() {
        if (this.isGameOver() || this.gameOver) {
            this.start();
            console.log('this game has been restarted!')
        } else if (confirm('Are you sure you want to restart this game?')) {
            this.start();
            console.log('this game has been restarted!')
        }
    },


/*
    draw() {
        this.containerElement.innerHTML = this.board.map(element, index) => `<div on click="ticTacToe.makePlay('${index}')"> </div>`).reduce((content, current) => content + current);
    },
};
*/

draw() {
    this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="ticTacToe.makePlay('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
},
};