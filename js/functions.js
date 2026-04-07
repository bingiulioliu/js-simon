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
}


