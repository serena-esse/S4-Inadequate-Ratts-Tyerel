function createDonutChart(timeRemaining) {
    const donutChartContainer = document.getElementById('donut-chart-container');
    const angle = (timeRemaining / 60) * 360;
    const donutChart = document.createElement('div');
    donutChart.className = 'donut-chart';
    donutChart.style.backgroundImage = `conic-gradient(#AE0087 ${angle}deg, transparent ${angle}deg 360deg)`;
    const textContainer = document.createElement('div');
    textContainer.className = 'donut-text';
    textContainer.innerHTML = 
    `<div>seconds</div>
    <div>${timeRemaining}</div>
    <div>remaining</div>`;
    donutChartContainer.innerHTML = '';
    donutChartContainer.appendChild(donutChart);
    donutChartContainer.appendChild(textContainer);
}

createDonutChart(60);


// <!--
//         QUIZ GAME!

//         REGOLE:
//         / L'utente dovrà indovinare un certo numero di domandeThe player must guess correctly a certain amount of questions
//         / Ogni risposta corretta gli darà 1 punto
//         / Le domande possono avere risposte multiple o singole (true/false)
//         / Al termine del quiz l'utente dovrà poter vedere il suo punteggio

//         DOMANDE:
//         / Le domande possono essere ottenute da questo URL ( http://bit.ly/strive_QUIZZ ) o puoi scriverne di tue
//         / Possono essere composte di boolean multipli (true / false)

//         TIPS:
//         / Usa una variabile globale per registrare il punteggio dell'utente
//         / Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
//         / Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
//         / Comincia salvando le domande in una variabile (o reperiscile dall'URL fornito usando AJAX e fetch)
//         / Parti con l'implementazione semplice, poi passa agli extra e ad abbellire l'interfaccia 
//         / Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspetti

//         EXTRA:
//         / Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
//         / Visualizza una domanda alla volta in esquenza piuttosto che tutte assieme in forma di lista
//         / Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
//         ( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice, 
//         usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )
    
//         /* NON DIMENTICARE...
//           di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
//         */
//     -->

// var time = 0;
// var timerInterval;
// function startTimer() {
//   timerInterval = setInterval(updateTimer, 1000);
// }
// function updateTimer() {
//   time++;
//   var minutes = Math.floor(time / 60);
//   var seconds = time % 60;
//   var timerText = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
//   document.querySelector(".timer-text").textContent = timerText;
//   var circle = document.querySelector(".progress-ring-circle");
//   var radius = circle.r.baseVal.value;
//   var circumference = 2 * Math.PI * radius;
//   var progress = (time / (5 * 60)) * circumference;
//   var offset = circumference - progress;
//   circle.style.strokeDasharray = `${progress} ${circumference}`;
//   circle.style.strokeDashoffset = offset;
// }
// function stopTimer() {
//   clearInterval(timerInterval);
// }
// startTimer();


{/* <div class="timer">
      <svg class="progress-ring" width="120" height="120">
        <circle
          class="progress-ring-circle"
          stroke="black"
          stroke-width="4"
          fill="black"
          r="52"
          cx="60"
          cy="60"
        ></circle>
      </svg>
      <div class="timer-text">00:00</div>
    </div> */}


