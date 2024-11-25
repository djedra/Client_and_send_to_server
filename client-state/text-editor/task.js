const textarea = document.querySelector('#editor')
const button = document.querySelector('.button')
const text = localStorage.getItem('text')


textarea.value = localStorage.getItem('text')
window.addEventListener('beforeunload', (e) => {
  localStorage.setItem('text', textarea.value);
})


button.addEventListener('click', () => {
  localStorage.removeItem('text');
  textarea.value = ''
})

