// upg 1
var namn = "Johanna"; // ger namn till variabeln och anger värde
var efternamn = "Ståhlgren";
var epostadress = ", johst2012@gmail.com";

console.log(namn, efternamn, epostadress);

//upg 2
let num1 = 5; // variabel nummer 
let num2 = 6; // variabel nummer 
let totalsum; // // variabel för summa

totalsum = num1 * num2 // variabel för summa

console.log(totalsum); // hämtar totalsum variabeln

// upg 3
let colors = ["Röd", "Grön", "Svart", "Lila","Blå"]; // Array med värden

colors.push("Gray"); // Adderar till arrayn
colors.push("white"); // Adderar till arrayn

for(let i=0; i < colors.length; i++) { // Loopa genom arryen och skriv ut till skärm
    console.log(colors[i]);
}

console.log ("antal värden:",colors.length); // skriver ut antal värden sist 

//upg 4
let nummer = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]; // let används om du vill använda en variabel innom ett block {}, men kan ej kommas åt utanför

let udda = nummer.filter(n => n%2) // filter används för att skapa en ny array med de funktion man fyller i. 

console.log(udda);

//upg 5
let number = 5;      // chose number (5) to be in thr multiplication

for (let i=1; i<=10; i++){  // for each number add one up to 10
console.log(i + " * " + number + " = " + number*i);   // multiply the "number with the rising number"
}
 
//upg 6
var veckansdagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"] // visar en array med alla dagar i veckan

var datum = new Date() // variabel för datum om man vill lägga till
var dagarnummer = datum.getDay() // variabel för dagarnas nummer
var dagnamn = veckansdagar[dagarnummer] // variabel för vad dagars nummer ska ha för veckans dagar före


var timmar = (new Date()).getHours(); // variabel för timmar
var minuter = (new Date()).getMinutes();// variabel för minuter
var sekunder = (new Date()).getSeconds();// variabel för sekunder

console.log("Idag är det:", dagnamn); // dagnamn visas
console.log("Aktuell tid är:", timmar, ":", minuter,":", sekunder); // visar tid i timmar, minuter och sekunder

//upg 7
function ändratid(nummer) 
 { 
  var timmar = Math.floor(nummer / 60); // math.floor tar det närmsta mindre än eller lika med nummer/60.
  var minuter = nummer % 60; // dela på och gör minuter 
  return timmar + ":" + minuter; // stoppa funktionen med return och lägg ihop timmar + minuter.
}

console.log(ändratid(700)); // nummer som skall omvandlas skrivs in här

//upg 8
function long_string(arr) { // namn för funktionen med ()
    let longest = arr[0]; // 
    for (let i = 1; i < arr.length; i++) {  // lägger en om de är mer än en 
        if (arr[i].length > longest.length) {
            longest = arr[i]; // 
        }
    }
    return longest; // stoppas när funktionen är klar. 
}

let arr = ["Orebro", "Sundsvall", "Hudriksvall", "Goteborg"];

console.log(long_string(arr));

//upg 9
var stjarna = "";
var femstjarna = false; // om det blir mer än 5 kommer denna variabel stå istället

for (var i = 0; i < 9; i++) {
    if (femstjarna == false) {  // visa denna om falskt
      stjarna = stjarna + "*";

    if (stjarna.length == 5) { // om stjarna kommer upp till 5
                                
      femstjarna = true; // denna körs en gång tills den är falsk
      console.log(stjarna);  
    }

  }
  if (femstjarna == true) {            //denna körs true medans vi har 5 st *

    stjarna = stjarna.slice(0, -1) // slice tar bort -1 till 0 
  }
  console.log(stjarna);
}
