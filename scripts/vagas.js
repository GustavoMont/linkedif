const vagasCadastradas = [ {cargo: 'Gerente de Estoque', empresa: 'Bretas', salario: 2900, local: 'Pirapor/MG', descricao: 'Coordenar, recepcionar, conferir e supervisionar o armazenamento dos produtos e materiais no estoque. Realizar os lançamentos da movimentação de entradas, saídas e controla os estoques. Controlar e gerenciar o inventário diário. Conferir a chegada e saída do seu turno.', dev: false, contato: 'https://www.bretas.com.br/trabalhe-conosco/'}, {cargo: 'Desenvolvedor Front-end', empresa: 'WebTaxi', salario: 6900, local: 'Remoto', descricao: 'Desenvolver a parte visual do nosso site, fazendo com que tenha uma ótima usabilidade e responsividade. Precisa entender de HTML, CSS, javascript, alguns frameworks como jQuery e Bootstrap e ter algumas noções de design. Saber usar programas edição de imagem e ilustração será um diferencial. Oferecemos plano de saúde e cartão de alimentação,', dev: true, contato: '#'}, {cargo: 'Operador de Telemarketing', empresa: 'AeC', salario: 1100, local: 'Remoto', descricao: 'Os nossos atendentes são mais que fundamentais na AeC, são o nosso coração! Você estará intermediando a comunicação entre cliente e usuário final por meio dos nossos canais atendimento. A atuação pode ocorrer em via voz, chat ou BackOffice. Pela grande quantidade de clientes e serviços que prestamos, temos vagas destinadas para primeiro emprego ou até para graduados. Pra quem gosta de suporte, atendimento receptivo ou ativo. Para trabalhar home office ou no escritório. Sempre 6 horas por dia e vagas em diversos turnos... É uma infinidade de opções!', dev: false, contato: 'https://queroser.aec.com.br/'}]

document.body.onload = () => {
    if (!localStorage.getItem('@vagas')){
        localStorage.setItem('@vagas', JSON.stringify(vagasCadastradas))
    }
    const vagas =  JSON.parse(localStorage.getItem('@vagas'))
    const vagasSection = document.querySelector('#vagas')

    vagas.forEach(item => {
        const template =  `<div class="vagas-container ">
        <div class="title ${item.dev ? 'dev' : ''}">
            <h2>${item.cargo}</h2>
        </div>
        <div class="main-info">
            <p>${item.empresa}</p>
            <span class="salario">Salário: R$${item.salario.toFixed(2).replace('.', ',')}</span>
            <span>${item.local}</span>
        </div>
        <hr />
        <div class="info">
            <p>
                <span>
                    ${item.descricao}
                </span>
            </p>
            </div>
        <a href=${item.contato} class="button">CADIDATAR-SE</a>
    </div> `
        vagasSection.innerHTML += template
    
    });

}


