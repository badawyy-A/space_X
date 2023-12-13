var crewBulets = Array.from(document.querySelectorAll('.crew .slider-container .bultos ul li'))
var crewSlider = Array.from(document.querySelectorAll('.crew .slider-container .container'))

for(var i = 0; i < crewBulets.length; i++ ){
    crewBulets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('bulet-index'));
        crewSliderMove();
    }
}

crewSliderMove();

function crewSliderMove(){
    removeActiveClass()
    crewSlider[currentSlide -1].classList.add('activee');
    crewBulets[currentSlide - 1].classList.add('active-bullet');
}

function removeActiveClass(){
    crewSlider.forEach(slide=>{
        slide.classList.remove('activee')
    })

    crewBulets.forEach(bullet=>{
        bullet.classList.remove('active-bullet')
    })
}

crewBulets.forEach(bullet=>{
    bullet.setAttribute("bulet-index",`${currentSlide++}`)
})