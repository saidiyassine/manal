const quizData = [
    {
        question: "Quelle langue est parlée au Brésil ?",
        a: "Espagnol",
        b: "Portugais",
        c: "Français",
        d: "Italien",
        correct: "b",
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        a: "Émile Zola",
        b: "Victor Hugo",
        c: "Marcel Proust",
        d: "Albert Camus",
        correct: "b",
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        a: "Océan Atlantique",
        b: "Océan Indien",
        c: "Océan Arctique",
        d: "Océan Pacifique",
        correct: "d",
    },
    {
        question: "En quelle année a eu lieu la Révolution française ?",
        a: "1789",
        b: "1792",
        c: "1776",
        d: "1804",
        correct: "a",
    },
    {
        question: "Quel est l'animal terrestre le plus rapide ?",
        a: "Lion",
        b: "Tigre",
        c: "Guépard",
        d: "Éléphant",
        correct: "c",
    },
    {
        question: "Quel est le plus grand pays du monde en superficie ?",
        a: "États-Unis",
        b: "Canada",
        c: "Chine",
        d: "Russie",
        correct: "d",
    },
    {
        question: "Quelle est la capitale de l'Espagne ?",
        a: "Madrid",
        b: "Barcelone",
        c: "Lisbonne",
        d: "Séville",
        correct: "a",
    },
    {
        question: "Qui a peint la Mona Lisa ?",
        a: "Vincent Van Gogh",
        b: "Claude Monet",
        c: "Pablo Picasso",
        d: "Léonard de Vinci",
        correct: "d",
    },
    {
        question: "Quel est l'organe principal de la respiration chez l'homme ?",
        a: "Le cœur",
        b: "Les poumons",
        c: "Le foie",
        d: "L'estomac",
        correct: "b",
    },
    {
        question: "Quelle est la monnaie du Japon ?",
        a: "Yuan",
        b: "Yen",
        c: "Won",
        d: "Ringgit",
        correct: "b",
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        a: "Nil",
        b: "Amazonie",
        c: "Yangtsé",
        d: "Mississippi",
        correct: "b",
    },
    {
        question: "Qui a écrit 'Le Petit Prince' ?",
        a: "Jean-Paul Sartre",
        b: "Albert Camus",
        c: "Antoine de Saint-Exupéry",
        d: "Marcel Proust",
        correct: "c",
    },
    {
        question: "Qui est le président actuel de la France ?",
        a: "Nicolas Sarkozy",
        b: "François Hollande",
        c: "Emmanuel Macron",
        d: "Jacques Chirac",
        correct: "c",
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        a: "K2",
        b: "Mont Blanc",
        c: "Everest",
        d: "Kilimandjaro",
        correct: "c",
    },
    {
        question: "Dans quel pays se trouve la grande pyramide de Gizeh ?",
        a: "Grèce",
        b: "Égypte",
        c: "Mexique",
        d: "Italie",
        correct: "b",
    },
    {
        question: "Quel est l'élément chimique dont le symbole est O ?",
        a: "Or",
        b: "Oxygène",
        c: "Ozone",
        d: "Osmium",
        correct: "b",
    },
    {
        question: "Combien de continents existe-t-il sur Terre ?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "Quel est l'artiste qui a peint 'La Nuit étoilée' ?",
        a: "Claude Monet",
        b: "Pablo Picasso",
        c: "Vincent Van Gogh",
        d: "Henri Matisse",
        correct: "c",
    },
    {
        question: "Quel est le plus petit pays du monde ?",
        a: "Monaco",
        b: "Saint-Marin",
        c: "Vatican",
        d: "Nauru",
        correct: "c",
    },
    {
        question: "Quel est le pays d'origine de la pizza ?",
        a: "France",
        b: "Espagne",
        c: "Italie",
        d: "Grèce",
        correct: "c",
    },
    {
        question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
        a: "1961",
        b: "1965",
        c: "1969",
        d: "1972",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
                <button onclick="location.reload()" class="btn_reload">Recommencer</button>
            `;
        }
    }
});

/* Created by Tivotal */

const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});