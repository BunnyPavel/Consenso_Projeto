const form = document.getElementById("form-signin")
const email = document.getElementById("inputEmail")
const senha = document.getElementById("inputSenha")


form.addEventListener("login", (e) => {
    e.preventDefault()
    validarEntradas(email, senha)
})

function validarEntradas(e, s) {
    const emailValue = String(e.value)
    const senhaValue = String(s.value)



    if (emailValue == "" || emailValue == null) {
        email.className = "form-control is-invalid"
        console.log("E-mail é um campo obrigatório")
    } else if (validarEmail(emailValue) === false) {
        console.log("Formato de email inválido")
    } else if (senhaValue === "" || senhaValue == null) {
        console.log("Senha é um campo obrigatório")
    } else if (senhaValue.length < 8) {
        console.log("A senha deve ter no mínimo 6 caracteres.")
    } else {
        console.log("Cadastro realizado com sucesso")
    }
}

function validarEmail(ev) {
    let re = /\S+@\S+\.\S+/
    return re.test(ev)
}