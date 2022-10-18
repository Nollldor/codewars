function sumArray(array) {
    if(!Array.isArray(array)){
        return 0
    }
    let sortArray = array.sort((a, b) => a - b)
    let sum = 0
    for (let i = 1; i < sortArray.length - 1; i++) {
        sum += sortArray[i]
    }

    return sum
}

sumArray([1, 5, 2, 88, 13])
