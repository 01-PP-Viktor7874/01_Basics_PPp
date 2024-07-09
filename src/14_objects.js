/***** Erinnerung: Arrays *******/

let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/


let person = {
               firstName:"Marco",
               familyName:"Grochowiak",
               salary:[120000, 160000],
               permission: true,
               sayHello: function(){
                            // return "Hallo!"
                            return "Hallo ich bin Marco" + this.firstName;
               }

};

output(person);
output(person.firstName);
output(person.familyName);
output(person.salary[1]);
output(person.permission);
output(person.sayHello());

const txt = person.sayHello() + ", ich bin " + person.firstName +
            " und verdiene " + person.salary[1] + " p.a."


// Modul: Ausgabe | Test
output(txt);

function output(outputData) {
    console.log(outputData);
}