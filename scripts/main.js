// **** navbar ****
const activeLinks = window.location.pathname
const navLinks = [...document.querySelectorAll('nav .right-side ul li .hr')]

navLinks.forEach(link =>{
    if(link.href.includes(`${activeLinks}`)){
        link.classList.add('active')
    }
})


const sideList = document.querySelector('.side-lise')

function actoin2(){
    sideList.style.display = 'flex'
}
function exit(){
    sideList.style.display = 'none'
}

let currentSlide = 1;
