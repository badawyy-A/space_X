var tecnologyBulets = Array.from(document.querySelectorAll('.technology .container ul li'))
var tecnologySlider = Array.from(document.querySelectorAll('.technology .slider-container .container'))

console.log(tecnologySlider)
for(var i = 0; i < tecnologyBulets.length; i++ ){
    tecnologyBulets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('bulets-index'));
        tecnologySliderMove();
    }
}


tecnologySliderMove();

function tecnologySliderMove(){
    removeActiveClass()
    tecnologySlider[currentSlide - 1 ].classList.add('activee');
    tecnologyBulets[currentSlide - 1].classList.add('active-number');
}

function removeActiveClass(){
    tecnologySlider.forEach(slide=>{
        slide.classList.remove('activee')
    })

    tecnologyBulets.forEach(bullet=>{
        bullet.classList.remove('active-number')
    })
}




