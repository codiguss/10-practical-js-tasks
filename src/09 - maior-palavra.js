 const phraseInput = document.getElementById('phrase-input');
    const findLongestWordBtn = document.getElementById('find-longest-word-btn');
    const longestWordResult = document.getElementById('longest-word-result');

    findLongestWordBtn.addEventListener('click', () => {
        const words = phraseInput.value.split(/\s+/); 
        let longestWord = '';
        for (const word of words) {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }
        longestWordResult.textContent = `A maior palavra é: ${longestWord}`;
    });
