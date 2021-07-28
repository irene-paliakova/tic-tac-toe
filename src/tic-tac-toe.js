class TicTacToe {
    constructor() {
        this.matrix = [];
        for (let i = 0; i < 3; i++){
            this.matrix[i] = [];
            for (let j = 0; j < 3; j++) {
                this.matrix[i][j] = '_';
            }
        }
        this.currentPlayer = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == '_') {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer === 'x')
                this.currentPlayer = 'o';
            else
                this.currentPlayer = 'x';
        }      

    }

    isFinished() {
        for  (let i = 0; i < 3; i++) {
            if  (this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][1] == this.matrix[i][2] && this.matrix[i][0] != '_') {
                this.winner = this.matrix[i][0];
                return true;
            }
            if (this.matrix[0][i] == this.matrix[1][i] && this.matrix[1][i] == this.matrix[2][i] && this.matrix[0][i] != '_') {
                this.winner = this.matrix[0][i];
                return true;
            }
        }    
                
        if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] && this.matrix[0][0] != '_') {
            this.winner = this.matrix[0][0];
            return true;
        }
        if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0] && this.matrix[0][2] != '_') {
            this.winner = this.matrix[0][2];
            return true;
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] == '_')
                    return false;
            }
        }
        return true;
    }

    getWinner() {
        this.isFinished();
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] == '_')
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null)
            return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] == 'x'|| this.matrix[rowIndex][colIndex] == 'o'? this.matrix[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;

