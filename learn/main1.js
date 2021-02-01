const moreBtn = document.querySelector('.info .metada . moreBtn')
const title  = document.querySelector('.info .metada . title')

moreBtn.addEventListener('click', () =>{
  moreBtn.classList.toggle('clicked')
  title.classList.toggle('clamp')
})