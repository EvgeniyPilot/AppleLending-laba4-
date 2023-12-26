document.addEventListener('DOMContentLoaded', () => {

  const toUp = document.querySelector('.toUp')
  if (toUp) {
    toUp.addEventListener('click', ()=> {
      window.scrollTo(0, 0)
    })
  }

  const pcNav = document.querySelectorAll('.nav .li')
  if (pcNav) {
    const about = document.querySelector('#about')
    const menu = document.querySelector('#menu')
    const book = document.querySelector('#book')
    pcNav.forEach((item, id) => {
      item.addEventListener('click', ()=> {
        event.preventDefault()
        if (id === 0) {
          about.scrollIntoView({behavior: 'smooth'}, true);
        }
        if (id === 1) {
          menu.scrollIntoView({behavior: 'smooth'}, true);
        }
        if (id === 2) {
          book.scrollIntoView({behavior: 'smooth'}, true);
        }
      })
    })
  }







  const modal = document.querySelector('#modal_ticket')
  if (modal) {
    const inputs = document.querySelectorAll('.form input')
    let form = {
      date: null
    }
    const front = modal.querySelector('.front')
    const success = modal.querySelector('.success')
    const main_button = document.querySelector('#book .button')
    main_button.addEventListener('click', () => {
      openModal()
    })
    modal.addEventListener('click', (e) => {
      if (!e.target.closest('.modal_inner') || e.target.closest('.close')) {
        closeModal()
      }
    })
    const book_button = modal.querySelector('.form .button')

    book_button.addEventListener('click', () => {
      tryToBookATable()
    })




    function tryToBookATable() {
      form = {
        date: inputs[4].value
      }
      
      getResult()
    }

    function getResult() {
      front.classList.remove('active')
      success.classList.add('active')
    }

    function openModal() {
      modal.classList.add('active')
      front.classList.add('active')
      form = {
        date: null
      }
      inputs.forEach(item => {
        item.value = ''
      })
    }
    function closeModal() {
      modal.classList.remove('active')
      front.classList.remove('active')
      success.classList.remove('active')
      denied.classList.remove('active')
      new_time.classList.remove('active')
    }
  }

  
})