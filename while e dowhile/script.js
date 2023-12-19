/* let condicao = true
let contador = 0

while (condicao) {
        contador++
        if (contador == 5)
            condicao = false
}
*/

/*let condicao = true
while(condicao === true){
    let idade = Number(prompt('Insira sua idade'))
    console.log (idade) //aqui vai colocar todas as idades no console
    if (idade<18){ //se a idade for menor que 18 vai sai no console a mensagem que é menor que 18
        console.log ('vc é menor de idade')
        condicao = false //aqui acaba, por que a condição virou false, ja que teve um menor de 18
        //ele so vai sair do while, quando tiver alguem menor de 18 anos
    }
}

console.log ('acabou o while')*/

/*let idade = 18
while (idade >= 18){ //enquando a idade for maior ou igual a 18
    idade = Number(prompt ('qual a sua idade'))
    console.log
}
console.log ('vc é menor de idade')*/

//se eu setar a idad como 17 ja, o while para
//se eu fizer com o dowhile, ele pergunta a idade uma vez ainda, e logo após para

let idade = 17

do {
        idade = Number(prompt ('qual a sua idade'))
        console.log (idade)
} while (idade >= 18)   

console.log ('vc é menor de idade')