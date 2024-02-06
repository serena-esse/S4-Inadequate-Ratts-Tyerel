const elemento = document.getElementById("donut");

function setConicGradient(primoPercentuale, secondoPercentuale) {
  const primoGradi = primoPercentuale * 3.6;
  const secondoGradi = primoGradi;

  const gradiente = `conic-gradient(#00ffff 0deg ${primoGradi}deg, #d20094 ${secondoGradi}deg 360deg)`;

  elemento.style.background = gradiente;
}

const primaPercentuale = 100;
const secondaPercentuale = 0;
setConicGradient(primaPercentuale, secondaPercentuale);
