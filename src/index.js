const messageH1 = document.querySelector('h1')

const diceOneImg = document.querySelector('.img1')
const diceTwoImg = document.querySelector('.img2')

const randomNumber1 = Math.floor(Math.random() * 6 + 1)
const randomNumber2 = Math.floor(Math.random() * 6 + 1)

diceOneImg.setAttribute('src', `./images/dice${randomNumber1}.png`)
diceTwoImg.setAttribute('src', `./images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
  messageH1.textContent = 'Player 1 Wins!'
} else if (randomNumber1 < randomNumber2) {
  messageH1.textContent = 'Player 2 Wins!'
} else {
  messageH1.textContent = 'Draw!'
}
