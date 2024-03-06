
let cislo1 = Number(prompt("Zadej první číslo"));
let cislo2 = Number(prompt("Zadej druhé číslo"));
let cislo3 = Number(prompt("Zadej třetí číslo"));

function vratMaxCislo(cislo1, cislo2, cislo3) {
    if (cislo1 >= cislo2 && cislo1 >= cislo3) {
        return cislo1;
    } else if (cislo2 >= cislo1 && cislo2 >= cislo3) {
        return cislo2;
    } else {
        return cislo3;
    }
}

let maxCislo = vratMaxCislo(cislo1, cislo2, cislo3);
document.body.innerHTML = ("Největší číslo je: " + maxCislo);