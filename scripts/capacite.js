window.onload = async () =>{
    const cursos = await fetch('https://www.alura.com.br/api/cursos')
                        .then(res => res.json())
                        .then(cursos => {
                            return [...cursos.slice(0, 30)]
                        })

    cursos.forEach( curso =>{
        const cursoContainer = document.querySelector("#cursos-container ul")
        cursoContainer.innerHTML += `<li><a href="https://www.alura.com.br/curso-online-${curso['slug']}" target="blank">${curso['nome']}<a/></li>`
    })
}