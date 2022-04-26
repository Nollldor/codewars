/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 * ... * N
*/

function zeros (n) {

    function factorial(n){
        if(n===1||n===0){
            return 1;
        }else{
            return n * factorial(n-1);
        }
    }


    let nString = factorial(n).toString().split("").join("");
    console.log(nString);
    if (n>21) {
        let pointFlag = false;
        let eFlag = false;
        let reminderCounter = 0;
        let arrayOfZeros = [];

        for (let char of nString) {
            if (char === '.') {
                pointFlag = true;
                continue;
            }

            if (char === 'e') {
                eFlag = true;
                pointFlag = false;
                continue;
            }

            if (pointFlag) {
                reminderCounter++;
            }

            if (eFlag) {
                arrayOfZeros.push(char);
            }
        }
        arrayOfZeros.shift();
        let tenDegree = parseInt(arrayOfZeros.join(''));

        return tenDegree - reminderCounter;
    }else{
        let counterOfZeros = 0;
        let nStringReverse = nString.split("").reverse().join('');
        for (let char of nStringReverse) {
            if(char==='0'){
                counterOfZeros++;
            }else{
                break
            }
        }
        return counterOfZeros;
    }

}

let num = 24;

console.log(zeros(num));