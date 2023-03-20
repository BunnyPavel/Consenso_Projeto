
document.addEventListener('DOMContentLoaded', () => {
    const login = document.getElementById("login");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    login.addEventListener("submit", async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/users/login/" + email.value + "/" + senha.value)
        .then(res => {
            
            console.log(res.json)
             return res.json();
        }).then(saida => {
            console.log(saida)
            if(saida != null){
                localStorage.setItem("idUsuario", saida.idUsuario);
                alert("Bem vindo " + saida.nome);
                if(saida.tipoUsuario.idTipoUsuario == 1){
                    window.location.replace("index.html")
                }else{
                    window.location.replace("MeusServicos.html")
                }
                
            }
        }).catch((erro) => { console.error(erro) })

        })

})


    


