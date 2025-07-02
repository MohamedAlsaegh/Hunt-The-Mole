// variables
let score = document.querySelector('.score')
let molePlace = 0
let calculatedScore = 0
let moleImg = 'mole.png'
let fillesHeart = 'filled_heart.png'
let emptyHeart = 'empty_heart.png'
let holes = document.querySelectorAll('.moleImg')
let hearts = document.querySelectorAll('.heart')
let resetButton = document.querySelector('input[type="reset"]')
let easyButton = document.querySelector('#Easy')
let mediumButton = document.querySelector('#Medium')
let hardButton = document.querySelector('#Hard')
// console.log(score)
// Fnucitons section

const difficulty = () => {}
const heartsResetting = () => {}
const resetAll = () => {}
const heartsLosing = () => {}
const huntTheMole = () => {
  for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener('click', () => {
      calculatedScore++
      if (holes[i].getAttribute('src') == 'mole.png') {
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
setInterval(moleMoving, 1000)

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
huntTheMole()
// moleMoving()
