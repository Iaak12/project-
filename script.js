window.addEventListener('load', function(){
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 1000);
    
});

const slides =  document.querySelectorAll(".slide");

var counter = 0;

slides.forEach(
    (slide,index)=>{
        slide.style.bottom = `${index * 100}%`
})

const goNext = () => {
    if (counter < slides.length - 1) {
    counter++;
    slideImage();
    }
    };
    const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
    }
const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(${counter * 100}%)`
        }
    )

}