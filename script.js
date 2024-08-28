const display = document.querySelector('.display')
function addCaracter(carac){
    const valorInput = display.value
    console.log('valor atual dos input: '+valorInput)
    console.log('carac a adicionar: '+ carac)

    if (valorInput.length > 0) {
        const ultimoCaractere = valorInput.charAt(valorInput.length -1);
        console.log('Último caractere:', ultimoCaractere);

        if (['+', '-', '*', '/'].includes(ultimoCaractere) && ['+', '-', '*', '/'].includes(carac)) {
            console.log('Dois sinais consecutivos detectados. Caractere não adicionado.');
            return;
        }
    }
    display.value = valorInput + carac
    console.log('novo valor do input: '+ display.value)
}
function apagar(){
    display.value =''
}
function calcular(){
    display.value = eval(display.value)

}
function inverter(){
    display.value *= -1
}