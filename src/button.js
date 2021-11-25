
const buttonsQuestion = document.querySelectorAll('.question_button');

const buttonAnswers = document.querySelectorAll('.answer_button');


buttonsQuestion.forEach((buttonsQuestion, index) => {
  buttonsQuestion.addEventListener('click', () => {
    buttonAnswers[index].classList.toggle('hide');
  });
}); 