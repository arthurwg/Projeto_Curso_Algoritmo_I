/* passou:= falso
 escreval("Digite o nome do aluno:")
 leia(nome)
 escreval("Digite a nota 01 do aluno:")
 leia(nota01)
 escreval("Digite a nota 02 do aluno:")
 leia(nota02)
 media := (nota01 + nota02) / 2
 se media >= 5 entao
 passou := verdadeiro
 fimse
 se (passou) && (media >= 5 || media <= 70) ENTAO
    escreval ("Aprovado!")
 senao
    escreval ("Reprovado!")
fimse*/

var  nota01, nota02, nome, passou;
passou = false

 nome = prompt ("Digite o nome do aluno:")
 nota01 = prompt ("Digite a nota 01 do aluno:")
 nota02 = prompt ("Digite a nota 02 do aluno:")

 media = (parseInt(nota01)+parseInt(nota02)) / 2;
 if (media >= 5)
 passou = true;

    if (passou)
    alert("Aprovado!")
 else
    alert("Reprovado!")     

