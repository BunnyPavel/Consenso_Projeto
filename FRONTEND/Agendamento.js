document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastrar')

    form.addEventListener("submit", async (e) => {
        e.preventDefault();


        const agendar = agendar.getElementById('inputAgendar').value
        const servico = servico.getElementById('inputServico').value
        const data = data.getElementById('inputData').value
        const hora = hora.getElementById('inputHora').value

        await fetch("http://localhost:8080/usuario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    data: data.value,
                    hora: hora.value,
                    servico: {
                     idServico: parseInt(servico.value)
                     },
                     usuario:{
                         idUsuario: localStorage.getItem("idUsuario")
                     } 

                }
            )
        })
            .then((res) => {
                console.log(res)


              
            })
            .catch((erro) => { console.error(erro) })
    })
})

