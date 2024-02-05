window.onload = function () {
  inizializza();
};

function inizializza() {
  //   spuntaCasellina();
  cliccaBottone();
}

//CASELLINA SPUNTA
//1)prendiamo la casellina dove vogliamo agire
//2)Ci mettiamo un ascoltatore

// function spuntaCasellina() {
//   let prendiCasellina = document.querySelector("#little box");
//   prendiCasellina.addEventListener("click");
//   console.log("ciao");
// }

//BOTTONE
//1)prendiamo il bottone dove vogliamo agire
//2)Ci mettiamo un ascoltatore

function cliccaBottone() {
  let prendiBottone = document.querySelector("#button");
  prendiBottone.addEventListener("click", function () {
    console.log("ciao");
  });
}
