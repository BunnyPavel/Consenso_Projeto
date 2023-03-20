document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById('inputNome').value
        const email = document.getElementById('inputEmail').value
        const senha = document.getElementById('inputSenha').value
        const opcao = document.getElementById('inputOpcao').value

        await fetch("http://localhost:8080/usuario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    nome: nome, 
                    email: email,
                    senha: senha,
                    tipoUsuario: {
                        idTipoUsuario: opcao
                    }
                }
            )
        }).then(res => {
            alert("certo")
           location.href = "login.html"
        }).catch((erro) => { console.error(erro) })
    })
})

// Chamada API pelo JS + Adicionar @CrossOrigin(origins = "*") nas classes Controller