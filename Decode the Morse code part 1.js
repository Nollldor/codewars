decodeMorse = function(morseCode){

    //dictionary of Morse code for help
    /*const MORSE_CODE = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
    }*/

    //decode char
    let decodeMorseCode = (char) => MORSE_CODE[char];
    //decode word
    let decodeMorseCodeWord = (word) => word.split(" ").map(decodeMorseCode).join("");
    //decode phrase
    //trim() to delete spaces in begin and end of string
    return morseCode.trim().split("   ").map(decodeMorseCodeWord).join(" ");
}



