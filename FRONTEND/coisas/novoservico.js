if(!localStorage.getItem("idUsuario")){
    window.location.replace("Login.html")
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formulario");
    const nome = document.getElementById("nome")
    const descricao = document.getElementById("descricao")

    form.addEventListener("submit", async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/servicos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
               nome: nome.value,
               descricao: descricao.value,
               usuario: {
                idUsuario: localStorage.getItem("idUsuario")
            } 
                }
               
            )
        })
        .then(res => {
            console.log(res)
        }).catch((erro) => { console.error(erro) })

        })

})