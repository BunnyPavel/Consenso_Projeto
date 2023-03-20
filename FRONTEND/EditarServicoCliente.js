const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const idUser = localStorage.getItem("token");
  const dataInput = document.getElementById("data").value
  const data = new Date(dataInput).toLocaleDateString("pt-BR");
  const hora = document.getElementById("hora").value
  const servicos = document.getElementById("selAge").value
  console.log(servicos)
  console.log(data)
  console.log(hora)
 
  
  const rawResponse = fetch("http://localhost:8080/agendamento/${}", {
    method: "PUT",
    body: JSON.stringify({
        data : data,
        hora : hora,
        servicos : {idServico : servicos},
        usuario : {idUsuario : idUser}
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  console.log(rawResponse)
  if(rawResponse.status = 200){
    window.alert("Serviço Atualizado!")
    window.location.reload()
  }  
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
      .catch(error => console.error(error));

      

  });
