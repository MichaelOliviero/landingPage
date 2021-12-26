class testYourReflexes {
    constructor() {
        let startTime = '0'
        this.updateScores()
    }

    // Getters
    getBest() { return localStorage.getItem('retrievedBest') }
    getAttempt() { return localStorage.getItem('retrievedAttempts') }
    getMin() { return Math.floor(Math.random() * 1) }
    getMax() { return Math.floor(Math.random() * 20) }
    getRandomStartTime() {
        let min = this.getMin()
        let max = this.getMax()
        
        return Math.floor(Math.random() * (max - min) + min) + 1
    }

    // Setters
    setBest(score) { localStorage.setItem('retrievedBest', parseFloat(score)) }
    setAttempt(number) { localStorage.setItem('retrievedAttempts', parseInt(number)) }

    updateScores() {
        // Set scores for new users
        if (this.getBest() == null || isNaN(this.getBest())) { this.setBest(0) }
        if (this.getAttempt() == null || isNaN(this.getAttempt()) ) { this.setAttempt(0) }

        // Display the vars
        bestDisplay.innerText = this.getBest()
        attemptsDisplay.innerText = this.getAttempt()
    }

    showGoButton() {
        // Show go button, hide other buttons
        goButton.style.visibility = "visible"
        waitButton.style.visibility = "hidden"
        resetButton.style.visibility = "hidden"

        // Start the score timer
        this.startTime = Date.now()
    }

    winGame() {
        // Show reset button, hide other buttons
        goButton.style.visibility = "hidden"
        waitButton.style.visibility = "hidden"
        resetButton.style.visibility = "visible"

        // Calculate the user's score
        var elapsedTime = Date.now() - this.startTime
        elapsedTime = (elapsedTime / 1000).toFixed(3)
        currentTime.innerText = elapsedTime

        // Check best attempt + add it if it is
        if ((this.getBest() > elapsedTime || this.getBest() == 0) && elapsedTime > 0) {
            this.setBest(elapsedTime)
            this.updateScores()
        }
    }

    loseGame() {
        // Show reset button, hide other buttons
        goButton.style.visibility = "hidden"
        waitButton.style.visibility = "hidden"
        resetButton.style.visibility = "visible"
        
        // Get a reference to the last interval + 1
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER)

        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) { window.clearInterval(i) }
    }

    playGame() {
        // Show wait button, hide other buttons
        waitButton.style.visibility = "visible"
        goButton.style.visibility = "hidden"
        resetButton.style.visibility = "hidden"

        // Add an attempt
        this.setAttempt(parseInt(this.getAttempt()) + 1)

        // Start the timer
        let timeleft = this.getRandomStartTime()
        let countDown = setInterval(function() {
            if (resetButton.style.visibility === "visible") {
                clearInterval(countDown)
            } else {
                if(timeleft <= 0) {
                    game.showGoButton()
                    clearInterval(countDown)
                }
                timeleft -= 1
            }
        }, 1000)
    }

}

var retrievedBest = localStorage.getItem('tyrBest')
var retrievedAttempts = localStorage.getItem('tyrAttempts')
const bestDisplay = document.getElementById('bestScore')
const attemptsDisplay = document.getElementById('tryScore')

const goButton = document.querySelector('[goButton]')
const waitButton = document.querySelector('[waitButton]')
const resetButton = document.querySelector('[resetButton]')

const currentTime = document.getElementById('currentTime')

const game = new testYourReflexes(retrievedAttempts, retrievedBest)

goButton.addEventListener('click', button => {
    // Win the game
    game.winGame()
    game.updateScores()
})

waitButton.addEventListener('click', button => {
    // Fail the game
    game.loseGame()
    game.updateScores()
})

resetButton.addEventListener('click', button => {
    // Play the game
    game.playGame()
    game.updateScores()
})