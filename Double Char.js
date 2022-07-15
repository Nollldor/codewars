/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.*/


/*function doubleChar(str) {
    const result = []
    for (let i = 0; i < str.length; i++) {
        result.push(str[i])
        result.push(str[i])
    }
    return result.join("")
}*/


function doubleChar(str) {
    return str.split("").map(el=>el+el).join("")
}