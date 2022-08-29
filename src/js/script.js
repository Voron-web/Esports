const cards = document.querySelectorAll('.card');

cards.forEach((element, key, array) => {
   if (key !== 0) {    //exception first card
      element.addEventListener('click', () => {
         element.classList.toggle('active')
      })
   }
})