document.addEventListener('DOMContentLoaded', function () {
    const words = [
        "училиште",
        "ресторан",
        "карантин",
        "виножито",
        "терминал",
        "величина",
        "картичка",
        "патување",
        "календар",
        "прозорец",
        "фестивал",
        "енергија",
        "венчавка",
        "пријател",
        "градинар",
        "победник",
        "факултет",
        "вниманиe",
        "фудбалер",
        "хоризонт"
    ];
    let currentWordIndex = 0;
    let remainingAttempts = 5;

    const wordDisplay = document.getElementById('word-display');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultMessage = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');

    function startNewGame() {
        currentWordIndex = Math.floor(Math.random() * words.length);
        remainingAttempts = 5;
        updateWordDisplay();
        userInput.value = '';
        resultMessage.textContent = '';
        submitBtn.disabled = false;
        restartBtn.style.display = 'none';
    }

    function updateWordDisplay() {
        const currentWord = words[currentWordIndex];
        wordDisplay.textContent = currentWord.substring(0, 3) + '_'.repeat(5);
    }

    function checkGuess() {
        const currentWord = words[currentWordIndex];
        const userGuess = userInput.value.toLowerCase();

        if (userGuess === currentWord) {
            resultMessage.textContent = 'Браво!';
            submitBtn.disabled = true;
            restartBtn.style.display = 'block';
        } else {
            remainingAttempts--;
            resultMessage.textContent = `Обиди се повторно. Останати обиди: ${remainingAttempts}`;
            if (remainingAttempts === 0) {
                resultMessage.textContent = 'Немате повеќе обиди. Точниот збор беше: ' + currentWord;
                submitBtn.disabled = true;
                restartBtn.style.display = 'block';
            }
        }
    }

    submitBtn.addEventListener('click', checkGuess);
    restartBtn.addEventListener('click', startNewGame);

    startNewGame();
});