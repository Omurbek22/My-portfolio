

const cllick = document.querySelector('.toggle')
const row = document.querySelector('.navigation')


cllick.addEventListener('click' , e=>{
    e.preventDefault()

    row.classList.toggle('active')
})

























