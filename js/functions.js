'use strict'

// Funzione per:
// mostrare il form  
// nascondere il bottone di inizializzazione
// Generare numeri random negli input
function btnInit() {
    // Mostro il form
    formGioco.classList.remove('d-none');
    // Nascondo il bottone Gioca ora
    btnLetsPlay.classList.add('d-none');
    // Alternativa senza CSS
    // btnRimozione.style.display = 'none';

    // Per ogni input, inserisco numero random 1-50
    // La freccia => deve stare dentro le parentesi del forEach.
    inputs.forEach(input => {
        let numero;
        // Continua a generare finché non ne trovi uno NON presente nell'array
        do {
            numero = Math.floor(Math.random() * 50) + 1;
        } while (numeriEstratti.includes(numero));

        numeriEstratti.push(numero);
        input.value = numero;
        console.log(numeriEstratti);
    });
    intervalId = setInterval(countdownHandler, 1000);
    countdownElem.innerText = countdownValue;
}

// Funzione per:
// Inserire negli input i 5 numeri
// Clear al Timeout di 30 sec o click tasto Conferma (togliere il suo comportamento di defaul)
// Mostra i numeri inseriti correttamente
// BONUS: validazione 
function countdownHandler() {
    // Decrementiamo il valore ad ogni ciclo
    countdownValue--;

    if (countdownValue >= 0) {
        // Finché siamo sopra o a zero, stampiamo il valore
        console.log(countdownValue);
    } else {
        // Quando arriviamo a -1, fermiamo il timer nelle Web API
        clearInterval(intervalId);
        console.log('Timer Terminato');
    }

    // Mostro il contdown nel paragrafo
    countdownElem.innerText = countdownValue;
}


// Funzione per svuotare gli input allo scadere del countdown o alla pressione di Conferma
function svuotaInput() {
    inputs.forEach(input => {
        input.value = ''; // Svuota la casella
    });
    console.log("Caselle liberate! Inserisci i numeri eletti");
}