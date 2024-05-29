const $levels = document.querySelectorAll('#levels button')
const $questions = document.getElementById('questions')
console.log($levels)

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
  switch (selected) {
    case "level1" :
      questionType = "Addition"
      CreateProblems(questionType)
      break

    case "level2" :
      questionType = "Subtraction"
      CreateProblems(questionType)
      break

    case "level3" :
      questionType = "AdditionWithOneDicimal"
      CreateProblems(questionType)
      break

    case "level4" :
      questionType ="SubtractionWithOneDicimal"
      CreateProblems(questionType)
      break

    case "level5" :
      questionType = "AdditionWithTwoDicimal"
      CreateProblems(questionType)
      break

    case "level6" :
      questionType ="SubtractionWithTwoDicimal"
      CreateProblems(questionType)
      break

    case "level7" :
      questionType ="Multiplication"
      CreateProblems(questionType)
      break

    case "level8" :
      questionType ="Division"
      CreateProblems(questionType)
      break
  }
  for (i = 1; i < questionList.length; i++) {
    console.log("Question " + i + " : " + questionList[i])
    console.log("Answer " + i + " : " + answerList[i])
  }

  

  for (i = 1; i < questionList.length; i++) {
    displayQuestions(i, questionList[i])
  }
})


    // document.addEventListener('DOMContentLoaded', () => {
    //   const level = getLevel('level')
    //   const $selectedLevel = document.getElementById('selected-level')
    //   console.log("Selected level: ", $selectedLevel)
    //   const $title = document.createElement('h2')
    //   $title.textContent = level
    //   $showLevel.appendChild($title)

    //   switch (level) {
    //     case "level1" :
    //       questionType = "Addition"
    //       CreateProblems(questionType)
          
    //       break
  
    //     case "level2" :
    //       questionType = "Subtraction"
    //       CreateProblems(questionType)
    //       break
  
    //     case "level3" :
    //       questionType = "AdditionWithOneDicimal"
    //       CreateProblems(questionType)
    //       break
  
    //     case "level4" :
    //       questionType ="SubtractionWithOneDicimal"
    //       CreateProblems(questionType)
    //       break
  
    //     case "level5" :
    //       questionType = "AdditionWithTwoDicimal"
    //       CreateProblems(questionType)
    //       break
  
    //     case "level6" :
    //       questionType ="SubtractionWithTwoDicimal"
    //       CreateProblems(questionType)
    //       break
  
    //     case "level7" :
    //       questionType ="Multiplication"
    //       CreateProblems(questionType)
    //       break
  
    //     case "level8" :
    //       questionType ="Division"
    //       CreateProblems(questionType)
    //       break
    //   }
    //   for (i = 1; i < questionList.length; i++) {
    //     console.log("Question " + i + " : " + questionList[i])
    //     console.log("Answer " + i + " : " + answerList[i])
    //   }

    // })


// function getLevel(param) {
//   const urlParams = new URLSearchParams(window.location.search)
//   return urlParams.get(param)
// }


// window.addEventListener('load', function() {
//   const level = getLevel('level')
//   const $selectedLevel = document.getElementById('selected-level')
// })


