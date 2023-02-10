/*
Кудайбергенова Жанылмырза;
Написать алгоритм переворота строки.
СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. Например: "123456789" -> "987654321
 */
function reverseStr(str){
    let a=""
    for (let i=0;i<str.length;i++){
        a+=str[(str.length-1)-i]
    }
    console.log(a)
}
reverseStr("123456789")