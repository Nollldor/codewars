/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"*/

let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow(numbers))