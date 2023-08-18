Faça um algoritmo em Português Estruturado que leia 10 números e mostre a soma e a média dos que forem maiores que o valor 50 e a soma e a média dos que forem menores que o valor 20.


programa { funcao inicio() {
inteiro contadorMaior50, 
contadorMenor20 real numero, 
somaMaior50, somaMenor20

    contadorMaior50 = 0
    contadorMenor20 = 0
    somaMaior50 = 0
    somaMenor20 = 0


    para(inteiro i = 1; i <= 10; i = i + 1) {
        escreva("Digite o ", i, "º número: ") 
        leia(numero)

        se(numero > 50) {
            somaMaior50 = somaMaior50 + numero contadorMaior50 = contadorMaior50 + 1
        } senao {
            se(numero < 20) {
                somaMenor20 = somaMenor20 + numero contadorMenor20 = contadorMenor20 + 1
            }
        }
    }
    escreva("\nSoma dos números maiores que 50: ", somaMaior50) 
    se(contadorMaior50 > 0) {
        escreva("\nMédia dos números maiores que 50: ", somaMaior50 / contadorMaior50)

    } senao {
        escreva("\nNenhum número maior que 50 foi digitado.")
    }

    escreva("\nSoma dos números menores que 20: ", somaMenor20) se(contadorMenor20 > 0) {
        escreva("\nMédia dos números menores que 20: ", somaMenor20 / contadorMenor20)
    } senao {
        escreva("\nNenhum número menor que 20 foi digitado.")
    }

}

}





media = soma / 6

escreva("\nSoma das notas: ", soma)

escreva("\nMédia das notas: ", media)

se(aprovados == 6) {
    escreva("\nAluno aprovado.")

} senao {

    se(exame > 0) {
        escreva("\nAluno em exame.")

    } senao {

        escreva("\nAluno reprovado.")

    }

}

    }

} 