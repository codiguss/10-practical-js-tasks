const arrayNumbersInput = document.getElementById('array-numbers-input');
    const analyzeNumbersBtn = document.getElementById('analyze-numbers-btn');
    const analysisResult = document.getElementById('analysis-result');
    
    analyzeNumbersBtn.addEventListener('click', () => {
        const numbersStr = arrayNumbersInput.value.split(',');
        const numbers = numbersStr.map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

        if (numbers.length === 0) {
            analysisResult.textContent = 'Por favor, insira números válidos separados por vírgula.';
            return;
        }

        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const avg = sum / numbers.length;

        analysisResult.textContent = `Maior: ${max}, Menor: ${min}, Média: ${avg.toFixed(2)}`;
    });
