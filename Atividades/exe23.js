/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function mediaNotas(codigoAluno, n1,n2,n3){
    let maior1 = 0
    let maior2 = 0
    let maior3 = 0
    let mediaPond = 0
    if(n1>n2 && n1>n3){
        maior1 = n1
        mediaPond = (maior1*4+n2*3+n3*3)/10   
    }
    else if(n2>n3 && n2>n1){
        maior2 = n2
        mediaPond = (maior2*4+n3*3+n1*3)/10
    }
    else{
        maior3 = n3
        mediaPond = (maior3*4+n2*3+n1*3)/10
    }
    if(mediaPond >= 5){
        console.log("APROVADO! O aluno número " + codigoAluno + " com as notas: " + n1 + "," + n2 + "," + n3 + 
        ". Teve a média de " + mediaPond + " e foi APROVADO!")
    }
    else{
        console.log("O aluno número " + codigoAluno + " com as notas: " + n1 + "," + n2 + "," + n3 + 
        ". Teve a média de " + mediaPond + " e foi REPROVADO!")
    }
}   

mediaNotas(21,3,4,4)