/* Scrivi una funzione che accetti una stringa
 e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(word) {
    const vocali = 'aeiou';
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i])) {
            count++;
        }
    }

    return count;
}   


// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);
console.log(risultato); 

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
