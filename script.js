// variables
let gameDifficulty = 700
let moleInterval
let molePlace = 0
let calculatedScore = 0
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

// Fnucitons section

const difficulty = () => {
  clearInterval(moleInterval)
  moleInterval = setInterval(moleMoving, gameDifficulty)
}

const resetAll = () => {
  calculatedScore = 0
  score.innerHTML = calculatedScore
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].setAttribute('src', filledHeart)
  }
}
const heartsLosing = () => {
  for (let i = hearts.length - 1; i >= 0; i--) {
    if (hearts[i].getAttribute('src') === filledHeart) {
      hearts[i].setAttribute('src', emptyHeart)
      break
    }
  }
}
const huntTheMole = () => {
  for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener('click', () => {
      if (holes[i].getAttribute('src') === moleImg) {
        calculatedScore++
        score.innerHTML = calculatedScore
        holes[i].removeAttribute('src')
      } else {
        heartsLosing()
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
  let randomHole = Math.floor(Math.random() * emptyIndexes.length)
  let compBox = holes[emptyIndexes[randomHole]]
  holes[molePlace].removeAttribute('src')
  compBox.setAttribute('src', 'mole.png')
}

// Event Listeners & timers
resetButton.addEventListener('click', () => {
  resetAll()
})
easyButton.addEventListener('click', () => {
  gameDifficulty = 700
  difficulty()
})
mediumButton.addEventListener('click', () => {
  gameDifficulty = 500
  difficulty()
})
hardButton.addEventListener('click', () => {
  gameDifficulty = 300
  difficulty()
})

huntTheMole()
// moleMoving()
