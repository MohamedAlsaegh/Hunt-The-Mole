// variables
let score = 0
let molePlace = 0
let moleImg = 'mole.png'
let fillesHeart = 'filled_heart.png'
let emptyHeart = 'empty_heart.png'
let holes = document.querySelectorAll('.moleImg')
let hearts = document.querySelectorAll('.heart')
let resetButton = document.querySelector('input[type="reset"]')
let easyButton = document.querySelector('input[type="Easy"]')
let mediumButton = document.querySelector('input[type="Medium"]')
let hardButton = document.querySelector('input[type="Hard"]')
// console.log(score)
// Fnucitons section

const difficulty = () => {}
const heartsResetting = () => {}
const resetAll = () => {}
const heartsLosing = () => {}
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
  difficulty()
})
mediumButton.addEventListener('click', () => {
  difficulty()
})
hardButton.addEventListener('click', () => {
  difficulty()
})
// setInterval(moleMoving, 500)

// moleMoving()
