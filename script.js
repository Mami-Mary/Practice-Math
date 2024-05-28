let question = ''
let answer = 0
const questionList = []
const answerList = []
let questionType

// create a problems 
function CreateProblems(questionType) {
  for (let i = 0; i <= 30; i++) {
    let num1
    let num2
    let min
    let max
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
        min = 0.1
        max = 99.9
        random1 = Math.random() * (max - min) + min
        num1 = random1.toFixed(1)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(1)

        question = num1 + ' + ' + num2
        preAnswer = parseFloat(num1) + parseFloat(num2)
        answer = preAnswer.toFixed(1)
        break

      case "SubtractionWithOneDicimal" :
        min = 0.1
        max = 99.9
        random1 = Math.random() * (max - min) + min
        num1 = random1.toFixed(1)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(1)

        question = num1 + ' - ' + num2
        preAnswer = parseFloat(num1) - parseFloat(num2)
        answer = preAnswer.toFixed(1)
        break
        

      case "AdditionWithTwoDicimal" :
        min = 0.1
        max = 99.9
        random1 = Math.random() * (max - min) + min
         num1 = random1.toFixed(2)
        random2 = Math.random() * (max - min) + min
        num2 = random2.toFixed(2)
  
        question = num1 + ' + ' + num2
        preAnswer = parseFloat(num1) + parseFloat(num2)
        answer = preAnswer.toFixed(2)
        break

      case "SubtractionWithTwoDicimal" :
        min = 0.1
        max = 99.9
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

      default:
        console.error("Unsupported question type: " + questionType);
        continue;
    }
    questionList.push(question)
    answerList.push(answer)
  }
}

// Test
// questionType = "Addition"
// console.log("Addition")
// CreateProblems(questionType)
//   // test
//   for (i = 1; i < questionList.length; i++) {
//     console.log(i + " : " + questionList[i])
//     console.log(i + " : " + answerList[i])
//   }

// questionType = "Subtraction"
// console.log("Subtraction")
// CreateProblems(questionType)
//   // test
//   for (i = 1; i < questionList.length; i++) {
//     console.log(i + " : " + questionList[i])
//     console.log(i + " : " + answerList[i])
//   }
// questionType = "AdditionWithOneDicimal"
// console.log("AdditionWithOneDicimal")
// CreateProblems(questionType)
//   // test
//   for (i = 1; i < questionList.length; i++) {
//     console.log(i + " : " + questionList[i])
//     console.log(i + " : " + answerList[i])
//   }
// questionType = "SubtractionWithOneDicimal"
// console.log("SubtractionWithOneDicimal")
// CreateProblems(questionType)
//   // test
//   for (i = 1; i < questionList.length; i++) {
//     console.log(i + " : " + questionList[i])
//     console.log(i + " : " + answerList[i])
//   }
// questionType = "AdditionWithTwoDicimal"
// console.log("AdditionWithTwoDicimal")
// CreateProblems(questionType)
//   // test
//   for (i = 1; i < questionList.length; i++) {
//     console.log(i + " : " + questionList[i])
//     console.log(i + " : " + answerList[i])
//   }
// questionType = "SubtractionWithTwoDicimal"
// console.log("SubtractionWithTwoDicimal")
// CreateProblems(questionType)
//   // test
//   for (i = 1; i < questionList.length; i++) {
//     console.log(i + " : " + questionList[i])
//     console.log(i + " : " + answerList[i])
//   }
questionType = "Multiplication"
console.log("Multiplication")
CreateProblems(questionType)
  // test
  for (i = 1; i < questionList.length; i++) {
    console.log(i + " : " + questionList[i])
    console.log(i + " : " + answerList[i])
  }
questionType = "Division"
console.log("Division")
CreateProblems(questionType)
  // test
  for (i = 1; i < questionList.length; i++) {
    console.log(i + " : " + questionList[i])
    console.log(i + " : " + answerList[i])
  }