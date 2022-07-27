

const quizData = [
    {
        question: "Which of the following is NOT a coding language?",
        a: "TypeScript",
        b: "Java",
        c: "Anaconda",
        d: "Python",
        answer: "c",
    },
    {
        question: "What is the possesses called of adding two different data types together in JavaScript?",
        a: "coercion",
        b: "commutation",
        c: "complexification",
        d: "transposition",
        correct: "a",
    },
    {
        question: "How do you add a comment in JavaScript",
        a: "//Comment",
        b: "<!--comment-->",
        c: "{Comment}",
        d: "!!Comment!!",
        correct: "a",
    },
    {
        question: "What does the js in Node.js stand for",
        a: "HTML",
        b: "JavaScript",
        c: "World Wide Web",
        d: "Doesnt stand for anything",
        correct: "b",
    },
    {
        question: "Bonus Question! What mark will you give me on this quiz?:",
        a:"99.8%",
        b:"99.9%",
        c:"100%",
        d:"None of the above",
        answer:"d",
    }


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
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
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
