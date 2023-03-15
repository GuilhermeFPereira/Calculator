function addCaracter(num){
   const valueDisplay = document.querySelector(".display").value 
   document.querySelector(".display").value = valueDisplay + num
}
function cleanScreen(){
    document.querySelector(".display").value = ""

}
function calc(){
    const valueDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valueDisplay) // eval = uma funcao nativa do JavaScript que ele sozinho faz os calculos
}
 function invertSign (){
    const valueDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = valueDisplay * -1

 }