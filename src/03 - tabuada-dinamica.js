const tabuadaInput = document.getElementById('number-tabuada-input');
    const generateTabuadaBtn = document.getElementById('generate-tabuada-btn');
    const tabuadaResult = document.getElementById('tabuada-result');

    generateTabuadaBtn.addEventListener('click', () => {
        const number = parseInt(tabuadaInput.value);
        if (isNaN(number)) {
            tabuadaResult.innerHTML = '<p>Por favor, insira um número válido.</p>';
            return;
        }

        let tableHTML = '';
        for (let i = 1; i <= 10; i++) {
            tableHTML += `<p>${number} x ${i} = ${number * i}</p>`;
        }
        tabuadaResult.innerHTML = tableHTML;
    });