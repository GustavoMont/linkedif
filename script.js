const imagens = ['./imagens/menu-image/office-1.jpg', './imagens/menu-image/office-2.jpg', './imagens/menu-image/work.jpg']

const image1 = document.querySelector('#img-1')
const image2 = document.querySelector('#img-2')
const header = document.querySelector('header')
let imageIndex = 1

setInterval(() => {
    const img1Classes = image1.classList
    if (imageIndex >= imagens.length) {
        imageIndex = 0
    }
    if (img1Classes.contains('sumiu')) {
        image1.src = imagens[imageIndex]
    }
    else{
        image2.src = imagens[imageIndex]
    }
    
    image1.classList.toggle('sumiu')
    image2.classList.toggle('sumiu')
    imageIndex++
}, 3000);


const lazyImages = document.querySelectorAll('.lazy-load')

window.onscroll = ()=>{
    lazyImages.forEach((item) =>{
        const distanciaTopo = item.getBoundingClientRect().top
        if (distanciaTopo < window.innerHeight + 120) {
            item.src = item.getAttribute('data-src')
        }
    })
}