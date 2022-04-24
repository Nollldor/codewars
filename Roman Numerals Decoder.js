//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
// You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in
// descending order.

function solution (roman) {
    //sum сумма в арабских числах
    let sum = 0;
    //объект - словарь преобразования римских->арабских чисел
    let romanNumeral = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    //цикл по входной строке с римскими числами
    for (let i=0; i<roman.length; i++){
        //проверка, что текущее число больше, чем следующее. Таким образом решаем прибавить число или вычесть
        // (4,9,40,90,400,900..) это не все варианты
        //roman[i] это текущая римская цифра
        //romanNumeral[roman[i]] извлекаем значение из поля обьекта
        if(romanNumeral[roman[i]] < romanNumeral[roman[i+1]]){
            sum -= romanNumeral[roman[i]];
        }else{
            sum += romanNumeral[roman[i]];
        }

    }
    return sum;
}

let roman = 'CDXCIX';

console.log(solution(roman));