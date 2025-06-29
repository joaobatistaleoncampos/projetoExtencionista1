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


