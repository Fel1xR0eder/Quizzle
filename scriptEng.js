let quizGer = [{
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

let quizEng = [{
    'question': 'When did Christopher Columbus discover America?',
    'answer_1': '1482',
    'answer_2': '1492',
    'answer_3': '1502',
    'answer_4': '1512',
    'right_answer': 2
}, {
    'question': 'Which is the lightest element in the periodic table?',
    'answer_1': 'Hydrogen',
    'answer_2': 'Helium',
    'answer_3': 'Neon',
    'answer_4': 'Methane',
    'right_answer': 1
}, {
    'question': 'What year did the first iPhone hit the market?',
    'answer_1': '2005',
    'answer_2': '2006',
    'answer_3': '2007',
    'answer_4': '2008',
    'right_answer': 3
}, {
    'question': 'What is the name of the longest river in the world?',
    'answer_1': 'Yangtze River',
    'answer_2': 'Nile',
    'answer_3': 'Amazon river',
    'answer_4': 'Mississippi',
    'right_answer': 2

}, {
    'question': 'How long does it take the International Space Station (ISS) to orbit the Earth once?',
    'answer_1': 'About 90 minutes',
    'answer_2': 'About 120 minutes',
    'answer_3': 'About 30 minutes',
    'answer_4': 'About 155 minutes',
    'right_answer': 1

}, {
    'question': 'On which continent is Lake Victoria located?',
    'answer_1': 'Europe',
    'answer_2': 'Asia',
    'answer_3': 'North America',
    'answer_4': 'Africa',
    'right_answer': 4

}, {
    'question': 'What is Kopi Luwak?',
    'answer_1': 'The most expensive bread in the world',
    'answer_2': 'The most expensive goats milk in the world',
    'answer_3': 'The most expensive maple syrup in the world',
    'answer_4': 'The most expensive coffee in the world',
    'right_answer': 4
}];

let currentQuestion = 0;
let rightQuestions = 0;


// let AUDIO_SUCCESS = new Audio('./audio/success.mp3');
// let AUDIO_FAIL = new Audio('./audio/wrong.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = quiz.length;
    document.getElementById('right-card').classList.remove('d-none');
    document.getElementById('start-screen').classList.add('d-none');
    showQuestion();
}

function showQuestionEng() {
    if (gameOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestionEng();
    }
}

function gameOver() {
    return currentQuestion >= quiz.length;
}

function updateProgressBar() {
    let percent = currentQuestion / quiz.length;
    percent = percent * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

//              ####                     ####
//              ####     QUIZ ENGLISH    #### 
//              ####                     ####

function answerEng(selection) {
    let question = quizEng[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    let nextButton = document.getElementById('next-button');

    if (nextButton.disabled == true) {

        if (selectedQuestionNumber == question['right_answer']) {               
            document.getElementById(selection).parentNode.classList.add('green-answer');
            rightQuestions++;
            //AUDIO_SUCCESS.play();
        } else {
            //AUDIO_FAIL.play();
            document.getElementById(selection).parentNode.classList.add('red-answer');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('green-answer');
        }
    }

    nextButton.disabled = false;
}

function updateToNextQuestionEng() {
    let question = quizGer[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndScreenEng() {
    document.getElementById('end-screen').style = '';
    document.getElementById('quiz-card').style = 'display: none';
    document.getElementById('score').innerHTML = `YOUR SCORE IS ${rightQuestions} OF ${quiz.length}`
}

//              ####                     ####
//              ####     QUIZ GERMAN     #### 
//              ####                     ####

function showEndScreenGer() {
    document.getElementById('end-screen').style = '';
    document.getElementById('quiz-card').style = 'display: none';
    document.getElementById('score').innerHTML = `Deine Punktzahl ist ${rightQuestions} von ${quiz.length}`
}

function answerGer(selection) {                                                //selection = aktuelle Antwort
    let question = quizGer[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);                       //return vom letzten string = 3
    let idOfRightAnswer = `answer_${question['right_answer']}`;             //question['right_answer] = 3
    let nextButton = document.getElementById('next-button');

    if (nextButton.disabled == true) {

        if (selectedQuestionNumber == question['right_answer']) {               // 3 == 3
            document.getElementById(selection).parentNode.classList.add('green-answer');
            rightQuestions++;
            //AUDIO_SUCCESS.play();
        } else {
            //AUDIO_FAIL.play();
            document.getElementById(selection).parentNode.classList.add('red-answer');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('green-answer');
        }
    }

    nextButton.disabled = false;
}

function updateToNextQuestionGer() {
    let question = quizGer[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showQuestionGer() {
    if (gameOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestionGer();
    }
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    showQuestionGer();
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