/* let condicao = true
let contador = 0

while (condicao) {
        contador++
        if (contador == 5)
            condicao = false
}
*/

let condicao = true
while(condicao === true){
    let idade = Number(prompt('Insira sua idade'))
    console.log (idade) //aqui vai colocar todas as idades no console
    if (idade<18){ //se a idade for menor que 18 vai sai no console a mensagem que é menor que 18
        console.log ('vc é menor de idade')
        condicao = false //aqui acaba, por que a condição virou false, ja que teve um menor de 18
        //ele so vai sair do while, quando tiver alguem menor de 18 anos
    }
}

console.log ('acabou o while')