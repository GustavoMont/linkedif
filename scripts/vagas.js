
document.body.onload = () => {
    const vagas =  JSON.parse(localStorage.getItem('@vagas'))
    const vagasSection = document.querySelector('#vagas')
    
    if (!vagas) {
        vagasSection.innerHTML = `<h1>Erro ao publicar as vagas. Tente mais tarde</h1>`
        return
    }

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
        <a href=${item.contato} target="blank" class="button">CADIDATAR-SE</a>
    </div> `
        vagasSection.innerHTML += template
    
    });

}


