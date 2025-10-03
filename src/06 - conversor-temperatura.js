    const celsiusInput = document.getElementById('celsius-input');
    const cToFBtn = document.getElementById('c-to-f-btn');
    const cToFResult = document.getElementById('c-to-f-result');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const fToCBtn = document.getElementById('f-to-c-btn');
    const fToCResult = document.getElementById('f-to-c-result');

    cToFBtn.addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        if (isNaN(celsius)) return;
        const fahrenheit = (celsius * 9/5) + 32;
        cToFResult.textContent = `Resultado: ${fahrenheit.toFixed(1)} °F`;
    });

    fToCBtn.addEventListener('click', () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (isNaN(fahrenheit)) return;
        const celsius = (fahrenheit - 32) * 5/9;
        fToCResult.textContent = `Resultado: ${celsius.toFixed(1)} °C`;
    });