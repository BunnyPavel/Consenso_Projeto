document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById('inputEmail').value
        const senha = document.getElementById('inputSenha').value

      const dado =  await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    email: email,
                    senha: senha
                    
                }
            )
            
        })

        console.log(Response);
        const data = await dado.json();
        console.log(data)
        console.log(dado.status)

        if (dado.status == 202) {
            localStorage.setItem("token", data.idUsuario);
            if(data.tipoUsuario.idTipoUsuario === 2) {
                window.location.href = "MinhaAgendaPrestador.html"
            }
            else {
                window.location.href = "MeusServiçosCliente.html"
            }

        }

      //  if (data.tipoUsuario.idTipoUsuario === 2)
      //
        
            
    })
})