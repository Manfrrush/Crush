//Conciencia e Profundidade\\


function buscaCep(event) {
    event.preventDefault()


    let cep = document.getElementById("cep").value


    document.getElementById("resultado").innerHTML = "<p>Buscando <strong>CEP</strong><p>"

    /* Fetch faz requisição na api do viacep */


    fetch("https://viacep.com.br/ws/" + cep + "/json/")

        .then(resposta => resposta.json())

        .then(dados => { 
            if (dados.erro) {
                document.getElementById("resultado").innerHTML = "<p>CEP não encontrado</p>"
                return;
            }

            document.getElementById("resultado").innerHTML = `Rua ${dados.logradouro} Bairro${dados.bairro} Estado ${dados.estado}  
        })


    .catch (() => {
        document.getElementById("resultado").innerHTML = "<P>Sem conexão</P>"
})
}
