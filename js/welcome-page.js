window.onload = function () {
  inizializza();
};

function inizializza() {
  spuntaCasellina();
}

//BOTTONE-PROCEDI
//1)prendiamo il bottone, verifichiamo lo stato e se disabilitato lo abilito, altrimenti lo disabiito.

function abilitaPulsante() {
  let bottoneProcedi = document.querySelector("#bottone-procedi");
  // verifico lo stato del bottone
  // IF se disabilitato allora lo abilito e richiamo la funzione procediEsame()
  if (bottoneProcedi.disabled) {
    bottoneProcedi.disabled = false; //per riabilitarlo
    procediEsame();
  } else {
    bottoneProcedi.disabled = true; //se abilitato lo disabilito e mi assicuro che non possa andare avanti cliccando sul bottone
  }
}

//SPUNTA CASELLINA
//2)prendo l'id spunta promessa, ci metto un ascoltatore così da capire se è stata spuntata o meno.Richiamo dentro la funzione abilitaplusante,
//a cui dovrà essere collegata e a cui passerà l'input: se spuntata abiliti il bottone, se non spuntata disabiliti il bottone.

function spuntaCasellina() {
  let prendiCasellina = document.querySelector("#spuntaPromessa");
  prendiCasellina.addEventListener("click", function () {
    // richiamo la funzione per abilitare il pulsante
    abilitaPulsante();
  });
}

//BOTTONE-PROCEDI (per passare alla pagina seguente)
//1)prendiamo il bottone dove vogliamo agire
//2)Ci mettiamo un ascoltatore quando intercetta il cick sul bottone procedi mi rimanda alla pagina seguente(level-difficulty)

function procediEsame() {
  let bottoneProcedi = document.querySelector("#bottone-procedi");
  bottoneProcedi.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/html/level-difficulty.html"; // Inserire l'URL della tua pagina successiva
  });
}
