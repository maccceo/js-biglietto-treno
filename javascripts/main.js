// chiedere all’utente il numero di chilometri e l’età
// calcolare il prezzo totale definito in base ai km (0.21 €cent al km)
// applicare sconto del 20% per i minorenni e del 40% per gli over 65

var distance, age, unitPrice, subtotal, netPrice;

// chiedi km e età e converti l'input in numero
distance = parseInt(prompt("Benvenuto, quanti km devi viaggiare?"));
age = parseInt(prompt("Quanti anni hai?"));

// calcola costo in base ai km
unitPrice = 0.21;
subtotal = distance * unitPrice;

// verifica se si può applicare sconto
if (age < 18) {
	netPrice = subtotal - (subtotal/5);			//sconto 20% minorenni
	console.log("Casistica <18 , sconto di €", subtotal/5);
} else if (age > 65) {
	netPrice = subtotal - (subtotal/2.5);		//sconto 40% over 65
	console.log("Casistica >65, sconto di €", subtotal/2.5);
} else {
	netPrice = subtotal;						//nessuno sconto
	console.log("Niente sconto età");
}

//visualizza prezzo
document.getElementById("price").innerHTML = netPrice.toFixed(2);		//arrotondato a 2 decimali