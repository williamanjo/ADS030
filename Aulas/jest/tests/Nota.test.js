const calculadora = require('../src/calculadora')

describe('testando notas', () => {
    test('valores corretos', () => {
        // nota 9 – 10 SS – Superior
        expect(calculadora.nota(9,9)).toBe("SS – Superior")
        // nota 7 – 8,9 MS – Médio Superior
        expect(calculadora.nota(8,8)).toBe("MS – Médio Superior")
        // nota 5 – 6,9 MM – Médio
        expect(calculadora.nota(5,5)).toBe("MM – Médio")
        // nota 3 – 4,9 MI – Médio Inferior
        expect(calculadora.nota(3,3)).toBe("MI – Médio Inferior")
        // nota 0,1 – 2,9 II – Inferior
        expect(calculadora.nota(0.1,0.2)).toBe("II – Inferior")
        // nota 0,0 SR – Sem rendimento
        expect(calculadora.nota(0,0)).toBe("SR – Sem rendimento")

        // valor errado 
        expect(calculadora.nota(8.2,5)).toBe("MM – Médio")
        
    })
    
})