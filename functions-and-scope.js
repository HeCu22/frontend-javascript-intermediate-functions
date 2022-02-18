// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// /* Opdracht  1: Cum Laude */
// /* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6


let aantal = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        aantal++;
    }
}
console.log("Cum Laude", aantal);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


function getCumlaude(grades) {
    let nrCumlaude = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            nrCumlaude++;
        }
    }
    return nrCumlaude;
}

// * de waardes als een reeks getallen tussen blokhaken meegeven;
let uitkomst = getCumlaude(grades);
console.log(uitkomst);
uitkomst = getCumlaude([6, 4, 5]);
console.log(uitkomst);
uitkomst = getCumlaude([8, 9, 4, 6, 10]);
console.log(uitkomst);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// stap1: totaal van de waardes bepalen en deze delen door het aantal waardes.
let totaal = 0;
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// stap2 de cijfers in de array optellen.
for (let i = 0; i < grades.length; i++) {
    totaal = totaal + grades[i];
}
console.log("Totaal", totaal);
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// door de property length van de array te gebruiken
const gemiddelde = totaal / grades.length;
// Log het antwoord in de terminal.
console.log("Gemiddelde:", gemiddelde);
// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
function averageGrade(grades) {
    let totaal = 0;
    for (let i = 0; i < grades.length; i++) {
        totaal = totaal + grades[i];
    }
    return totaal / grades.length;
}

let gemiddeldeWaarde = averageGrade(grades);
console.log('function', gemiddeldeWaarde);

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
gemiddeldeWaarde = averageGrade([6, 4, 5]);
console.log('xxxx', gemiddeldeWaarde);
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
gemiddeldeWaarde = averageGrade([8, 9, 4, 6, 10, 3]);
console.log('xxxx', gemiddeldeWaarde);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
restWaarde = (gemiddeldeWaarde * 10000 % 100) / 10000;
console.log("restwaarde", restWaarde);
// afronden op hondersten;
let nieuwGemiddelde = (gemiddeldeWaarde - restWaarde) * 100;
if (restWaarde >= 0.0044444444) {
    nieuwGemiddelde++;
} else {
    console.log('else');
}
nieuwGemiddelde = nieuwGemiddelde / 100;
console.log('nieuw: ', nieuwGemiddelde);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
let hoogsteWaarde = 0;
for (let i = 0; i < grades.length; i++) {

// * Op welke conditie moet ik checken?
    if (grades[i] > hoogsteWaarde) {

// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
        hoogsteWaarde = grades[i];
    }

// Log het antwoord in de terminal.
}
console.log(hoogsteWaarde);

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function getHoogste(grades) {
    let hoogsteWaarde = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > hoogsteWaarde) {
            hoogsteWaarde = grades[i];
        }
    }
    return hoogsteWaarde;
}
const hoogsteCijfer = getHoogste(grades);


console.log("Hoogste", hoogsteCijfer);
console.log(getHoogste([6, 4, 5]));
console.log(getHoogste([8, 9, 4, 6, 10]));