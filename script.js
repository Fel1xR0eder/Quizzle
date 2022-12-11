let quiz = [{
    'question': 'Wann entdeckte Christoph Kolumbus Amerika?',
    'answer_1': '1482',
    'answer_2': '1492',
    'answer_3': '1502',
    'answer_4': '1512',
    'right_answer': 2
}, {
    'question': 'Welches ist das leichteste Element im Periodensystem?',
    'answer_1': 'Wasserstoff',
    'answer_2': 'Helium',
    'answer_3': 'Neon',
    'answer_4': 'Methan',
    'right_answer': 1
}, {
    'question': 'In welchem Jahr kam das erste iPhone auf den Markt?',
    'answer_1': '2005',
    'answer_2': '2006',
    'answer_3': '2007',
    'answer_4': '2008',
    'right_answer': 3
}, {
    'question': 'Wie heißt der längste Fluss der Welt',
    'answer_1': 'Jangtsekiang',
    'answer_2': 'Nil',
    'answer_3': 'Amazonas',
    'answer_4': 'Mississippi',
    'right_answer': 2

}, {
    'question': 'Wie lange braucht die Internationale Raumstation (ISS), um die Erde einmal zu umrunden?',
    'answer_1': 'etwa 90 Minuten',
    'answer_2': 'etwa 120 Minuten',
    'answer_3': 'etwa 30 Minuten',
    'answer_4': 'etwa 155 Minuten',
    'right_answer': 1

}, {
    'question': 'Auf welchem Kontinent liegt der Viktoriasee',
    'answer_1': 'Europa',
    'answer_2': 'Asien',
    'answer_3': 'Nordamerika',
    'answer_4': 'Afrika',
    'right_answer': 4

}, {
    'question': 'Was ist Kopi Luwak?',
    'answer_1': 'Das teuerste Brot der Welt',
    'answer_2': 'Die teuerste Ziegenmilch der Welt',
    'answer_3': 'Der teuerste Ahornsirup der Welt',
    'answer_4': 'Der teuerste Kaffee der Welt',
    'right_answer': 4
}];

let currentQuestion = 0;
let rightQuestions = 0;

let AUDIO_SUCCESS = new Audio('/audio/success.mp3');
let AUDIO_FAIL = new Audio('/audio/wrong.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = quiz.length;

    showQuestion();
}

function showQuestion() {
    if (gameOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameOver(){
   return currentQuestion >= quiz.length;
}

function updateProgressBar() {
    let percent = currentQuestion / quiz.length;
    percent = percent * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = quiz[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('quiz-card').style = 'display: none';
    document.getElementById('score').innerHTML = `Your Score is ${rightQuestions} of ${quiz.length}`
}

function answer(selection) {                                                //selection = aktuelle Antwort
    let question = quiz[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);                       //return vom letzten string = 3

    let idOfRightAnswer = `answer_${question['right_answer']}`;             //question['right_answer] = 3

    if (selectedQuestionNumber == question['right_answer']) {                // 3 == 3
        document.getElementById(selection).parentNode.classList.add('green-answer');
        rightQuestions++;
        AUDIO_SUCCESS.play();
    } else {
        AUDIO_FAIL.play();
        document.getElementById(selection).parentNode.classList.add('red-answer');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('green-answer');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    showQuestion();
    resetAnswer();
}

function resetAnswer() {
    document.getElementById('answer_1').parentNode.classList.remove('red-answer');
    document.getElementById('answer_1').parentNode.classList.remove('green-answer');
    document.getElementById('answer_2').parentNode.classList.remove('red-answer');
    document.getElementById('answer_2').parentNode.classList.remove('green-answer');
    document.getElementById('answer_3').parentNode.classList.remove('red-answer');
    document.getElementById('answer_3').parentNode.classList.remove('green-answer');
    document.getElementById('answer_4').parentNode.classList.remove('red-answer');
    document.getElementById('answer_4').parentNode.classList.remove('green-answer');
}

function restartGame() {
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('quiz-card').style = '';

    currentQuestion = 0;
    rightQuestions = 0;
    init();
}