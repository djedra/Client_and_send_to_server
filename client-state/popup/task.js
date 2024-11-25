const popup = document.querySelector('#subscribe-modal')
const popupClose = document.querySelector('.modal__close')

// document.cookie = 'closePopup=' + encodeURIComponent('false');


function getCookie(name) {
  const couple = document.cookie.split('; ')

  const cookie = couple.find(p => p.startsWith(name + '='))

  return cookie.substring(name.length + 1)
}

if (getCookie('closePopup') === 'false') {
  popup.classList.add('modal_active')
  popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active')
    document.cookie = 'closePopup=' + encodeURIComponent('true');
  })
}