/*
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

    [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#,
C, C++ and as an array of arrays in other languages.
*/

function sumOfDivided(lst) {


    //checking number is prime
    let isPrime = function(number){
        for(let i=2; i<=Math.trunc(number/2); i++){
            if (!(number % i)){
                return false;
            }
        }
        return true;
    }

//get prime factors for number
    let getPrimeFactors = function(number){
        let primeFactors = [];
        for(let i=2; i<=Math.abs(number); i++){
            if ((number % i === 0) && (isPrime(i))){
                primeFactors.push(i);
            }
        }
        return primeFactors;
    }

//get array of all prime factors for numbers from lst
//sorting this array and delete duplicates
    let getAllUnicFactors = function (){
        let allFactors = [];

        for (let number of lst){
            let factors = getPrimeFactors(number);
            allFactors.push(...factors);

        }
        allFactors.sort();

//unic array
        allFactors = allFactors.filter(function(item, pos) {
            return allFactors.indexOf(item) === pos;
        })

        return allFactors;
    }

    let allUnicFactors = getAllUnicFactors();

    let resultArray = [];

//making resultArray in format we needed
    for(let factor of allUnicFactors){
        let sum = 0;
        for(let number of lst){
            if (!(number % factor)){
                sum +=number;
            }
        }

        resultArray.push([factor,sum]);
    }


    //sort resultArray by factors
    resultArray = resultArray.sort(function (a,b){
        if(a[0]>b[0]){
            return 1;
        }
        if(a[0]<b[0]){
            return -1;
        }
        return 0;
    })
    return resultArray;
}

let lst = [ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ];


console.log(sumOfDivided(lst));



