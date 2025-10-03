const dateInput = document.getElementById('date-input');
    const startCountdownBtn = document.getElementById('start-countdown-btn');
    const countdownResult = document.getElementById('countdown-result');
    let countdownInterval;

    startCountdownBtn.addEventListener('click', () => {
        const targetDateValue = dateInput.value;
        if (!targetDateValue) {
            alert('Por favor, selecione uma data e hora futura.');
            return;
        }
        const targetDate = new Date(targetDateValue);
        if (targetDate <= new Date()) {
            alert('A data selecionada deve ser no futuro.');
            return;
        }
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
        updateCountdown(targetDate);
    });

    function updateCountdown(targetDate) {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        if (diff <= 0) {
            clearInterval(countdownInterval);
            countdownResult.textContent = 'A contagem regressiva terminou!';
            return;
        }
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        countdownResult.textContent = `Faltam: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`;
    }
