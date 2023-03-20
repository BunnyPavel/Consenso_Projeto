document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')

    form.addEventListener("submit", async (e) => { 
        e.preventDefault();
        const idServico =  localStorage.getItem("idUsuario");
        var data = document.getElementById('data').value
        const Hora = document.getElementById('hora').value

      const dado =  await fetch("http://localhost:8080/agendamento", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    data: data,
                    hora: Hora,
                    servico:{
                        idServico: idServico
                    }
                    
                }
            )
            
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("submit", async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/servicos")
            .then(res => {
                return res.json();
            }).then(saida => {
                saida.forEach(res => {
                        const option = document.createElement('option');
                        option.value = res.idServico;
                        option.innerText = res.nome;
                        let b = document.querySelector('#selAge')
                        console.log(b)
                        b.appendChild(option);
                    })
 
 
                })
            .catch((erro) => { console.error(erro)})
 
    })
})
 
 