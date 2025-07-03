// variables
let gameDifficulty = 700
let moleInterval
let molePlace = 0
let calculatedScore = 0
let loseWin = false
let gameStopped = false
let difficultyAvailable = false
let moleImg = 'mole.png'
let filledHeart = 'filled_heart.png'
let emptyHeart = 'empty_heart.png'
let score = document.querySelector('.score')
let holes = document.querySelectorAll('.moleImg')
let hearts = document.querySelectorAll('.heart')
let resetButton = document.querySelector('.Reset')
let easyButton = document.querySelector('#Easy')
let mediumButton = document.querySelector('#Medium')
let hardButton = document.querySelector('#Hard')
let mainDiv = document.querySelector('.main')
let originalMainHTML = document.querySelector('.main').innerHTML
const HardModeOSTSound = new Audio('HardModeOST.mp3')
const gameOverSound = new Audio('gameOver.mp3')
const resetSound = new Audio('reset.mp3')
const heartLosingSound = new Audio('heartLosing.mp3')
const scoreSound = new Audio('score.mp3')

// Fnucitons section
const stopGame = () => {
  mainDiv.innerHTML = `
    <div style="display: flex; align-items: center;">
      <img src="game_over.png" alt="Game Over" style="max-width: 270%;">
    </div>
  `
  gameOverSound.play()

  clearInterval(moleInterval)
  difficultyAvailable = false
  gameStopped = true
}
const difficulty = (loseWin) => {
  if (loseWin === true) {
    return
  }
  difficultyAvailable = true
  clearInterval(moleInterval)
  moleInterval = setInterval(moleMoving, gameDifficulty)
}

const resetAll = () => {
  resetSound.play()
  HardModeOSTSound.pause()
  HardModeOSTSound.currentTime = 0
  mainDiv.innerHTML = originalMainHTML
  // Reselect elements since DOM was replaced
  holes = document.querySelectorAll('.moleImg')
  hearts = document.querySelectorAll('.heart')

  calculatedScore = 0
  score.innerHTML = calculatedScore
  difficultyAvailable = false
  gameStopped = false

  for (let i = 0; i < hearts.length; i++) {
    hearts[i].setAttribute('src', filledHeart)
  }
  huntTheMole()
}

const huntTheMole = () => {
  for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener('click', () => {
      if (gameStopped) return
      if (holes[i].getAttribute('src') === moleImg) {
        calculatedScore++
        score.innerHTML = calculatedScore
        holes[i].removeAttribute('src')
        scoreSound.play()
      } else {
        // Lose one heart
        for (let i = hearts.length - 1; i >= 0; i--) {
          if (hearts[i].getAttribute('src') === filledHeart) {
            heartLosingSound.play()
            hearts[i].setAttribute('src', emptyHeart)
            break
          }
        }
        // Manually check if any hearts are still filled
        let filledFound = false
        for (let i = 0; i < hearts.length; i++) {
          if (hearts[i].getAttribute('src') === filledHeart) {
            filledFound = true
            break
          }
        }

        if (!filledFound) stopGame()
      }
    })
  }
}
const moleMoving = () => {
  let emptyIndexes = []
  for (let i = 0; i < holes.length; i++) {
    if (!holes[i].getAttribute('src')) {
      emptyIndexes.push(i)
    } else {
      molePlace = i
    }
  }
  if (emptyIndexes.length === 0) return
  let randomHole = Math.floor(Math.random() * emptyIndexes.length)
  let compBox = holes[emptyIndexes[randomHole]]
  holes[molePlace].removeAttribute('src')

  compBox.setAttribute('src', moleImg)
}

// Event Listeners & function running
resetButton.addEventListener('click', () => {
  resetAll()
})
easyButton.addEventListener('click', () => {
  gameDifficulty = 900
  difficulty()
})
mediumButton.addEventListener('click', () => {
  gameDifficulty = 700
  difficulty()
})
hardButton.addEventListener('click', () => {
  gameDifficulty = 350
  difficulty()

  HardModeOSTSound.play()
})

huntTheMole()
