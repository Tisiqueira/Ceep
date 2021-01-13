const BotaoConcluir = () => {

    const botaoConcluir = document.createElement('button');
    
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'Concluir';


    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir;

}


const concluirTarefa =  (evento) => {

    const botaConclui = evento.target;
    const tarefaCompleta = botaConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
    
}

export default BotaoConcluir;