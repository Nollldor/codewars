/*The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

    Your function productFib takes an integer (prod) and returns an array:

    [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

    If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

    [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.*/


function productFib(prod){

    //рекурсивная функция для вычисления Фибоначчи от N
    function fib(N){
        if(N>1){
            return fib(N - 1) + fib(N - 2);
        }else if(N===0){
            return 0;
        }else if(N===1){
            return 1;
        }
    }

    //начиная со второго ищем номер в последовательности, который соответсвует произведению
    let i=2;
    while (fib(i)*fib(i+1)<prod){
        i++;
    }

    //по найденному номеру проверяем можно ли число prod представить,
    //как произведение 2-х последовательных чисел фибоначчи
    if(fib(i)*fib(i+1)===prod){
        return [fib(i),fib(i+1),true];
    }else{
        return [fib(i),fib(i+1),false];
    }
}

console.log(productFib(4895));

//////////////////////////////////////////////

function productFib2(prod){
    //начальные числа в последовательности
    let [a, b] = [0, 1];
    //пока произведение не превышает prod, проходим по последовательности вперед
    while(a * b < prod) [a, b] = [b, a + b];
    //возвращаем два последних числа в последовательности и результат сравнения
    return [a, b, a * b === prod];
}