var usuario = localStorage.getItem("usuario")
var idUsuario = localStorage.getItem("token")
var totalAgendamentos = 0
console.log(idUsuario)

document.addEventListener("DOMContentLoaded", function() {
    
    console.log(idUsuario)
    getlistadeAgendamentosPorId()
   
    
  });
  

async function getlistadeAgendamentosPorId() {
    try {
        const rawResponse = await fetch(`http://localhost:8080/servico/usuario/`+ idUsuario, {
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
                  
                  
                  agendamentoPai.innerHTML += `<div id="${element.idServico}">
                  <div>
                  <div style="border-radius: 10px; margin-top: 15px; background-color:#D9F8FF; border: 3px solid #5A5A5A; width: auto;">
                  <ul style="padding-left: 12px; margin-bottom: 0px;" class="ul">
                   <label class="label">${element.nome}</label>
                   <a href="#" onclick="deletarAgendamento(${element.idServico})"><img class="svg" src = "/img/trash.svg" style="float: right;" /></a>
                   <a onclick="editarServico(${element.idServico})" href="EditarServiçoPrestador.html"><img class="svg" src = "/img/edit-button.svg" style="float: right;"/></a>

        
                  </ul>
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
        const rawResponse = await fetch(`http://localhost:8080/servico/${el}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        
        if( rawResponse.status == 202){
          let divPai = document.getElementById(el)
          divPai.remove()
          alert("Serviço Deletado!")
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

function editarServico(v){
    localStorage.setItem("idServico", v);
   }

console.log(localStorage.getItem("idServico"), "dasdasda")