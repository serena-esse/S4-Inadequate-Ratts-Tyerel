window.onload = function () {
  inizializza();
};

function inizializza() {
  spuntaCasellina();
}

//CASELLINA SPUNTA
//1)prendiamo la casellina dove vogliamo agire
//2)Ci mettiamo un ascoltatore

function spuntaCasellina() {
  let prendiCasellina = document.querySelector("#spuntaPromessa");
  prendiCasellina.addEventListener("click", function () {
    // richiamo l'elemento bottone procedi
    let bottoneProcedi = document.querySelector("#bottone-procedi");
    // verifico lo stato del bottone
    // IF se disabilitato allora lo abilito e richiamo la funzione procediEsame()
    if (bottoneProcedi.disabled) {
      bottoneProcedi.disabled = false; //per riabilitarlo
      procediEsame();
    } else {
      bottoneProcedi.disabled = true; //se abilitato lo disabilito e mi assicuro che non possa andare avanti cliccando sul bottone
    }
  });
}

//BOTTONE
//1)prendiamo il bottone dove vogliamo agire
//2)Ci mettiamo un ascoltatore

function procediEsame() {
  let bottoneProcedi = document.querySelector("#bottone-procedi");
  bottoneProcedi.addEventListener("click", function () {
    console.log("bottone procedi cliccato"); //poi rimuoverlo
    window.location.href = "http://127.0.0.1:5501/index.html"; // Inserire l'URL della tua pagina successiva
  });
}
