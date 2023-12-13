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

// **** destination page ****

var slider = Array.from(document.querySelectorAll('.destination .slider-container .container'));
var destinationLinks = Array.from(document.querySelectorAll('.destination .detination-navbar ul li a.frist-a'))
var destinationHr = Array.from(document.querySelectorAll('.destination .detination-navbar ul li a.hr'))



for(var i = 0; i < destinationLinks.length; i++){
    destinationLinks[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

let currentSlide = 1;

theChecker();


function theChecker(){
    removeActiveClass ()
    slider[currentSlide-1].classList.add('activee');
    destinationHr[currentSlide-1].classList.add('active')
}

function removeActiveClass (){
    slider.forEach(slide =>{
        slide.classList.remove('activee')
    })
    destinationHr.forEach(hr =>{
        hr.classList.remove('active')
    })
}





