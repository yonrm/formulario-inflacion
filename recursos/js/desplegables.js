let pestanaPrimero = document.getElementById('pestana-primero');
let pestanaSegundo = document.getElementById('pestana-segundo');

let cprimero = document.getElementById("cuantoIncremento");
let csegundo = document.getElementById("cuantoAntes");

let cuantoIncrementoAbierto = function() {
  cprimero.style.display = 'flex';
  cGrpaises.style.display = 'none';
  cMundo.style.display = 'none';
  
  pPaises.style.backgroundColor = '#f5f9fb';
  pPaises.style.color = '#00bcd4';
  
  pGrpaises.style.backgroundColor = '#00bcd4';
  pGrpaises.style.color = '#f5f9fb';
  
  pMundo.style.backgroundColor = '#00bcd4';
  pMundo.style.color = '#f5f9fb';
};