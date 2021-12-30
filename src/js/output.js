const result = document.getElementById('datecalc__result');

export const printOutput = (text) => {
    result.innerHTML = text;
}

export const printResult = ({years, months, days}) => {
    printOutput(`
    дни: ${days},
    месяцы: ${months},
    годы: ${years}
    `)
}