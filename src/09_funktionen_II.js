

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/


function add(a,b){
	return a + b;
}

function substract(a,b){
	return a - b;
}

function multiply(a,b){
	return a * b;
}

output(division(3,2));
output(division(3,0));
function division (a,b){

	if (b != 0) {
		return a / b;
	} else {
		return "Teilen durch 0 nicht möglich";
	}
	
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  