const calculadora = require('../src/calculadora')

describe('Testar uma calculadora', () => {
    test('somar 2 valores', () => {
        // dois positivos
        expect(calculadora.somar(1,1)).toBe(2)
        // um negativo e outro positivo negativo> 
        expect(calculadora.somar(-10,1)).toBeLessThan(0)
        // um negativo e outro positivo negativo< 
        expect(calculadora.somar(1,-10)).toBeLessThan(0)
        // um positivo e outro negativo negativo<
        expect(calculadora.somar(10,-1)).toBeGreaterThan(0)
        // dois negtivos
        expect(calculadora.somar(-10,-1)).toBeLessThan(0)
    })

    test('multiplicar 2 valores', () => {
        expect(calculadora.multiplicar(1,1)).toBe(1)
        expect(calculadora.multiplicar(1,0)).toBe(0)
    })
})