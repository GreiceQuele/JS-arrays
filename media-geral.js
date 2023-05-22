const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

    const media = somaDasNotas / notasDaSala.length;
    
    return media;
}

console.log(` A média da sala JavaScript foi de ${calculaMedia(salaJS)}`);
console.log(` A média da sala Java foi de ${calculaMedia(salaJava)}`);
console.log(` A média da sala Python foi de ${calculaMedia(salaPython)}`);