function addCaracter(carac){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput + carac
}
function apagar(){
    document.querySelector('.display').value =''
}
function calcular(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorInput)

}
function inverter(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput * -1  
}