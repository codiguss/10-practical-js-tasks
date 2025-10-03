 const weightInput = document.getElementById('weight-input');
    const heightInput = document.getElementById('height-input');
    const calculateImcBtn = document.getElementById('calculate-imc-btn');
    const imcResult = document.getElementById('imc-result');

    calculateImcBtn.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            imcResult.textContent = 'Resultado: Por favor, insira peso e altura válidos.';
            return;
        }

        const imc = weight / (height * height);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classification = 'Peso normal';
        } else if (imc < 29.9) {
            classification = 'Sobrepeso';
        } else if (imc < 34.9) {
            classification = 'Obesidade Grau I';
        } else if (imc < 39.9) {
            classification = 'Obesidade Grau II';
        } else {
            classification = 'Obesidade Grau III';
        }
        
        imcResult.textContent = `Resultado: IMC ${imc.toFixed(2)} - ${classification}.`;
    });