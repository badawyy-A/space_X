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
var img = document.querySelector('.destination .slider-container .container img');
var img2 = document.querySelectorAll('.destination .slider-container .container img')[1];
var img3 = document.querySelectorAll('.destination .slider-container .container img')[2];
var img4 = document.querySelectorAll('.destination .slider-container .container img')[3];


console.log(img2)

let rotationAngle = 0; 
let intervelMove = setInterval(imgMove , 100);

function imgMove(){
    rotationAngle += 1;
    img.style.transform = `rotate(${rotationAngle}deg)`; 
    img2.style.transform = `rotate(${rotationAngle}deg)`; 
    img3.style.transform = `rotate(${rotationAngle}deg)`; 
    img4.style.transform = `rotate(${rotationAngle}deg)`; 
}



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





