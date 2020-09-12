import "./styles.css";

let current, score;
const name = "BreakingBad";
const questions = [
  {
    question: "Quando a série foi lançada?",
    options: [
      "20 de setembro de 2008",
      "20 de setembro de 2007",
      "20 de janeiro de 2008",
      "20 de janeiro de 2009"
    ],
    correct: 2
  },
  {
    question: "Qual era a cor da metanfetamina que eles vendiam na série?",
    options: ["Verde", "Amarela", "Roxa", "Azul"],
    correct: 3
  },
  {
    question: "Qual é o nome do restaurante do Gus?",
    options: [
      "Los Pollos Hermanos",
      "Los Hermanos",
      "Los Dos Hermanos",
      "Los Gallos Hermanos"
    ],
    correct: 0
  },
  {
    question: "Onde se localizava o câncer de Walter White?",
    options: ["No intestino", "No fígado", "No pulmão", "No cérebro"],
    correct: 2
  }
];

window.handleSubmit = (event) => {
  const form = event.target;
  event.preventDefault();
  const answer = new FormData(form).get("answer");
  if (current.correct === parseInt(answer, 0)) score++;
  let idx = questions.findIndex((i) => i === current);
  current = questions[++idx];
  if (current) render();
  else {
    alert(`Sua pontuação final é ${score}`);
    start();
    render();
  }
  form.reset();
};

const start = () => {
  score = 0;
  current = questions[0];
};

const render = () => {
  document.getElementById("app").innerHTML = `
  <h1>${name}</h1>
  <h2>Pontos: ${score}</h2>
  <form onsubmit="handleSubmit(event)" class="container">
    <h3>${current.question}</h3>
    <ul>
      ${current.options
        .map((label, value) => {
          return `
            <li>
              <input id="${value}" type="radio" name="answer" value="${value}" />
              <label for="${value}">${label}</label>
            </li>
          `;
        })
        .join("")}
    </ul>
    <button type="submit">Enviar</button>
  </form>
  `;
};

start();
render();
