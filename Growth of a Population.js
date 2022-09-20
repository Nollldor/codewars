function nbYear(p0, percent, aug, p) {
    let year = 0
    while (p0 < p) {
        ++year
        p0 = Math.floor(p0 * (1 + percent / 100) + aug)
    }
    return year
}

console.log(nbYear(1500000, 0.25, 1000, 2000000))