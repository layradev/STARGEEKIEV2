const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
    let logado;
    dados.forEach(elemento => {
        if (elemento.email === email.value && elemento.senha === senha.value){
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    email : email.value,
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados));
            evento.preventDefault();
            mensagem.innerHTML = "logado";
            logado = true;
            window.location.assign("catalogo.html");
            return true;
    
        } else {
            evento.preventDefault();
            mensagem.innerHTML = "email ou senha inválido";
        }});
           
}