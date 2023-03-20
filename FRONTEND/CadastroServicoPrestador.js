
  
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const idUsuario = localStorage.getItem("token");
    console.log(idUsuario)
    const textarea = document.getElementById("textarea").value;
    const nome = document.getElementById("nome").value;

    console.log(textarea, nome)
 
  const dados = fetch("http://localhost:8080/servico", {
    method: "POST",
    body: JSON.stringify({
      nome: nome,
      descricao: textarea,
      usuario:{
        idUsuario: idUsuario}
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    console.log(response)
    if(response.ok){
      window.alert("Serviço adicionado!")
      window.location.href="MeusServiçosPrestador.html"
    }  
  })
 
});
document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("selAge");
    fetch("http://localhost:8080/servico")
      .then(response => response.json())
      .then(services => {
        services.forEach(function(service) {
          const option = document.createElement("option");
          option.value = service.idServico;
          option.innerText = service.nome;
          select.appendChild(option);
        });
      })
      

      

  });
