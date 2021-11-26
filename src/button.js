const buttonsQuestion = document.querySelectorAll('.question_button');
const buttonsAnswers = document.querySelectorAll('.answer_button');

 

buttonsQuestion.forEach((buttonsQuestion, index) => {
    buttonsQuestion.addEventListener('click', () => {
    buttonsAnswers[index].classList.toggle('hide')
   
    
  });
}); 


const bookmarks = document.querySelectorAll('question_marks')

bookmarks.forEach(bookmarks => {
  
  bookmarks.addEventlistner('cklick', () => {
      bookmarks.classList.toggle('active')
      bookmarks.classList.toggle('inactive')
    
  })
})