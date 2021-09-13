const form = document.forms[0]

function isInvalidoInfo(inputsGroup){
    let invalido = false
    inputsGroup.forEach(input => {
        if (input.value === '' || input.value.length <= 2) {
            invalido = true
            input.value = ''
            input.style.borderColor = '#f91000'
            input.placeholder = `CAMPO OBRIGATÓRIO`
        }
        else{
            input.style.borderColor = 'rgb(172, 172, 172)'
        }
    })
    return invalido;
}


function isSalarioInvalido(salario){
    if (isNaN(salario)) {
        form.salario.value = ''
        form.salario.style.borderColor = '#f91000'
        form.salario.placeholder = 'Somente números'
        return true
    }
    if (!isNaN(salario) && salario <= 500) {
        form.salario.value = ''
        form.salario.style.borderColor = '#f91000'
        form.salario.placeholder = 'Salário muito baixo'
        return true
    }
    return false
}

form.onsubmit = (e) => {
    e.preventDefault()
    const obrigatorios = document.querySelectorAll('[required]')
    
    const cargo = form.cargo.value
    const empresa = form.empresa.value
    const salario = parseFloat(form.salario.value)    
    const local = form.local.value === '' ? 'Remoto' : form.local.value
    const contato = form.contato.value
    const descricao = form.descricao.value
    const dev = form.dev.checked
    
    if (isInvalidoInfo(obrigatorios) || isSalarioInvalido(salario)) {
        return
    }

    const vagasExistentes = JSON.parse(localStorage.getItem('@vagas'));
    const vagasAtualizadas = [{cargo, empresa, salario, local, contato, descricao, dev}, ...vagasExistentes]

    localStorage.setItem('@vagas', JSON.stringify(vagasAtualizadas))
    Object.values(form).forEach(input =>{
        input.value = ''
    })
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `<p>Vaga Cadastrada com Sucesso</p>`

}