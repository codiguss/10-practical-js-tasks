const userNameInput = document.getElementById('user-name-input');
    const userEmailInput = document.getElementById('user-email-input');
    const userPasswordInput = document.getElementById('user-password-input');
    const validateUserBtn = document.getElementById('validate-user-btn');
    const validationResult = document.getElementById('validation-result');

    validateUserBtn.addEventListener('click', () => {
        const errors = [];
        if (userNameInput.value.trim() === '') {
            errors.push('O nome não pode estar vazio.');
        }
        if (!userEmailInput.value.includes('@') || !userEmailInput.value.includes('.')) {
            errors.push('O email parece ser inválido.');
        }
        if (userPasswordInput.value.length < 7) {
            errors.push('A senha precisa ter 7 ou mais caracteres.');
        }

        if (errors.length > 0) {
            validationResult.textContent = `Status: Erros encontrados: ${errors.join(' ')}`;
            validationResult.style.color = 'red';
        } else {
            validationResult.textContent = 'Status: Usuário válido!';
            validationResult.style.color = 'green';
        }
    });