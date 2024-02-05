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
    console.log("casellina spuntata");
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
    console.log("bottone procedi cliccato");
  });
}

//in js all'interno di un listener come faccio a indirizzare la pagina verso un altro html?
//0) disabilitare di default il bottone procedi
