let int1 = 0
let int2 = 0
let float1 = 0
let float2 = 0
let float2Decimal1 = 0
let float2Decimal2 = 0
let fraction = 0

// Create ramdom number
function randomNumber()
{
  int1 = Math.floor(Math.random() * 100)
  int2 = Math.floor(Math.random() * 10)
  const min1 = 0.1
  const max1 = 99.9
  const random1 = Math.random() * (max1 - min1) + min1
  float1 = random1.toFixed(1)
  const random2 = Math.random() * (max1 - min1) + min1
  float2 = random2.toFixed(1)
  const min2 = 0.11
  const max2 = 99.99
  const random3 = Math.random() * (max2 - min2) + min2
  float2Decimal1 = random3.toFixed(2)
  const random4 = Math.random() * (max2 - min2) + min2
  float2Decimal2 = random4.toFixed(2)

  const numerator = Math.floor(Math.random() * 10)
  let denominator = Math.floor(Math.random() * 10)
  if (denominator === 0)
  {
    denominator = 1
  }
  fraction = numerator + '/' + denominator

  return [int1, int2, float1, float2, float2Decimal1, float2Decimal2, fraction]
}
// randomNumber()
// console.log(int1 + '¥' + int2 + '¥'+ float1 + '¥' + float2 + '¥' + float2Decimal1 + '¥' + float2Decimal2 + '¥' + fraction)

// Addition
// let int1 = 0
// let int2 = 0
let question = ''
let answer = 0
const questionList = []
const correctAnswerList = []

function additionProblems()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = int1 + ' + ' + int2
    questionList.push(question)

    answer = int1 + int2
    correctAnswerList.push(answer)
  }
}

// TEST
additionProblems()
for (let i = 0; i < questionList.length; i++)
{
  console.log('Question' + (i+1) + ': ' + questionList[i])
  console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
}

// Subtraction
function subtractionProblems()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = int1 + ' - ' + int2
    questionList.push(question)

    answer = int1 - int2
    correctAnswerList.push(answer)
  }
}

// TEST
subtractionProblems()
{
  for (let i = 0; i < questionList.length; i++)
  {
    console.log('Question' + (i+1) + ': ' + questionList[i])
    console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
  }
}

function additionWithOneDicimal()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = float1 + ' + ' + float2
    questionList.push(question)
  
    answer = parseFloat(float1) + parseFloat(float2)
    correctAnswerList.push(answer.toFixed(1))
  }
}
// TEST
additionWithOneDicimal()
{
  for (let i = 0; i < questionList.length; i++)
  {
    console.log('Question' + (i+1) + ': ' + questionList[i])
    console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
  }
}

function subtractionWithOneDicimal()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = float1 + ' - ' + float2
    questionList.push(question)
  
    answer = parseFloat(float1) - parseFloat(float2)
    correctAnswerList.push(answer.toFixed(1))
  }
}
// TEST
subtractionWithOneDicimal()
{
  for (let i = 0; i < questionList.length; i++)
  {
    console.log('Question' + (i+1) + ': ' + questionList[i])
    console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
  }
}

function additionWithTwoDicimal()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = float2Decimal1 + ' + ' + float2Decimal2
    questionList.push(question)
  
    answer = parseFloat(float2Decimal1) + parseFloat(float2Decimal2)
    correctAnswerList.push(answer.toFixed(2))
  }
}
// TEST
additionWithTwoDicimal()
{
  for (let i = 0; i < questionList.length; i++)
  {
    console.log('Question' + (i+1) + ': ' + questionList[i])
    console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
  }
}

function subtractionWithTwoDicimal()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = float2Decimal1 + ' - ' + float2Decimal2
    questionList.push(question)
  
    answer = parseFloat(float2Decimal1) - parseFloat(float2Decimal2)
    correctAnswerList.push(answer.toFixed(2))
  }
}
// TEST
subtractionWithTwoDicimal()
{
  for (let i = 0; i < questionList.length; i++)
  {
    console.log('Question' + (i+1) + ': ' + questionList[i])
    console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
  }
}

function multiplication()
{
  for (let i = 0; i < 30; i++)
  {
    randomNumber()
    question = int1 + ' * ' + int2
    questionList.push(question)

    answer = int1 * int2
    correctAnswerList.push(answer)
  }
}
// TEST
multiplication()
for (let i = 0; i < questionList.length; i++)
{
  console.log('Question' + (i+1) + ': ' + questionList[i])
  console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
}

function division()
{
  for (let i = 0; i < 30; )
  {
    randomNumber()
    question = int1 + ' / ' + int2
    if (int1%int2 == 0)
    {
    questionList.push(question)
    answer = int1 / int2
    correctAnswerList.push(answer)
    i++
    }
  }
}
// TEST
division()
for (let i = 0; i < questionList.length; i++)
{
  console.log('Question' + (i+1) + ': ' + questionList[i])
  console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
}

// Level9は削除する
// function multiplcationAndDivisionOfFractions()
// {
//   for (let i = 0; i < 30; i++)
//   {
//     randomNumber()
//     if (i < 16)
//     {
//       question = int
//     }
//   }
// }

function linearEquation()
{
  for (let i = 0; i < 30; )
  {
    randomNumber()
    if (i < 11)
    {
      question = int1 + 'x' + ' + ' + int2 + ' = 0'
      answer = int1/-int2
    }
    else if (i >= 11 && i < 21)
    {
      question = int1 + 'x' + ' + ' + int2 + ' = 2'
      answer = int1/(2-int2)
    }
    else if (i >= 21 && i < 31)
    {
      question = int1 + 'x' + ' - ' + int2 + ' = 0'
      answer = int1/-int2
    }

    if (answer % 0)
    {
      questionList.push(question)
      correctAnswerList.push(answer)
      i++
    }
  }
}
// TEST
linearEquation()
for (let i = 0; i < questionList.length; i++)
{
  console.log('Question' + (i+1) + ': ' + questionList[i])
  console.log('Answer' + (i+1) + ': ' + correctAnswerList[i])
}