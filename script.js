let question = ''
let answer = 0
let questionType
let totalScore = 0
const questions = {}
// let index = 1

// create a problems 
function CreateProblems(questionType, i) {
    let num1
    let num2
    let min = 0.1
    let max = 99.9
    let random1
    let random2
    let preAnswer

    if (i < 15) {
      num1 = Math.floor(Math.random() * 10)
      num2 = Math.floor(Math.random() * 10)
    }
    else if (i < 25) {
      num1 = Math.floor(Math.random() * 100)
      num2 = Math.floor(Math.random() * 10)
    }
    else if (questionType == "Multiplication") {
      num1 = Math.floor(Math.random() * 100)
      num2 = Math.floor(Math.random() * 10)
    }
    else  {
      num1 = Math.floor(Math.random() * 100)
      num2 = Math.floor(Math.random() * 100)
    }

    switch (questionType) {
      case "Addition" :
        question = num1 + ' + ' + num2
        answer = num1 + num2
        break
      case "Subtraction" :
        question = num1 + ' - ' + num2
        answer = num1 - num2
        break
      case "AdditionWithOneDicimal" :
        random1 = Math.random() * (max - min) + min
        num1 = random1.toFixed(1)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(1)

        question = num1 + ' + ' + num2
        preAnswer = parseFloat(num1) + parseFloat(num2)
        answer = preAnswer.toFixed(1)
        break
      case "SubtractionWithOneDicimal" :
        random1 = Math.random() * (max - min) + min
        num1 = random1.toFixed(1)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(1)

        question = num1 + ' - ' + num2
        preAnswer = parseFloat(num1) - parseFloat(num2)
        answer = preAnswer.toFixed(1)
        break
      case "AdditionWithTwoDicimal" :
        random1 = Math.random() * (max - min) + min
         num1 = random1.toFixed(2)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(2)
  
        question = num1 + ' + ' + num2
        preAnswer = parseFloat(num1) + parseFloat(num2)
        answer = preAnswer.toFixed(2)
        break
      case "SubtractionWithTwoDicimal" :
        random1 = Math.random() * (max - min) + min
         num1 = random1.toFixed(2)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(2)  

        question = num1 + ' - ' + num2
        preAnswer = parseFloat(num1) - parseFloat(num2)
        answer = preAnswer.toFixed(2)
        break   
      case "Multiplication" :
        question = num1 + ' × ' + num2
        answer = num1 * num2
        break
      case "Division" :
        while (num2 === 0 || num1 % num2 !== 0) {
          num1 = Math.floor(Math.random() * 100);
          num2 = Math.floor(Math.random() * 10) + 1;
        }
        question = num1 + ' ÷ ' + num2
        answer = num1 / num2
        break
    }
    questions[i] = [question, answer]
}

function CreateRandomProblems(i) {
  const levelIndex = {
    "Addition": [3, 20, 25, 29],
    "Subtraction": [1, 16, 24],
    "AdditionWithOneDicimal": [6, 11, 17, 22],
    "SubtractionWithOneDicimal": [7, 10, 23, 28],
    "AdditionWithTwoDicimal": [2,13, 14, 30],
    "SubtractionWithTwoDicimal": [8, 15, 19, 26],
    "Multiplication": [4, 18, 21],
    "Division": [5, 9, 12,27]
  }
    for (const key in levelIndex) {
      if (levelIndex[key].includes(i)) {
        questionType = key
        CreateProblems(questionType, i)
        break
      }
    }
}

function getLevel(param) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

function displayQuestions(index) {
  const $item = document.createElement('div')
  $item.classList.add('item')
  $item.innerHTML = `
  <h1>Question ${index}</h1>
  <h2>${questions[index][0]}</h2>
  `
  const $form = document.getElementById('form')
  $showQuestion.innerHTML = ``
  const $input = $form.querySelector('input')
  $input.value = ``
  $showQuestion.appendChild($item)
  $form.style.display = 'block'
}

function correctAnswer() {
  const $item = document.createElement('div')
  $item.classList.add('correct')
  $item.innerHTML = `
  <h1>Great!</h1>
  <h2>Your answer is correct</h2>
  `
  $showQuestion.innerHTML = ``
  $showQuestion.appendChild($item)
  $form.style.display ='none'
  $next.style.display = 'block'
}

function wrongAnswer(item) {
  const $item = document.createElement('div')
  $item.classList.add('wrong')
  $item.innerHTML = `
  <h1>Ooh...</h1>
  <h2>Your answer is wrong</h2>
  <p>Correct answer is ${item}</p>
  `
  $showQuestion.innerHTML = ``
  $showQuestion.appendChild($item)
  $form.style.display ='none'
  $next.style.display = 'block'
}

function checkAnswer(item) {
  const $item = document.createElement('div')
  $item.classList.add('wrong')
  $item.innerHTML = `
  <h1>Ooh...</h1>
  <h2>Answer is</h2>
  <p>${questions[questionIndex][0]} = <b>${questions[questionIndex][1]}</b></p>
  `
  $showQuestion.innerHTML = ``
  $showQuestion.appendChild($item)
  $form.style.display ='none'
  $next.style.display = 'block'
}

function getTotalScore() {
  const $item = document.createElement('div')
  $item.classList.add('total')
  $item.innerHTML = `
  <h1>Well Done!!</h1>
  <h2>Your Score is...</h2>
  <h1><b>${totalScore}</b>/30</h1>
  <a href="index.html">Back to The Top Page</a>
  `
  $showQuestion.innerHTML = ``
  $result.appendChild($item)
}