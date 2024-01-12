//definisco tre variabili (3 lati) e gli assegno dei valori
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

var s = (side1 + side2 + side3) / 2; //calcolo la metà del perimetro della figura geometrica

// uso la formala di Heron per calcolare l'area del triangolo
//uso Math.sqrt che una libreria integrata in js che consente di mettere la formula passata sotto radice
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

//stampo l'area con console.log
console.log(area);
