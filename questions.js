const $levels = document.querySelectorAll('#levels button')
const $questions = document.getElementById('questions')
const $showQuestion = document.getElementById('showQuestion')
const $result = document.getElementById('result')
console.log($levels)
const $next = document.getElementById('next')

for (const el of $levels) {
  el.addEventListener('click', function(e) {
    const level = e.currentTarget.id
    console.log("Selected level: ", level)
    const url = `question.html?level=${level}`
    window.location.href = url
  })
}

window.addEventListener('load', function() {
  console.log(selected)
  console.log($questions)

  const levels = {
    'level1': "Addition",
    'level2': "Subtraction",
    'level3': "AdditionWithOneDicimal",
    'level4': "SubtractionWithOneDicimal",
    'level5': "AdditionWithTwoDicimal",
    'level6': "SubtractionWithTwoDicimal",
    'level7': "Multiplication",
    'level8': "Division",
    'random': "Random"
  }
  for (const item in levels) {
    if (item == selected) {
      questionType = levels[item]
      break
    }
  }
  CreateProblems(questionType)

  for (i = 1; i <= 30; i++) {
    console.log("Question " + i + " : " + questions[i][0])
    console.log("Answer " + (i) + " : " + questions[i][1])
  }
})

const $start = document.getElementById('start')
const $check = document.getElementById('check')
const $answer = document.getElementById('answer')
const $userInput = document.getElementById('userInput')
const $form = document.getElementById('form')
let questionIndex = 1
let answerIndex = 0

$start.addEventListener('click', function(e) {
  e.preventDefault()
  const $message = document.getElementById('message')
  $message.style.display = 'none'
  // displayQuestions(questionIndex, questionList[answerIndex])
  displayQuestions(questionIndex)
})

$check.addEventListener('click', function(e) {
  e.preventDefault()
  const input = $userInput.value
  console.log(input)
  if (input == questions[questionIndex][1]) {
    correctAnswer()
    totalScore++
  }
  else {
    wrongAnswer(questions[questionIndex][1])
  }
  questionIndex++
  // getAnswer++
  answerIndex++
  console.log('questionIndex:' + questionIndex)
  console.log('getanswer: ' + answerIndex)
})

$answer.addEventListener('click', function(e) {
  e.preventDefault()
  checkAnswer(questions[questionIndex][1])
  questionIndex++
  answerIndex++
  // getAnswer++
})

$next.addEventListener('click', function(e) {
  e.preventDefault()
  if (questionIndex <= 30) {
    displayQuestions(questionIndex)
  }
  else {
    console.log('complete all questions')
    getTotalScore()
  }
  $next.style.display = 'none'
})
