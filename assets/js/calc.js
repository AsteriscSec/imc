function calcular() {
    const kg = parseFloat(document.getElementById("kg").value);
    const alt = parseFloat(document.getElementById("alt").value);
    const result = document.getElementById("resultado");
    const classi = document.getElementById("classification");
    
    if (isNaN(kg) || isNaN(alt) || kg <= 0 || alt <= 0) {
        result.innerText = "Valores inválidos";
        classi.innerText = "";
        return;
    }

    const imc = kg / (alt * alt);
    result.innerText = imc.toFixed(2);
    if (imc < 18.5) {
        classi.classList.add("blue");
        classi.innerText = "Abaixo do peso";
    
    } else if (imc < 25) {
        classi.classList.add("green");
        classi.innerText = "Peso Ideal";
        
    } else if (imc < 30) {
        classi.classList.add("yelow");
        classi.innerText = "Acima do peso";
       
    } else if (imc < 35) {
        classi.classList.add("orange");
        classi.innerText = "Obesidade Grau I";
      
    } else if (imc < 40) {
        classi.classList.add("red");
        classi.innerText = "Obsidade Grau II";
        
    } else {
        classi.innerText = "Obesidade Grau III(Grave)";
    }
    
}
