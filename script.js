document.getElementById('regexForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const pattern = document.getElementById('pattern').value;
    const text = document.getElementById('text').value;
    let regex;
    try {
        regex = new RegExp(pattern);
    } catch (err) {
        document.getElementById('result').textContent = 'Expresión regular inválida.';
        return;
    }
    const isValid = regex.test(text);
    document.getElementById('result').textContent = isValid
        ? '¡Coincidencia! El texto cumple con el patrón.'
        : 'No hay coincidencia. El texto NO cumple con el patrón.';
});