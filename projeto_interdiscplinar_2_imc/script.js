var nome = document.getElementById('inputNome');
var idade = document.getElementById('inputIdade');
var peso = document.getElementById('inputPeso');
var altura = document.getElementById('inputAltura');
var btnCalcular = document.getElementById('btnCalcular');


btnCalcular.onclick = function mostrarResultado(){
    menu.style.display = "block";

    var resultado1 = document.getElementById('result1');
    var resultado2 = document.getElementById('result2');

    if(peso.value/(altura.value*altura.value) <= 18.5){
        resultado1.innerHTML = "IMC menor que 18,5 <br> Abaixo do peso";
        resultado2.innerHTML = nome.value + " seu IMC é de: " + peso.value/(altura.value*altura.value);
    }
    
        else if(peso.value/(altura.value*altura.value) > 18.5 && peso.value/(altura.value*altura.value) <= 24.9){
            resultado1.innerHTML = "IMC entre 18,5 e 24,9 <br> Peso normal";
            resultado2.innerHTML = nome.value + " seu IMC é de: " + peso.value/(altura.value*altura.value);
        }

        else if(peso.value/(altura.value*altura.value)> 25 && peso.value/(altura.value*altura.value) <= 29.9){
            resultado1.innerHTML = "IMC entre 25 e 29,9 <br> Sobrepeso";
            resultado2.innerHTML = nome.value + " seu IMC é de: " + peso.value/(altura.value*altura.value);
        }
        else if(peso.value/(altura.value*altura.value) >= 30){
            
            resultado1.innerHTML = "IMC acima de 30 <br> Obesidade";
            resultado2.innerHTML = nome.value + " seu IMC é de: " + peso.value/(altura.value*altura.value);
        }
}

/* fechar menu resultado */
var btnClose = document.getElementById('btnClose');
var menu = document.getElementsByClassName('menuResultado')[0];

btnClose.onclick = function hideElement() {
    menu.style.display = "none";

    peso.value = "";
    altura.value = "";
    nome.value = "";
    idade.value = "";
}
