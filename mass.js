document.getElementById('massForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var inputMass = parseFloat(document.getElementById('inputMass').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;

    var convertedMass = convertMass(inputMass, inputUnit, outputUnit);

    displayResult(convertedMass, outputUnit);
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('massForm').reset();
    document.getElementById('result').innerText = '';
});

function convertMass(mass, inputUnit, outputUnit) {
    var massInKg;

    // Convert input mass to kilograms
    switch (inputUnit) {
        case 'kg':
            massInKg = mass;
            break;
        case 'g':
            massInKg = mass / 1000;
            break;
        case 'lb':
            massInKg = mass * 0.453592;
            break;
        case 'oz':
            massInKg = mass * 0.0283495;
            break;
    }

    // Convert mass from kilograms to output unit
    switch (outputUnit) {
        case 'kg':
            return massInKg;
        case 'g':
            return massInKg * 1000;
        case 'lb':
            return massInKg / 0.453592;
        case 'oz':
            return massInKg / 0.0283495;
    }
}

function displayResult(mass, unit) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `= ${mass.toFixed(2)} ${unit}<br><br>Multiply by ${getMultiplier(unit)}<br>for quick conversions`;
}

function getMultiplier(unit) {
    switch (unit) {
        case 'kg':
            return '1';
        case 'g':
            return '1,000';
        case 'lb':
            return '2.20462';
        case 'oz':
            return '35.274';
    }
}
