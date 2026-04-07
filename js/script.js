'use strict'

// Bottone per iniziare a giocare:
// Rimuovere classe d-none al form e nascondere il bottone
const btnLetsPlay = document.querySelector('#letsPlay');
const formGioco = document.querySelector('#answers-form');

// Variabile per gli input
const inputs = document.querySelectorAll('#input-group input');

// Inizia a giocare allo scadere del timer o alla pressione del brn Conferma
const btnConferma = document.querySelector('#btnConferma');
const btnRisposta = document.querySelector('#btnRisposta');
const istruzioni = document.querySelector('#instructions');

// Per registrare i numeri estratti
const numeriEstratti = [];

// Variabile per countdown
let intervalId;
const countdownElem = document.querySelector('#countdown');
let countdownValue = 30;



// Eventi
btnLetsPlay.addEventListener('click', btnInit);

// Interrompo in anticipo il timer e vado avanti
btnConferma.addEventListener('click', (event) => {
    event.preventDefault(); // Impedisce il ricaricamento della pagina
    clearInterval(intervalId); // Ferma il timer
    svuotaInput(); // Evoco la funzione clear
});