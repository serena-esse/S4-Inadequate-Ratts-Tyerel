window.onload = function () {
  inizializza();
};

function inizializza() {
  procediEsame();
}

//BOTTONE START
//1)Prendiamo il bottone dove vogliamo agire
//2)Ci mettiamo un ascoltatore che riceve l'input sia del livello di difficoltà che del numero di domande

function procediEsame() {
  let bottoneProcedi = document.querySelector("#bottone-procedi");
  const levels = ["Low", "Medium", "High"];
  bottoneProcedi.addEventListener("click", function () {
    let sliderInput = document.getElementById("difficulty-slider");
    const level = levels[sliderInput.value - 1];
    console.log(level);
    let numeroDomande = document.getElementById("numero-domande");
    console.log(numeroDomande.value);

    // PER INVIARE I DATI ALLA PAGINA SUCCESSIVA
    let parametroDomande = encodeURIComponent(numeroDomande.value);
    let parametroLivello = encodeURIComponent(sliderInput.value);

    // Costruisci l'URL con i parametri
    //al posto di pagina2 inserire come Marco ha rinominato il suo index.
    //il ? indica che inizierà la parte dei parametri che noi indichiamo con parametroDomande e parametroLivello
    let nuovoURL =
      "http://127.0.0.1:5500/html/benchmark.html?parametroDomande=" +
      parametroDomande +
      "&parametroLivello=" +
      parametroLivello;

    // Reindirizza alla nuova pagina
    window.location.href = nuovoURL;
  });
}

// PAGINA3 MARCO DEVE INSERIRE QUESTE TRE RIGHE nel window.onload
// let urlParams = new URLSearchParams(window.location.search);
// let parametroDomande = urlParams.get("parametroDomande");
// let parametroLivello = urlParams.get("parametroLivello");
