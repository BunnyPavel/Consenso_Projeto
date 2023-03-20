document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let idServico = localStorage.getItem("idServico");
        console.log(localStorage.getItem("idServico"))
        const nome = document.getElementById('InputNomeServico').value
        const descricao = document.getElementById('InputDescricaoServico').value
        console.log(nome, descricao)

        await fetch("http://localhost:8080/servico/"+ idServico, {
            method: 'PUT',
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
                if(res.ok){
                    alert("Serviço Alterado!")
                }
   
            })
            .catch((erro) => { console.error(erro) })
    })
})
