const $questions = document.getElementById('questions')
const $showQuestion = document.getElementById('showQuestion')
const $result = document.getElementById('result')
const $start = document.getElementById('start')
const $check = document.getElementById('check')
const $answer = document.getElementById('answer')
const $userInput = document.getElementById('userInput')
const $next = document.getElementById('next')
const $form = document.getElementById('form')

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
      console.log("questionType: " + questionType)
      break
    }
    else {console.log('Not found')}
  }
  if (questionType == "Random") {
    for (let i = 1; i <= 30; i++) {
      CreateRandomProblems(i)
    }
  }
  else {
    for (let i = 1; i <= 30; i++) {
      CreateProblems(questionType, i)
    }
  }

  for (i = 1; i <= 30; i++) {
    console.log("Question " + i + " : " + questions[i][0])
    console.log("Answer " + (i) + " : " + questions[i][1])
  }
})

let questionIndex = 1
let answerIndex = 0

$start.addEventListener('click', function(e) {
  e.preventDefault()
  const $message = document.getElementById('message')
  $message.style.display = 'none'
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
  answerIndex++
  console.log('questionIndex:' + questionIndex)
  console.log('getanswer: ' + answerIndex)
})

$answer.addEventListener('click', function(e) {
  e.preventDefault()
  checkAnswer(questions[questionIndex][1])
  questionIndex++
  answerIndex++
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

