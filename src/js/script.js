const cards = document.querySelectorAll('.card');
const questions = document.querySelectorAll('.question-block')

cards.forEach((element, key, array) => {
   if (key !== 0) {    //exception first card
      element.addEventListener('click', () => {
         element.classList.toggle('active')
      })
   }
})

questions.forEach((element, key, array) => {
   // if (key !== 0) {    //exception first card
   element.addEventListener('click', () => {
      element.classList.toggle('active')
   })
   // }
})