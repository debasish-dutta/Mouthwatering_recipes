const links = document.querySelector('.nav-links')
const navBtn = document.querySelector('.nav-btn')

navBtn.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})