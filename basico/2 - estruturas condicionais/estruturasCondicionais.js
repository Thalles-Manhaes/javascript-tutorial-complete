//condicionais

let carrro = 'preto'

if(carrro === 'vermelho'){
    console.log('carro ok, entrar pela garagem da frente')
}else if(carrro === 'preto'){
    console.log('carro não ok, entrada pela garagem de trás')
}else{
    console.log('carro nao corresponde ao padrao.')
}


//switch case

const disciplina = "Python";

switch(disciplina) {
    case "Excel":
        console.log("Esse é um aluno impressionador de Excel da Hashtag!");
    case "Power BI":
        console.log("Esse é um aluno impressionador de Power BI da Hashtag!");
    case "PowerPoint":
        console.log("Esse é um aluno impressionador de PowerPoint da Hashtag!");
    case "Python":
        console.log("Esse é um aluno impressionador de Python da Hashtag!");
    case "Html/CSS":
        console.log("Esse é um aluno impressionador de Html/CSS da Hashtag!");
    case "VBA":
        console.log("Esse é um aluno impressionador de VBA da Hashtag!");
    case "SQL":
        console.log("Esse é um aluno impressionador de SQL da Hashtag!");
    case "JavaScript":
        console.log("Esse é um aluno impressionador de JavaScript da Hashtag!");
}