// Il programma dovrà chiedere all’utente il numero di chilometri e l’età
// dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65.

var distance, age, subtotal, finalPrice;

// chiedi km e età
distance = prompt("Salve, quanti km deve viaggiare?");
age = prompt("Quanti anni ha?");

// calcola costo in base ai km
subtotal = distance * 0.21;
console.log(subtotal);

// verifica se si può applicare sconto
if (age < 18) {
	finalPrice = subtotal - (subtotal/5);		//sconto 20% minorenni
} else if (age > 65) {
	finalPrice = subtotal - (subtotal/2.5);		//sconto 40% over 65
} else {
	finalPrice = subtotal;						//nessuno sconto
}

//visualizza prezzo
console.log(finalPrice);