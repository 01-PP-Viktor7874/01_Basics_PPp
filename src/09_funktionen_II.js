

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/
const ERROR_STR_DIV ="Teilen durch 0 nicht möglich"

function add(a,b){
	return a + b;
}

function substract(a,b){
	return a - b;
}

function multiply(a,b){
	return a * b;
}

//output(division(3,2));
//output(division(3,0));
function division (a,b){

	if (b = 0) {
		return ERROR_STR_DIV;	 //Ausnahme
	}
	return a/b; //Regel1
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}

function calculator (a,b,op){ //Was soll gemacht werden ?
	switch(op){
		case "+": 
           return add(a,b); //Addition

		case "-": 
          return substract(a,b); //Subtraktion

		case "*": 
          return multiply(a,b); //Multiplikation
		case "/": 
		case ":": 
		return division(a,b); //Division

	default:
		 return"Fehler";
	}
}

//Wie soll die Aufgabe gelöst werden ?