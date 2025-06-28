
// //Função para pegar o dado
// /**
//  * Função para salvar os dados digitados na input
//  * para o localStorage
//  */
// function saveDataToLocalStorage() {
//     const tarefa = document.querySelector("#tarefa").value;
//     localStorage.setItem("arquivo1", tarefa);
//     console.log(tarefa);
//   }







//   /**
//    * Função para exibir o dado salvo no localStorage
//    */
//   function showLocalStorageData() {
//     alert("O valor guardado é: " + localStorage.getItem("arquivo1"));
//   }

//   /**
//    * Função para limpar os dados salvos no localStorage
//    */
//   function clearLocalStorage() {
//     localStorage.removeItem("arquivo1");
//   }




function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nomeCompleto = form.querySelector('.nomeCompleto');
        const numeroTel = form.querySelector('.numeroTel');


        pessoas.push({
            nomeCompleto: nomeCompleto.value,
            numeroTel: numeroTel.value


        });

        console.log(pessoas);

        resultado.innerHTML += `<p>  Seu nome é:${nomeCompleto.value}<br> Seu contato é : ${numeroTel.value}<br> `;

        resultado.innerHTML += `<p>Em breve alguém vai entrar em contato,Obrigado!!</p>`

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


