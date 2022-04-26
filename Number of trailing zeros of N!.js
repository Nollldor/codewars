/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 * ... * N
*/

function zeros (n) {
    let num = BigInt(n);
    function factorial(num){
        if(num===1n||num===0n){
            return BigInt(1);
        }else{
            return BigInt(num * factorial(num-1n));
        }
    }


    let nString = factorial(num).toString().split("").join("");
    console.log(nString);
    let counterOfZeros = 0;
    let nStringReverse = nString.split("").reverse().join('');
    for (let char of nStringReverse) {
        if(char==='0'){
            counterOfZeros++;
        }else{
            break;
        }
    }
    return counterOfZeros;
}

let num = 30;

console.log(zeros(num));