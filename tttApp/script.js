class tictactoe {
    constructor() {
        // Set games/scores for new users
        if (this.getGames() == null || isNaN(this.getGames())) { this.setGames(1) }
        if (this.getXWins() == null || isNaN(this.getXWins()) ) { this.setXWins(0) }
        if (this.getOWins() == null || isNaN(this.getOWins()) ) { this.setOWins(0) }

        // Start new game
        this.newGame()
    }

    // Getters
    getGames() { return localStorage.getItem('retrievedGames') }
    getXWins() { return localStorage.getItem('retrievedXWins') }
    getOWins() { return localStorage.getItem('retrievedOWins') }
    getXColor(x) { return x.value }
    getOColor(o) { return o.value }
    getSquareInfo(square) { return square.innerText }
    getTurnInfo() { return turn }

    // Setters
    setGames(number) { localStorage.setItem('retrievedGames', parseInt(number)) }
    setXWins(number) { localStorage.setItem('retrievedXWins', parseInt(number)) }
    setOWins(number) { localStorage.setItem('retrievedOWins', parseInt(number)) }
    setColor(location, color) { location.style.color = color }
    setSquareInfo(square, value) { square.innerText = value }
    setTurnInfo() {
        if (turn == 0) {
            whosTurnText.innerText = "X's turn!"
        } else {
            whosTurnText.innerText = "O's turn!"
        }
    }
    setTurn(newTurn) {
        console.log(newTurn)
        turn = newTurn
        this.setTurnInfo()
    }

    newGame() {
        // Update game/score displays
        gameScore.innerText = this.getGames()
        xScore.innerText = this.getXWins()
        oScore.innerText = this.getOWins()

        // Increment the game count
        this.setGames(parseInt(this.getGames()) + 1)

        // Reset all the game squares to empty
        this.setSquareInfo(topLeftButton, '')
        this.setSquareInfo(topMiddleButton, '')
        this.setSquareInfo(topRightButton, '')
        
        this.setSquareInfo(middleLeftButton, '')
        this.setSquareInfo(middleMiddleButton, '')
        this.setSquareInfo(middleRightButton, '')

        this.setSquareInfo(bottomLeftButton, '')
        this.setSquareInfo(bottomMiddleButton, '')
        this.setSquareInfo(bottomRightButton, '')

        // Randomly choose who starts
        this.setTurn(Math.random())

        if (turn < 0.5) {
            this.setTurn(0)
        } else {
            this.setTurn(1)
        }

        // Set the turn of the random person
        this.setTurnInfo(turn)
    }

    playTurn(square) {
        // Disable the color palettes
        xColor.disabled = true
        oColor.disabled = true

        // Determine whether the user can select the square
        // And check if its a winning square
        // Or warn that that square cannot be played
        if (square.innerText == '') {
            if (this.getTurnInfo() == 0) {
                this.setSquareInfo(square, "X")
                this.setColor(square, this.getXColor(xColor))
                this.setTurn(1)
            } else {
                this.setSquareInfo(square, "O")
                this.setColor(square, this.getOColor(oColor))
                this.setTurn(0)
            }
            this.checkWin()
        } else {
            alert("You can't go there... That square is taken.")
        }
    }

    checkWin() {
        // Check all the winning scenarios and grant the appriopriate point to winner
        if (this.getSquareInfo(topLeftButton) === this.getSquareInfo(topMiddleButton) &&
            this.getSquareInfo(topLeftButton) === this.getSquareInfo(topRightButton)) {
            if (this.getSquareInfo(topLeftButton) != '') {
                if (this.getSquareInfo(topLeftButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(middleLeftButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(middleLeftButton) === this.getSquareInfo(middleRightButton)) {
            if (this.getSquareInfo(middleLeftButton) != '') {
                if (this.getSquareInfo(middleLeftButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(bottomLeftButton) === this.getSquareInfo(bottomMiddleButton) &&
        this.getSquareInfo(bottomLeftButton) === this.getSquareInfo(bottomRightButton)) {
            if (this.getSquareInfo(bottomLeftButton) != '') {
                if (this.getSquareInfo(bottomLeftButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topLeftButton) === this.getSquareInfo(middleLeftButton) &&
        this.getSquareInfo(topLeftButton) === this.getSquareInfo(bottomLeftButton)) {
            if (this.getSquareInfo(topLeftButton) != '') {
                if (this.getSquareInfo(topLeftButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topMiddleButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(topMiddleButton) === this.getSquareInfo(bottomMiddleButton)) {
            if (this.getSquareInfo(topMiddleButton) != '') {
                if (this.getSquareInfo(topMiddleButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topRightButton) === this.getSquareInfo(middleRightButton) &&
        this.getSquareInfo(topRightButton) === this.getSquareInfo(bottomRightButton)) {
            if (this.getSquareInfo(topRightButton) != '') {
                if (this.getSquareInfo(topRightButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topLeftButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(topLeftButton) === this.getSquareInfo(bottomRightButton)) {
            if (this.getSquareInfo(topLeftButton) != '') {
                if (this.getSquareInfo(topLeftButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topRightButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(topRightButton) === this.getSquareInfo(bottomLeftButton)) {
            if (this.getSquareInfo(topRightButton) != '') {
                if (this.getSquareInfo(topRightButton) == 'X') {
                    this.setXWins(parseInt(this.getXWins()) + 1)
                    alert("X Won!")
                    game.newGame()
                } else {
                    this.setOWins(parseInt(this.getOWins()) + 1)
                    alert("O Won!")
                    game.newGame()
                }
            }
        }
    }
}

var turn

const topLeftButton = document.querySelector('[tl]')
const topMiddleButton = document.querySelector('[tm]')
const topRightButton = document.querySelector('[tr]')

const middleLeftButton = document.querySelector('[ml]')
const middleMiddleButton = document.querySelector('[mm]')
const middleRightButton = document.querySelector('[mr]')

const bottomLeftButton = document.querySelector('[bl]')
const bottomMiddleButton = document.querySelector('[bm]')
const bottomRightButton = document.querySelector('[br]')

const xColor = document.getElementById('xColor')
const oColor = document.getElementById('oColor')


var retrievedGames = localStorage.getItem('tttGames')
var retrievedXWins = localStorage.getItem('tttXWins')
var retrievedOWins = localStorage.getItem('tttOWins')
const gameScore = document.getElementById('gameScore')
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')

const whosTurnText = document.querySelector('[whosTurn]')

const newGameButton = document.querySelector('[newGame]')

const game = new tictactoe()

newGameButton.addEventListener('click', button => {
    // Start a new game and re-enable the color palettes
    game.newGame()
    xColor.disabled = false
    oColor.disabled = false
})

// Event listeners for each of the playable squares
topLeftButton.addEventListener('click', button => { game.playTurn(topLeftButton) })
topMiddleButton.addEventListener('click', button => { game.playTurn(topMiddleButton) })
topRightButton.addEventListener('click', button => { game.playTurn(topRightButton) })

middleLeftButton.addEventListener('click', button => { game.playTurn(middleLeftButton) })
middleMiddleButton.addEventListener('click', button => { game.playTurn(middleMiddleButton) })
middleRightButton.addEventListener('click', button => { game.playTurn(middleRightButton) })

bottomLeftButton.addEventListener('click', button => { game.playTurn(bottomLeftButton) })
bottomMiddleButton.addEventListener('click', button => { game.playTurn(bottomMiddleButton) })
bottomRightButton.addEventListener('click', button => { game.playTurn(bottomRightButton) })