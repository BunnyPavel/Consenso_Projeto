document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById('inputNomeServico').value
        const descricao = descricao.getElementById('inputDescricaoServico').value

        await fetch("http://localhost:8080/servico", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    nome: nome, 
                    descricao: descricao
                    
                }
            )
        })
            .then((res) => {
                console.log(res)





            })
            .catch((erro) => { console.error(erro) })
    })
})
