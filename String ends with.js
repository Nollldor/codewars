/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

    solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/


str1 = 'abcde'
str2 = 'cde'

const solution = (str, ending) => ending === "" ? true : str.split("").slice(-ending.split("").length).join("") === ending


console.log(solution(str1, str2))


//best
function solution(str, ending){
    return str.endsWith(ending);
}