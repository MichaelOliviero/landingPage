class tictactoe {
    constructor() {
        this.newGame()
    }

    // Getters
    getXColor(x) { return x.value }
    getOColor(o) { return o.value }
    getSquareInfo(square) { return square.innerText }
    getTurnInfo() { return turn }

    // Setters
    setColor(location, color) { location.style.color = color }
    setSquareInfo(square, value) { square.innerText = value }
    setScore(score) { score.innerText = parseInt(score.innerText) + 1 }
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
        this.setScore(gameScore)
        this.setSquareInfo(topLeftButton, '')
        this.setSquareInfo(topMiddleButton, '')
        this.setSquareInfo(topRightButton, '')
        
        this.setSquareInfo(middleLeftButton, '')
        this.setSquareInfo(middleMiddleButton, '')
        this.setSquareInfo(middleRightButton, '')

        this.setSquareInfo(bottomLeftButton, '')
        this.setSquareInfo(bottomMiddleButton, '')
        this.setSquareInfo(bottomRightButton, '')

        this.setTurn(Math.random())

        if (turn < 0.5) {
            this.setTurn(0)
        } else {
            this.setTurn(1)
        }
        this.setTurnInfo(turn)
    }

    playTurn(square) {
        xColor.disabled = true
        oColor.disabled = true

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
            console.log("CANT GO, ALREADY TAKEN!")
        }
    }

    checkWin() {
        if (this.getSquareInfo(topLeftButton) === this.getSquareInfo(topMiddleButton) &&
            this.getSquareInfo(topLeftButton) === this.getSquareInfo(topRightButton)) {
            if (this.getSquareInfo(topLeftButton) != '') {
                if (this.getSquareInfo(topLeftButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(middleLeftButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(middleLeftButton) === this.getSquareInfo(middleRightButton)) {
            if (this.getSquareInfo(middleLeftButton) != '') {
                if (this.getSquareInfo(middleLeftButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(bottomLeftButton) === this.getSquareInfo(bottomMiddleButton) &&
        this.getSquareInfo(bottomLeftButton) === this.getSquareInfo(bottomRightButton)) {
            if (this.getSquareInfo(bottomLeftButton) != '') {
                if (this.getSquareInfo(bottomLeftButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topLeftButton) === this.getSquareInfo(middleLeftButton) &&
        this.getSquareInfo(topLeftButton) === this.getSquareInfo(bottomLeftButton)) {
            if (this.getSquareInfo(topLeftButton) != '') {
                if (this.getSquareInfo(topLeftButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topMiddleButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(topMiddleButton) === this.getSquareInfo(bottomMiddleButton)) {
            if (this.getSquareInfo(topMiddleButton) != '') {
                if (this.getSquareInfo(topMiddleButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topRightButton) === this.getSquareInfo(middleRightButton) &&
        this.getSquareInfo(topRightButton) === this.getSquareInfo(bottomRightButton)) {
            if (this.getSquareInfo(topRightButton) != '') {
                if (this.getSquareInfo(topRightButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topLeftButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(topLeftButton) === this.getSquareInfo(bottomRightButton)) {
            if (this.getSquareInfo(topLeftButton) != '') {
                if (this.getSquareInfo(topLeftButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
                    game.newGame()
                }
            }
        } else if (this.getSquareInfo(topRightButton) === this.getSquareInfo(middleMiddleButton) &&
        this.getSquareInfo(topRightButton) === this.getSquareInfo(bottomLeftButton)) {
            if (this.getSquareInfo(topRightButton) != '') {
                if (this.getSquareInfo(topRightButton) == 'X') {
                    this.setScore(xScore)
                    game.newGame()
                } else {
                    this.setScore(oScore)
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

const gameScore = document.getElementById('gameScore')
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')

const whosTurnText = document.querySelector('[whosTurn]')

const newGameButton = document.querySelector('[newGame]')

const game = new tictactoe(xColor, oColor)

newGameButton.addEventListener('click', button => {
    game.newGame()
    xColor.disabled = false
    oColor.disabled = false
})

topLeftButton.addEventListener('click', button => { game.playTurn(topLeftButton) })
topMiddleButton.addEventListener('click', button => { game.playTurn(topMiddleButton) })
topRightButton.addEventListener('click', button => { game.playTurn(topRightButton) })

middleLeftButton.addEventListener('click', button => { game.playTurn(middleLeftButton) })
middleMiddleButton.addEventListener('click', button => { game.playTurn(middleMiddleButton) })
middleRightButton.addEventListener('click', button => { game.playTurn(middleRightButton) })

bottomLeftButton.addEventListener('click', button => { game.playTurn(bottomLeftButton) })
bottomMiddleButton.addEventListener('click', button => { game.playTurn(bottomMiddleButton) })
bottomRightButton.addEventListener('click', button => { game.playTurn(bottomRightButton) })