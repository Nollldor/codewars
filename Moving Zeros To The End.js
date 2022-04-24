//Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

function moveZeros(arr) {
    //счетчик 0
    let countOfZeros = 0;
    //обход массива
    for(let i=0;i<arr.length; i++) {
        //если элемент 0
        if (arr[i] === 0) {
            countOfZeros++;
            //удаление 0 элемента и сдвиг индекса влево
            arr.splice(i,1);
            i--;
        }
    }
    //Array(countOfZeros).fill(0); создаем массив длины countOfZeros и заполняем нулями
    return arr.concat(Array(countOfZeros).fill(0));
}

let inputArray = [1,0,0,1,1,0];
console.log(moveZeros(inputArray));

/////////////////////////////////////////////////////////////////////////////////////
//другой способ
let inputArray2 = [1,0,0,1,1,0];
function moveZeros2(arr){
    //создаем массив нулей из старого
    const arrZeros = arr.filter(n => n === 0);
    //создаем массив ненулей из старого
    const arrWithoutZeros = arr.filter(n => n !== 0);
    //возвращаем объединенный массив ненулей и нулей
    return arrWithoutZeros.concat(arrZeros);
}
console.log(moveZeros2(inputArray2));