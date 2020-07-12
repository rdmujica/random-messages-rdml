const messages = [
  'Rafael',
  'Daniel',
  'Nany',
  'Samuel',
  'Diego',
  'Medina',
  'Teran',
  'Mujica',
  'Lopez',
  'Yulianny',
  'Dianneiry',
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }
