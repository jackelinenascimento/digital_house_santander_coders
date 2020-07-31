// Crie uma função que recebe um número e verifica se ele é par ou ímpar. 

function verificarParImpar(n){
    if(n%2 == 0){
        return "O número é par"
    } else {
        return "O número é impar"
    }
}

// Crie uma arrow function que receba um número e verifique se é primo.

const numeroPrimo = (n) => {
    let divisores = 0

    for(i=1; i<=n; i++){
        if(n%i == 0){
            divisores += 1
        }
    }

    if(divisores == 2){
        return "O número é primo"
    } else {
        return "O número não é primo"
    }
}

// Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback

function imprimirNumeros(callback){
        for(i=10; i>0; i--){
            console.log(i)
        }
        callback()

}

function saudacao(){
    console.log("Feliz Ano Novo!")
}



// Faça o mesmo utilizando Promise com concatenação de then

const numeros = new Promise(() => {
    for(i=10; i>0; i--){
        console.log(i)
    }
})

const saudar = new Promise(() => {
    console.log("Feliz Ano Novo")
})

numeros
    .then(function(res) {return console.log(res)})
    .then(function() {return saudar})
    .then(function(res) {return console.log(res)})


// Agora repita a função utilizando o método async/await

const asyncFunction = async () => {
    try {
        const num = await numeros;
        const sau = await saudar;

        console.log(num)
        console.log(sau)
    } 
    catch {
        console.log(err)
    }
}

asyncFunction()

// Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0], construa uma função para imprimir apenas as notas acima de 7

const notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0]

function notasMaiores(notas){
    for(i=0; i<notas.length; i++){
        if(notas[i]> 7){
            console.log(notas[i])
        }
    }
}

notasMaiores(notas)

// Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do produto e o seu respectivo preço, agora construa uma função que some todos os valores e te devolva o total.

const produtos = [
    {
        nome : "sabonete",
        preco : 1.50
    },
    {
        nome : "sabao",
        preco : 2
    },
    {
        nome : "tomate",
        preco : 5
    },
    {
        nome : "creme para o rosto",
        preco : 15.30
    }
]

const total = produtos.reduce((acumulado, produto) => {
    if (acumulado.preco) {
      return acumulado.preco + produto.preco;
    }
    return acumulado + produto.preco;
  }
)

console.log(total)

// Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do 9º terão aulas de física às quartas-feiras. Você deve criar uma função que receba um array de objetos contendo nome e série de cada aluno e atribua a sua respectiva disciplina da quarta-feira. (O array de alunos deve ser criado como você desejar contanto que contenha pelo menos 5 alunos).

const alunos = [
    {
        nome : "Antonio",
        serie : 8,
    },
    {
        nome : "Ana",
        serie : 9,
    },
    {
        nome : "Betina",
        serie : 8,
    },
    {
        nome : "Cris",
        serie : 8,
    },
    {
        nome : "Juli",
        serie : 9,
    }
]

alunos.map(function(aluno){
    if(aluno.serie == 8){
        aluno.materia = "historia"
    } 
    if(aluno.serie == 9){
        aluno.materia = "fisica"
    }
})

console.log(alunos)

