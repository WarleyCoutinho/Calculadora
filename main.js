function inserirValor(num) {
document.querySelector('.display').value += num; 

}
function equal() {
  if (document.querySelector('.display').value == ''){

  }else{
    document.querySelector('.display').value = eval(document.querySelector('.display').value)
  }
}
function apagarTudo() {
  document.querySelector('.display').value = ''
}
function apagar() {
  const display = document.querySelector('.display').value
  document.querySelector('.display').value = display.substring(0, display.length -1)
  
}