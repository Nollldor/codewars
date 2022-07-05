/*
For any given linear sequence, calculate the function [f(x)] and return it as a string.

    Assumptions for this kata are:

    the sequence argument will always contain 5 values equal to f(0) - f(4).
    the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.
Examples (input -> output):
[0, 1, 2, 3, 4]   -> "f(x) = x"
    [0, 3, 6, 9, 12]  -> "f(x) = 3x"
    [1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
    [0, 0, 1, 1, 1]   -> "Non-linear sequence"*/

let arr1 = [0, 1, 2, 3, 4]
let arr2 = [0, 3, 6, 9, 12]
let arr3 = [1, 4, 7, 10, 13]
let arr4 = [0, 0, 1, 1, 1]

function getFunction(sequence) {
    if(sequence.length<=1) return "Non-linear sequence"

    const a = sequence[1] - sequence[0]
    const b = sequence[0]

    for (let i = 2; i < sequence.length; i++) {
        if(sequence[i]-sequence[i-1]!==a) return "Non-linear sequence"
    }
    let result = 'f(x) = '
    if(a===1) result += `x`
    else if(a===-1) result += `-x`
    else if(a!==0) result += `${a}x`

    if(a!==0){
        if(b>0) return result + ` + ${b}`
        else if(b===0) return result
        else if (b<0) return result + ` - ${Math.abs(b)}`
    }else{
        return result + `${b}`
    }

}