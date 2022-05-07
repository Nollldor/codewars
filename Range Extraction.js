/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash,
'-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless
it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted
 string in the range format.
 */

function solution(array){
    // TODO: complete solution
    let flag = false;
    let resultString = "";

    let resultArray = [array[0]];
    for (let i=1; i<array.length; i++){
        //case of sequence in array begins
        if((array[1]-array[0]===1)&&(array[2]-array[1])&&(i===1)){
            flag = true;
        }
        //not sequence
        if(!flag){
            resultArray.push(array[i]);
        }
        //rule for - adding
        if (((array[i+1]-array[i]===1)&&(array[i+2]-array[i+1]===1))||((array[i+1]-array[i]===1)&&(flag))){
            flag=true;
            if(resultArray[resultArray.length-1]!=="-"){
                resultArray.push("-");
            }
        }else if((array[i]-array[i-1]===1)&&(flag)){
            resultArray.push(array[i]);
            flag = false;
        }else {
            flag = false;
        }
    }
    //generate answer and ",-,"=>"-"
    resultString = resultArray.join(",").split(",-,").join("-");
    return resultString;
}

//best practice with reduce

solution = (list)=>list.reduce((acc,curr,i) => {
    if (i==0) return curr.toString();
    if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
    if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
    return acc+","+curr;
});