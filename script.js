const imagens = ['./imagens/menu-image/office-1.png', './imagens/menu-image/office-2.png', './imagens/menu-image/work.png']

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
        const dataSrc = item.getAttribute('data-src')
        const distanciaTopo = item.getBoundingClientRect().top
        if (distanciaTopo < window.innerHeight + 120) {
            item.src = window.innerWidth < 1000 ? `./imagens/mobile/${dataSrc}` : `./imagens/${dataSrc}`
        }
    })
}