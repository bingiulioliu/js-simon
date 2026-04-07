// Bottone per iniziare a giocare:
// Rimuovere classe d-none e nascondere il bottone
const btnLetsPlay = document.querySelector('#letsPlay');
const formGioco = document.querySelector('#answers-form');

// Variabile per gli input
const inputs = document.querySelectorAll('#input-group input');

// Inizia a giocare allo scadere del timer o alla pressione del brn Conferma
const btnConferma = document.querySelector('#btnConferma');

// Per registrare i numeri estratti
const numeriEstratti = [];

btnLetsPlay.addEventListener('click', btnInit);

