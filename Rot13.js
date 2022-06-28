/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
    ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13.
    If there are numbers or special characters included in the string, they should be returned as they are.
    Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

message = "Test"

function rot13(message){

    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const arrayMessage = message.split("")

    const arrayRot13 = []

    for (let i = 0; i < arrayMessage.length; i++){
        if(arr_EN.includes(arrayMessage[i])){
            const index = arr_EN.indexOf(arrayMessage[i])
            index+13>25 ? arrayRot13.push(arr_EN[index+13-26]) : arrayRot13.push(arr_EN[index+13])
        }else if(arr_en.includes(arrayMessage[i])) {
            const index = arr_en.indexOf(arrayMessage[i])
            index+13>25 ? arrayRot13.push(arr_en[index+13-26]) : arrayRot13.push(arr_en[index+13])
        }else{
            arrayRot13.push(arrayMessage[i])
        }
    }
    return arrayRot13.join("")
}