document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

document.getElementById('metric').addEventListener('change', updateUnits);
document.getElementById('imperial').addEventListener('change', updateUnits);

function updateUnits() {
    const heightUnit = document.getElementById('heightUnit');
    const weightUnit = document.getElementById('weightUnit');
    if (document.getElementById('metric').checked) {
        heightUnit.textContent = 'cm';
        weightUnit.textContent = 'kg';
    } else {
        heightUnit.textContent = 'in';
        weightUnit.textContent = 'lbs';
    }
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;

    let bmi;
    if (unit === 'metric') {
        bmi = weight / ((height / 100) ** 2);
    } else {
        bmi = (weight / (height ** 2)) * 703;
    }

    displayResult(bmi);
}

function displayResult(bmi) {
    const result = document.getElementById('result');
    result.style.display = 'block';

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    result.innerHTML = `
        <span>${bmi.toFixed(1)}</span><br>
        You are in the <strong>${bmiCategory}</strong> range
    `;
}
