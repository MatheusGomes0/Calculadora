
function calcular(){
    const valor1 = Number(document.getElementById('valor1').value)
    const valor2 = Number(document.getElementById('valor2').value)
    let departamento = document.getElementById('departamento').value
    let resultado = document.getElementById('resultado').value
    
    
    if(departamento == 1){
         resultado = valor1 + valor2;
     } else if (departamento == 2){
          resultado = valor1 - valor2;
    } else if (departamento == 3){
         resultado = valor1/valor2;
    } else if (departamento == 4){
         resultado = valor1*valor2;
    } 
   
    document.getElementById('resultado').value =  resultado;
}



const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click",calcular);
