// declarando variavéis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//solicitando inf dos usurarios e atribuindo aos valores das variaves
nome = prompt ('Digite seu nome: ')
idade = parseInt(prompt ('Digite sua idade: '))
altura = parseFloat(prompt ('DIgite sua altura: '))
peso = parseInt(prompt ('Digite seu peso: '))

// calculando ano que a pessoa nasceu e imc
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc =  peso / (altura * altura)

// exibindo as informacoes
console.log('Olá' + nome +', voce tem' + idade + 'anos, que nasceu' + anoNasc + ' , tem' + altura + 'de altura, pesa' + peso + 'kg e seu IMC é ' + imc +'kg/ m²' )

