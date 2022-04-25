function add(a, b) {
    //first number in reverse array
    let arrayOfA = a.split("").reverse();
    //second number in reverse array
    let arrayOfB = b.split("").reverse();

    //next digit rest
    let rest = 0;

    //current string of two digits
    let currentChar = '0';

    let resultArray = [];


    for(let i=0; i<Math.max(arrayOfA.length, arrayOfB.length); i++){
        //second sign of currentChar to result array
        //first sign of sum to next operation(rest variable)
        currentChar = ((Number(arrayOfA[i])||0) + (Number(arrayOfB[i])||0) + rest).toString();
        if(currentChar.length>1){
            resultArray.push(currentChar[1]);
            rest = Number(currentChar[0]);
        }else{
            resultArray.push(currentChar[0]);
            rest = 0;
        }
    }

    if (rest!==0){
        resultArray.push(rest.toString());
    }

    //result array to number in string format
    return resultArray.reverse().join('');
}

let string1 = '123';

console.log(add(string1,'123'));
console.log(string1[1]);