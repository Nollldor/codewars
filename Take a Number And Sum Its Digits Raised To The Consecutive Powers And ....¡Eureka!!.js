function sumDigPow(a, b) {
    let resultArr = []
    const sumItsDigits = (num) => {
        const numArr = String(num).split("")
        let n = 1
        return numArr.reduce((acc, el) => {
            n += 1
            return +acc + Math.pow(+el, n)
        })
    }

    for (let i = a; i <= b; i++) {
        if (i === +sumItsDigits(i)){
            resultArr.push(i)
        }
    }
    return resultArr
}

console.log(sumDigPow(1,100))

