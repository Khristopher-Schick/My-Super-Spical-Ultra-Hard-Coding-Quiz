
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('choice_a_text')
const b_text = document.getElementById('choice_b_text')
const c_text = document.getElementById('choice_c_text')
const d_text = document.getElementById('choice_d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0


// start of questions //

const quizData = [
    {
    question: "Which of the following is NOT a coding language?", 
    choice_a: ["typeScript"],
    choice_b: ["Java"],
    choice_c: ["Python"],
    choice_d: ["Anaconda"],
    answer: "Anaconda"
    },

    {
    question: "What is the possesses called of adding two different data types together in JavaScript?", 
    choice_a: ["coercion"],
    choice_b: ["commutation"],
    choice_c: ["complexification"],
    choice_d: ["transposition"],
    
    answer: "coercion"
    },

    {
    question: "How do you add a comment in JavaScript", 
    choice_a: ["//Comment"],
    choice_b: ["<!--comment-->"],
    choice_c: ["{Comment}"],
    choice_d: ["!!Comment!!"],
    answer: "//Comment"
    }, 

    {
    question: "What does the js in Node.js stand for", 
    choices_a: ["HTML"],
    choices_b: ["JavaScript"],
    choices_c: ["Wolrd Wide Web"],
    choices_d: ["Doesnt stand for anything"],
    answer: "JavaScript"
    }, 

    {
    question: "Bonus Question! What mark will you give me on this quiz?:", 
    choices_a: ["99.8%"],
    choices_b: ["99.9%"],
    choices_c: ["100%"],
    choices_d: ["None of the above"],
    answer: "None of the above"
    },

];

// end of questions //

// var choicesButtonEl = document.querySelector(".choices");


function Quiz() {

    unselectedAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.choices_a
    b_text.innerText = currentQuizData.choices_b
    c_text.innerText = currentQuizData.choices_c
    d_text.innerText = currentQuizData.choices_d
}

function unselectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer == quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           Quiz()
       } else {
           quiz.innerHTML = {}
           `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`
           
       }
    }
})

Quiz()

// start of attempt to add scoreboard //
function userName () {
    document.querySelector(".scoreDisplay").style.visibility = "visible";
    document.querySelector(".form").style.visibility = "visible";
    scoreDisplayEl.textContent = `Your score is ${score}. Please enter your name.`;

    var userInput = document.querySelector(".userInput");
    var submitBtn = document.querySelector(".submitBtn");
    var displayUserName = document.querySelector(".userName");



    userName = [];
    var userInputValue = userInput.value
    userName.push({Name: userInputValue, Score: score})
    function submitUserName () {
        // adds score to local storage 
        displayUserName.textContent = [`Name: ${userInput.value}   Score: ${score}`]; 

        document.querySelector(".highScoresList").style.visibility = "visible"
        
    }

    submitBtn.addEventListener("click", submitUserName);

    
    storeScores();
    function storeScores () {
        localStorage.setItem("userName", JSON.stringify(userName));

    }
};
// end of attempt to add scoreboard //