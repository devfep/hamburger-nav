const openBtn = document.querySelector('.open-btn'),
    closeBtn = document.querySelector('.close-btn'),
    nav = document.querySelectorAll('.nav');


openBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.add('visible'))
})


closeBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.remove('visible'))
})