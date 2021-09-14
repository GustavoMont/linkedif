const imagensG = ['./imagens/menu-image/office-1.png', './imagens/menu-image/office-2.png', './imagens/menu-image/work.png']
const imagensP = ['./imagens/mobile/menu-image/office-1.png', './imagens/mobile/menu-image/office-2.png', './imagens/mobile/menu-image/work.png']

const vagasCadastradas = [ {cargo: 'Gerente de Estoque', empresa: 'Bretas', salario: 2900, local: 'Pirapor/MG', descricao: 'Coordenar, recepcionar, conferir e supervisionar o armazenamento dos produtos e materiais no estoque. Realizar os lançamentos da movimentação de entradas, saídas e controla os estoques. Controlar e gerenciar o inventário diário. Conferir a chegada e saída do seu turno.', dev: false, contato: 'https://www.bretas.com.br/trabalhe-conosco/'}, {cargo: 'Desenvolvedor Front-end', empresa: 'WebTaxi', salario: 6900, local: 'Remoto', descricao: 'Desenvolver a parte visual do nosso site, fazendo com que tenha uma ótima usabilidade e responsividade. Precisa entender de HTML, CSS, javascript, alguns frameworks como jQuery e Bootstrap e ter algumas noções de design. Saber usar programas edição de imagem e ilustração será um diferencial. Oferecemos plano de saúde e cartão de alimentação,', dev: true, contato: '#'}, {cargo: 'Operador de Telemarketing', empresa: 'AeC', salario: 1100, local: 'Remoto', descricao: 'Os nossos atendentes são mais que fundamentais na AeC, são o nosso coração! Você estará intermediando a comunicação entre cliente e usuário final por meio dos nossos canais atendimento. A atuação pode ocorrer em via voz, chat ou BackOffice. Pela grande quantidade de clientes e serviços que prestamos, temos vagas destinadas para primeiro emprego ou até para graduados. Pra quem gosta de suporte, atendimento receptivo ou ativo. Para trabalhar home office ou no escritório. Sempre 6 horas por dia e vagas em diversos turnos... É uma infinidade de opções!', dev: false, contato: 'https://queroser.aec.com.br/'}]


const image1 = document.querySelector('#img-1')
const image2 = document.querySelector('#img-2')
const header = document.querySelector('header')
let imageIndex = 1


const menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener('click', () =>{
    menuBtn.innerText = menuBtn.innerText.toLowerCase() === 'menu' ? 'X' : 'MENU' 
    let isBodyHidden = document.body.style.overflow === 'hidden' 
    document.querySelector('#menu').classList.toggle('open')
    console.log(isBodyHidden)
    document.body.style.overflow = isBodyHidden ? '' : 'hidden'
})


setInterval(() => {
    const imagens = window.innerWidth < 1000 ? imagensP : imagensG
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


window.onload = () =>{
    if (!localStorage.getItem('@vagas')){
        localStorage.setItem('@vagas', JSON.stringify(vagasCadastradas))
    }
}


window.onscroll = ()=>{
    lazyImages.forEach((item) =>{
        const dataSrc = item.getAttribute('data-src')
        const distanciaTopo = item.getBoundingClientRect().top
        if (distanciaTopo < window.innerHeight + 120) {
            item.src = window.innerWidth < 1000 ? `./imagens/mobile/${dataSrc}` : `./imagens/${dataSrc}`
        }
    })
}