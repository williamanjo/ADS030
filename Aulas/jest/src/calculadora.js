const somar = (a, b) => {
    return a + b
}

const multiplicar = (a, b) => {
    return a * b
} 
const nota = (c,b) =>{
   
    a = ( c + b) / 2
    if(a >= 9 && a <= 10){return "SS – Superior"}
    if(a >= 7 && a <= 8.9){return "MS – Médio Superior"}
    if(a >= 5 && a <= 6.9){return "MM – Médio"}
    if(a >= 3 && a <= 4.9){return "MI – Médio Inferior"}  
    if(a >= 0.1 && a <= 2.9){return "II – Inferior"} 
    if(a == 0.0 ){return "SR – Sem rendimento"}
}

module.exports = { somar, multiplicar, nota }