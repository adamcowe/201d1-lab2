//begin the "magic"//

'use strict';

//validation Function

function processResponse(inQuestion, inAnswers) {
  var userAnswer = prompt(inQuestion).toLowerCase();
  for (var answerIndex = 0; answerIndex < inAnswers.length; answerIndex++) {
    if (userAnswer === inAnswers[answerIndex])
      return 'Correct!';
  }
  return 'Incorrect';
}

//Questions//

var questionsArr = [
  {question: 'Does Adam have pets?',
    answers: ['y','yes']},
  {question: 'Does Adam like staring at stars?',
    answers: ['y','yes']},
  {question: 'Does Adam like Blue Cheese Salad Dressing?',
    answers: ['y','yes']},
  {question: 'Does Adam hate his sham iPhone 6?',
    answers: ['n','no']},
  {question: 'Was Adam ever on a Talent Show?',
    answers: ['n','no']}
];

var correctAnswerCount = 0;
for (var i = 0; i < questionsArr.length; i++) {
  var result = processResponse(questionsArr[i].question, questionsArr[i].answers);
  alert(result);
  if (result === 'Correct!') {
    correctAnswerCount++;
  }
}

alert('You got ' + correctAnswerCount + ' answers right.');
