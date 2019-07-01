// chiedere all’utente il numero di chilometri e l’età
// calcolare il prezzo totale definito in base ai km (0.21 €cent al km)
// applicare sconto del 20% per i minorenni e del 40% per gli over 65

var distance, age, subtotal, finalPrice;

// chiedi km e età
distance = prompt("Benvenuto, quanti km devi viaggiare?");
age = prompt("Quanti anni hai?");

// calcola costo in base ai km
subtotal = distance * 0.21;

// verifica se si può applicare sconto
if (age < 18) {
	finalPrice = subtotal - (subtotal/5);		//sconto 20% minorenni
} else if (age > 65) {
	finalPrice = subtotal - (subtotal/2.5);		//sconto 40% over 65
} else {
	finalPrice = subtotal;						//nessuno sconto
}

//visualizza prezzo
document.getElementById("price").innerHTML = finalPrice.toFixed(2);		//arrotondato a 2 decimali