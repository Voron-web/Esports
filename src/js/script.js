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
   element.addEventListener('click', () => {
      element.classList.toggle('active')
   })
})


//////////////////////
const modalSale = document.querySelector('.modal_sale');
const cancelBtn = document.querySelector('#canselBtn');
const closeBtn = document.querySelector('#saleClose');
const saleAllBtn = document.querySelector('.items__title-btn');

function openModal() {
   modalSale.classList.remove('hidden');
}

function closeModal() {
   modalSale.classList.add('hidden');
}

saleAllBtn.addEventListener('click', () => {
   openModal();
})

cancelBtn.addEventListener('click', () => {
   closeModal();
})

closeBtn.addEventListener('click', () => {
   closeModal();
})