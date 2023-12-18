//código -> incremento -> condição

//exemplo de loop
/*for (let i = 0; i < 5; i++){
    console.log(i) // = 0, 1, 2, 3, 4
}*/


/*for (let contador = 0; contador <= 5; contador++){
    console.log(contador) // = 0, 1, 2, 3, 4, 5
}*/

//tabuada

let tabuada = Number(prompt('escolha a tabuada que deseja.'))

for (let contador = 1; contador <= 10; contador++){
    console.log(`${tabuada} x ${contador} = ${tabuada*contador}`)
}

//ele vai multiplicar a variavel tabuada com a variavel contador, q é de 1 a 10