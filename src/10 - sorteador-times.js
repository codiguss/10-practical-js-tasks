 const namesListInput = document.getElementById('names-list-input');
    const teamsNumberInput = document.getElementById('teams-number-input');
    const drawTeamsBtn = document.getElementById('draw-teams-btn');
    const teamsResult = document.getElementById('teams-result');

    drawTeamsBtn.addEventListener('click', () => {
        const names = namesListInput.value.split('\n')
            .map(name => name.trim())
            .filter(name => name !== '');
        
        const numTeams = parseInt(teamsNumberInput.value);

        if (names.length < numTeams || numTeams <= 0) {
            teamsResult.innerHTML = '<p>Número de nomes ou times inválido para o sorteio.</p>';
            return;
        }

        const shuffledNames = names.sort(() => Math.random() - 0.5);

        const teams = Array.from({ length: numTeams }, () => []);
        
        shuffledNames.forEach((name, index) => {
            teams[index % numTeams].push(name);
        });

        teamsResult.innerHTML = ''
        teams.forEach((team, index) => {
            const teamDiv = document.createElement('div');
            teamDiv.innerHTML = `<h3>Time ${index + 1}</h3><ul>${team.map(name => `<li>${name}</li>`).join('')}</ul>`;
            teamsResult.appendChild(teamDiv);
        });
    });