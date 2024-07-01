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
    else if (questionType == "Multiplication" || questionType == "testByLevel" || questionType == "testByRandom") {
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
function CreateRandomProblems(i) {
  // const levelIndex = {
  //   "Addition": [3, 20, 25, 29],
  //   "Subtraction": [1, 16, 24],
  //   "AdditionWithOneDicimal": [6, 11, 17, 22],
  //   "SubtractionWithOneDicimal": [7, 10, 23, 28],
  //   "AdditionWithTwoDicimal": [2,13, 14, 30],
  //   "SubtractionWithTwoDicimal": [8, 15, 19, 26],
  //   "Multiplication": [4, 18, 21],
  //   "Division": [5, 9, 12,27]
  // }
    for (const key in levelIndex) {
      if (levelIndex[key].includes(i)) {
        questionType = key
        CreateProblems(questionType, i)
        break
      }
    }
}

function CreateTestProblems(questionType) {
  switch (questionType) {
    case "testByLevel": 
      for (let i = 1; i <= 30; i++) {
        if (i >= 1 && i <= 4) {
          CreateProblems("Addition", i)
        }
        if (i >= 5 && i <= 7) {
          CreateProblems("Subtraction", i)
        }
        if (i >= 8 && i <= 11) {
          CreateProblems("AdditionWithOneDicimal", i)
        }
        if (i >= 12 && i <= 15) {
          CreateProblems("SubtractionWithOneDicimal", i)
        }
        if (i >= 16 && i <= 19) {
          CreateProblems("AdditionWithTwoDicimal", i)
        }
        if (i >= 20 && i <= 23) {
          CreateProblems("SubtractionWithTwoDicimal", i)
        }
        if (i >= 24 && i <= 26) {
          CreateProblems("Multiplication", i)
        }
        if (i >= 27 && i <= 30) {
          CreateProblems("Division", i)
        }
      }
      break
    case "testByRandom":
      for (let i = 1; i <= 30; i++) {
        CreateRandomProblems(i)
      }
      break
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

function checkAnswer(questions) {
  const $item = document.createElement('div')
  $item.classList.add('wrong')
  $item.innerHTML = `
  <h1>Ooh...</h1>
  <h2>Answer is</h2>
  <p>${questions[0]} = <b>${questions[1]}</b></p>
  `
  $showQuestion.innerHTML = ``
  $showQuestion.appendChild($item)
  $form.style.display ='none'
  $next.style.display = 'block'
}

function getTotalScore() {
  const finalGrade = currentGrade
  
  const $item = document.createElement('div')
  $item.classList.add('total')
  if (selected == "testLv" || selected == "testRan") {
    $item.innerHTML = `
    <h1>Well Done!!</h1>
    <h2>Your Score is...</h2>
    <h1><b>${finalGrade}</b>
    <h1><b>${totalScore}</b>/30</h1>
    <a href="index.html">Back to The Top Page</a>
    `
  }
  else {
    $item.innerHTML = `
    <h1>Well Done!!</h1>
    <h2>Your Score is...</h2>
    <h1><b>${totalScore}</b>/30</h1>
    <a href="index.html">Back to The Top Page</a>
    `
  }
  $showQuestion.innerHTML = ``
  $result.appendChild($item)
}

const scoreLevel = {
  "Addition": [4,0],
  "Subtraction": [3,0],
  "AdditionWithOneDicimal": [4,0],
  "SubtractionWithOneDicimal": [4,0],
  "AdditionWithTwoDicimal": [4,0],
  "SubtractionWithTwoDicimal": [4,0],
  "Multiplication": [3,0],
  "Division": [4,0]
}

function evaluateScore(selected, questionIndex) {
  let addScore
  let grade
  switch (selected) {
    case "testLv":
      if (questionIndex >=1 && questionIndex <= 4) {
        addScore = "Addition"
      }
      else if (questionIndex >=5 && questionIndex <= 7) {
        addScore = "Subtraction"
      }
      else if (questionIndex >=8 && questionIndex <= 11) {
        addScore = "AdditionWithOneDicimal"
      }
      else if (questionIndex >=12 && questionIndex <= 15) {
        addScore = "SubtractionWithOneDicimal"
      }
      else if (questionIndex >=16 && questionIndex <= 19) {
        addScore = "AdditionWithTwoDicimal"
      }
      else if (questionIndex >=20 && questionIndex <= 23) {
        addScore = "SubtractionWithTwoDicimal"
      }
      else if (questionIndex >=24 && questionIndex <= 26) {
        addScore = "Multiplication"
      }
      else if (questionIndex >=27 && questionIndex <= 30) {
        addScore = "Division"
      }
      break
    case "testRan":
      for (const key in levelIndex) {
        if (levelIndex[key].includes(questionIndex)) {
          addScore = key
          break
        }
      }
      break
  }
  scoreLevel[addScore][1] += 1

  let highestScore = []
  let max = -1
  for (const key in scoreLevel) {
    if (scoreLevel[key][0] === scoreLevel[key][1]) {
      highestScore.push(key)
    }
    else {
      const value = scoreLevel[key][1]
      if (value > max) {
        max = value
        highestScore.push(key)
      }
    }
  }
  if (highestScore.length > 1) {
    grade = highestScore[highestScore.length - 1]
  }
  else {
    grade = highestScore[0]
  }
  return grade
}