if(!localStorage.getItem("idUsuario")){
    window.location.replace("Login.html")
}
document.addEventListener('DOMContentLoaded', () => {
    const agendar = document.getElementById("agendar");
    const servico = document.getElementById("servico")
    const data = document.getElementById("data")
    const hora = document.getElementById("hora")

    agendar.addEventListener("submit", async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/agendamentos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
               data: data.value,
               hora: hora.value,
               servico: {
                idServico: parseInt(servico.value)
                },
                usuario:{
                    idUsuario: localStorage.getItem("idUsuario")
                } 
            })
        })
        .then(res => {
            console.log(res)
        }).catch((erro) => { console.error(erro) })

        })

})