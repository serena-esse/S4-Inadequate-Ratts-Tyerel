const elementPercent2 = document.querySelector(".percent2");

// Funzione per ottenere la percentuale da un elemento con una specifica classe
function getPercentualeFromClass(classe) {
  const element = document.querySelector(classe);

  const percentualeTesto = element.innerText.trim();
  const match = percentualeTesto.match(/\d+/); // Estrae solo i numeri interi dalla stringa
  const percentuale = match ? parseInt(match[0]) : 50; // Converte in un numero intero
  return isNaN(percentuale) ? 50 : percentuale; // Se non è un numero valido, ritorna 50 come valore predefinito
}

// Ottieni l'elemento HTML
const elemento = document.getElementById("donut");

// Funzione per impostare il gradiente conico in base alle percentuali dei due colori
function setConicGradient(primoPercentuale, secondoPercentuale) {
  // Calcola i gradi del gradiente conico in base alle percentuali
  const primoGradi = primoPercentuale * 3.6; // Ogni 1% corrisponde a 3.6 gradi (360 gradi diviso per 100%)
  const secondoGradi = secondoPercentuale * 3.6;

  // Crea il valore del gradiente conico in base alle percentuali calcolate
  const gradiente = `conic-gradient(#d20094 0deg, #d20094 ${secondoGradi}deg, #00ffff ${secondoGradi}deg, #00ffff 360deg)`;

  // Imposta il gradiente come background dell'elemento
  elemento.style.background = gradiente;
}

// Ottieni le percentuali dai contenuti dei tag <p> e chiama la funzione per impostare il gradiente conico
const primaPercentuale = getPercentualeFromClass(".percent1");
const secondaPercentuale = getPercentualeFromClass(".percent2");
setConicGradient(primaPercentuale, secondaPercentuale);
