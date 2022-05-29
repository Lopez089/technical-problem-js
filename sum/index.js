module.exports = function sum(a, b) {

    if (a === undefined & b === undefined) {
        return 0
    }

    if (a === undefined | b === undefined) {
        return 'Introduce dos operadores'
    }

    return a + b
}
