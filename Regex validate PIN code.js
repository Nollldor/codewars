const pinExample = '-1.234'

function validatePIN(pin) {
    let check = true
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    if (pin.length != 4 && pin.length != 6) {
        check = false
    }
    let pinArr = pin.split("")
    for (let i = 0; i < pinArr.length; i++) {
        if (!nums.includes(pinArr[i])) check = false
    }


    return check
}

console.log(validatePIN(pinExample))