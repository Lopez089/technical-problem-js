const sum = require('./index')

describe.skip('sum', () => {
    test('se pasa ningun producto para sumar', () => {

        const result = sum()

        expect(result).toBe(0)
    })
    test("Solo pasa un operador, Sale un mensaje de erro 'Introduce dos operadores'", () => {

        const result = sum(1)

        expect(result).toBe('Introduce dos operadores')
    })
    test('se suma 3 + 30, el resultado es 33', () => {

        const result = sum(3, 30)

        expect(result).toBe(33)
    })
})