const buttons = document.querySelectorAll('.button__botao');
const texts = document.querySelectorAll('.div__titulo');
const contadores = document.querySelectorAll('.div__contador');

// Loop para capturar cliques
buttons.forEach(button => button.onclick = (clicked) => {
    const buttonIndex = getButtonIndex(button);

    // Removendo sessão ativa
    removeActives();

    // Adicionando sessão ativa
    addActive(buttonIndex);
}); 

const tempo1 = new Date("2024-07-01T01:00:15");
const tempo2 = new Date("2024-07-31T01:00:30");
const tempo3 = new Date("2024-08-30T01:00:45");
const tempo4 = new Date("2024-09-29T01:00:00");
const tempos = [tempo1, tempo2, tempo3, tempo4];

// ? Funções
// Remover todas abas ativas
function removeActives() {
    buttons.forEach(buttonDisable => buttonDisable.classList.remove('ativo'));
    texts.forEach(textDisable => textDisable.classList.remove('ativo')); 
}

// Abrir a aba clicada
function addActive(index) {
    buttons[index].classList.add('ativo');
    texts[index].classList.add('ativo'); 
}

// Buscar index do botão clicado
function getButtonIndex(button) {
    return [...buttons].findIndex(f => f.innerText === button.innerText);
}

// Calcular tempo restante
function calculateTime(time) {
    const tempoAtual = new Date();
    const tempoFinal = time - tempoAtual;

    // Convertendo tempo
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Ajustando conversão
    segundos %= 60;
    minutos %= 60;
    horas %= 24
    if (tempoFinal > 0) return [dias.toString().padStart(2, '0'), horas.toString().padStart(2, '0'), minutos.toString().padStart(2, '0'), segundos.toString().padStart(2, '0')];
    else return [0, 0, 0, 0]; 
}

// Atualizar cronômetro por segundo
setInterval(() => {
    for (let countX = 0; countX < 4; countX++) {
        document.getElementById(`dias${countX}`).textContent = calculateTime(tempos[countX])[0];
        document.getElementById(`horas${countX}`).textContent = calculateTime(tempos[countX])[1];
        document.getElementById(`mins${countX}`).textContent = calculateTime(tempos[countX])[2];
        document.getElementById(`segs${countX}`).textContent = calculateTime(tempos[countX])[3];
    }
}, 1000);