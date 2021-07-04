let sun = document.querySelector('.sun');
let spark = document.querySelectorAll('.Sparks');
let ButLeft = document.querySelector('.ButLeft');
let ButRight = document.querySelector('.ButRight');
let TopRight = document.querySelector('.TopRight');
let TopLeft = document.querySelector('.TopL');



window.addEventListener('scroll', () => {
    let windowY = window.scrollY;
    spark.forEach(el => {

        const speedSpark = el.getAttribute('data-speed')

        el.style.transform = `translate(-${windowY * speedSpark}px, ${windowY * 0.3}px)`

    });

    ButLeft.style.transform = `translate(-${windowY * 0.1}px, ${windowY * 0.3}px`
    ButRight.style.transform = `translate(${windowY * 0.1}px, ${windowY * 0.3}px`
    TopRight.style.transform = `translate(${windowY * 0.3}px, -${windowY * 0.3}px`
    TopLeft.style.transform = `translate(-${windowY * 0.3}px, -${windowY * 0.3}px`
    

    sun.style.transform = `translate(-50%, ${windowY * 0.5}px)`

})