/* Scrivi una funzione che accetti un'array di stringhe e 
una lettera e restituisca un array contenente solo le parole che iniziano con 
quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let lettera = 'A';

// Dichiara la funzione qui.
function filtraIniziali(names, lettera) {
    const risultati = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === lettera) {
            risultati.push(names[i]);
        }
    }

    return risultati;
}   
// Invoca la funzione qui e stampa il risultato in console
const risultato = filtraIniziali(names, 'A');
console.log(risultato); 


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
