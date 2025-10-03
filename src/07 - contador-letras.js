const wordInput = document.getElementById('word-input');
    const countLettersBtn = document.getElementById('count-letters-btn');
    const letterCountResult = document.getElementById('letter-count-result');

    countLettersBtn.addEventListener('click', () => {
        const word = wordInput.value.toLowerCase();
        const vowels = 'aeiouáéíóúâêîôûàãõ';
        const consonants = 'bcdfghjklmnpqrstvwxyzç';
        let vowelCount = 0;
        let consonantCount = 0;

        for(const char of word) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else if (consonants.includes(char)) {
                consonantCount++;
            }
        }
        letterCountResult.textContent = `Vogais: ${vowelCount}, Consoantes: ${consonantCount}`;
    });