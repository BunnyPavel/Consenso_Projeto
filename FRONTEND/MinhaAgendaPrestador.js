var usuario = localStorage.getItem("usuario")
var idUsuario = localStorage.getItem("token")
var totalAgendamentos = 0
console.log(idUsuario)

document.addEventListener("DOMContentLoaded", function() {
    // code to be executed when the DOM is ready
    console.log(idUsuario)
    getAgendamentosPorId()
   
    
  });
  

async function getAgendamentosPorId() {
    try {
        const rawResponse = await fetch(`http://localhost:8080/agendamento/usuario/${idUsuario}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        const data = await rawResponse.json();
        console.log(data)
        console.log(rawResponse.status)
        if(rawResponse.status == 200){
            if (data.length == 0)
                {
                
                window.alert("Não existe nenhum agendamento")

            
            }
            else{
                agendamentoPai = document.getElementById("agendamento-pai")
                for (let index = 0; index < data.length; index++) {
                  const element = data[index];
                  totalAgendamentos++
                  
                  
                  agendamentoPai.innerHTML += `<div id="${element.idAgendamento}">
                <div>
                <div style="border-radius: 10px; margin-top: 15px; background-color:#D9F8FF; border: 3px solid #5A5A5A; width: 300px;">
                <ul style="padding-left: 12px; margin-bottom: 0px;" class="ul">
                 <label class="label" style="margin-right: 130px;" >${element.servicos.nome}</label>

                 <a href="/MeusAgendamentosCliente.html?id=${element.idAgendamento}"><img class="svg" src = "/img/edit-button.svg"/></a>

                 <a href="#" onclick="deletarAgendamento(${element.idAgendamento})"><img class="svg" src = "/img/trash.svg"/></a>
      
                 <label class="label">Cliente: <label>${element.usuario.nome} </label></label><br>
                 <label class="label">Dia:<label>${element.data} </label> </label><br>
                 <label class="label">Horário:<label>${element?.hora[0]}:${element?.hora[1]}</label> </label>
                </ul>
              </div>
            
                </div>
              </div>`
              
                  
                }
            }
         
          
          

        }
          
        
    } catch (error) {
        console.error(error);
    }
  }


  
  
  async function deletarAgendamento(el) {
    console.log(el)
    try {
        const rawResponse = await fetch(`http://localhost:8080/agendamento/${el}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        
        if( rawResponse.status == 202){
          let divPai = document.getElementById(el)
          divPai.remove()
          $("#sucessoModal").modal("show");
          totalAgendamentos--
          if(totalAgendamentos == 0){ 
            document.getElementById("nenhum-agendamento").classList.remove("d-none")
            let text = document.getElementById("titulo-agendamento")
            text.classList.add("d-none")

          }
        }
        if(rawResponse.status == 400){
          $("#falhaModal").modal("show");
        }

        
    } catch (error) {
        console.error(error);
    }
    
  }