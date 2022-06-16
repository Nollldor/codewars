/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/


function XO(str) {
    return 0===str.split("").reduce((acc,el)=>{
        if(el==='x' || el==='X'){
            return ++acc
        }else if(el==='o' || el==='O'){
            return --acc
        }else{
            return acc
        }
    }, 0 )
}

console.log(XO("xxOo"))