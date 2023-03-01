function calcular() {
    const kg = parseFloat(document.getElementById("kg").value);
    const alt = parseFloat(document.getElementById("alt").value);
    const result = document.getElementById("resultado");
    const classi = document.getElementById("classification");
    const explication = document.getElementById("exe");
    const texto_ideal = "O peso ideal é um termo que se refere ao peso considerado saudável para uma pessoa com base em sua altura, idade, sexo e estrutura corporal. Manter um peso saudável é importante para prevenir doenças crônicas, como diabetes, hipertensão arterial e doenças cardíacas, além de melhorar a qualidade de vida em geral. Para determinar o peso ideal, é comum usar o índice de massa corporal (IMC), que é uma medida da relação entre o peso e a altura da pessoa. O IMC é calculado dividindo o peso em quilogramas pela altura em metros ao quadrado. Um IMC saudável fica entre 18,5 e 24,9. Um IMC abaixo de 18,5 indica baixo peso, enquanto um IMC acima de 25 indica sobrepeso ou obesidade.";
    const texto_ab = "O abaixo do peso é uma condição em que o índice de massa corporal (IMC) de uma pessoa está abaixo do valor considerado saudável. O IMC é uma medida que relaciona o peso e a altura de uma pessoa e é frequentemente usada para determinar se alguém está dentro de um peso saudável. Algumas das causas comuns de estar abaixo do peso incluem a falta de apetite, problemas de saúde que afetam a absorção de nutrientes, atividade física intensa ou excesso de estresse. As pessoas que estão abaixo do peso podem apresentar sintomas como cansaço, fadiga, falta de energia, pele seca e desnutrição.";
    const texto_ac = "O acima do peso é uma condição em que o índice de massa corporal (IMC) de uma pessoa está acima do valor considerado saudável. O IMC é uma medida que relaciona o peso e a altura de uma pessoa e é frequentemente usada para determinar se alguém está dentro de um peso saudável. Algumas das causas comuns de estar acima do peso incluem uma dieta pouco saudável, falta de atividade física, estresse, e alguns problemas de saúde como problemas hormonais, doenças metabólicas, e outros. Pessoas que estão acima do peso podem apresentar sintomas como fadiga, falta de energia, dificuldade para se mover, e outros problemas de saúde.";
    const texto_ob1 = "A obesidade grau I é uma condição em que o índice de massa corporal (IMC) de uma pessoa está acima do valor considerado saudável. O IMC é uma medida que relaciona o peso e a altura de uma pessoa e é frequentemente usada para determinar se alguém está dentro de um peso saudável. A obesidade grau I é a forma mais leve de obesidade, mas ainda assim pode apresentar riscos significativos para a saúde, incluindo pressão alta, diabetes tipo 2, doenças cardiovasculares e outros problemas de saúde.";
    const texto_ob2 = "A obesidade grau II é uma condição em que o índice de massa corporal (IMC) de uma pessoa está significativamente acima do valor considerado saudável. O IMC é uma medida que relaciona o peso e a altura de uma pessoa e é frequentemente usada para determinar se alguém está dentro de um peso saudável. A obesidade grau II apresenta riscos significativos para a saúde, incluindo pressão alta, diabetes tipo 2, doenças cardiovasculares, problemas respiratórios, apneia do sono e outros problemas de saúde. É uma condição que deve ser tratada com seriedade.";
    const texto_ob3 = "A obesidade grau III, também conhecida como obesidade mórbida, é uma condição em que o índice de massa corporal (IMC) de uma pessoa está muito acima do valor considerado saudável. O IMC é uma medida que relaciona o peso e a altura de uma pessoa e é frequentemente usada para determinar se alguém está dentro de um peso saudável. A obesidade grau III apresenta riscos graves e imediatos para a saúde, incluindo pressão alta, diabetes tipo 2, doenças cardiovasculares, problemas respiratórios, apneia do sono, problemas nas articulações, problemas de fertilidade, aumento do risco de câncer e outras complicações de saúde. É uma condição que requer atenção médica imediata.";
    
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
        explication.innerText = texto_ab;
    } else if (imc < 25) {
        classi.classList.add("green");
        classi.innerText = "Peso Ideal";
        explication.innerText = texto_ideal;
    } else if (imc < 30) {
        classi.classList.add("yelow");
        classi.innerText = "Acima do peso";
        explication.innerText = texto_ac;
    } else if (imc < 35) {
        classi.classList.add("orange");
        classi.innerText = "Obesidade Grau I";
        explication.innerText = texto_ob1;
    } else if (imc < 40) {
        classi.classList.add("red");
        classi.innerText = "Obsidade Grau II";
        explication.innerText = texto_ob2;
    } else {
        classi.innerText = "Obesidade Grau III(Grave)";
        explication.innerText = texto_ob3;
    }
    
}
