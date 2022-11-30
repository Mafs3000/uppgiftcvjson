const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-link')

menuBtn.addEventListener('click',()=>{
navlinks.classList.toggle('mobile-menu')
})