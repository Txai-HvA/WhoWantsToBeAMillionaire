var startScherm = document.querySelector('.startScherm');
var startKnop = document.querySelector('#startKnop');
var opgeefKnop = document.querySelector('#opgeefKnop');
var resetScherm = document.querySelector('.resetScherm');
var resetText = document.querySelector('.resetScherm p');
var resetKnop = document.querySelector('#resetKnop');

//antwoordKnoppen array
var antwoordKnoppen = 
    [
        document.querySelector('#antwoordKnop1'), 
        document.querySelector('#antwoordKnop2'), 
        document.querySelector('#antwoordKnop3'), 
        document.querySelector('#antwoordKnop4')
    ];

var vraagText = document.querySelector('.vraag p');
var vraagAfbeelding = document.querySelector('.vraagAfbeelding');
var timer = document.querySelector('.timer');


var liArray = document.querySelectorAll("li");

//Posities voor de antwoord knoppen
var posities = ['linksBoven', 'rechtsBoven', 'linksOnder', 'rechtsOnder']; 

//Hulp lijn knoppen
var fiftyFiftyKnop = document.querySelector('#fiftyFiftyKnop');
var phoneKnop = document.querySelector('#phoneKnop');
var audienceKnop = document.querySelector('#audienceKnop');

//Weergave van de Beller hulplijn
var beller = document.querySelector('#beller');
var bellerText = document.querySelector('#beller p');

var audienceAntwoorden = [
    document.querySelector('#antwoordA'),
    document.querySelector('#antwoordB'),
    document.querySelector('#antwoordC'),
    document.querySelector('#antwoordD')  
];

var audienceAntwoordenText = [
    document.querySelector('#antwoordAText'),
    document.querySelector('#antwoordBText'),
    document.querySelector('#antwoordCText'),
    document.querySelector('#antwoordDText')
]; 

// booleans om bij te houden welke hulplijnen zijn gebruikt
var fiftyFiftyGebruikt = false;
var phoneGebruikt = false;
var audienceGebruikt = false;

// Audio
var letsPlayMusic = document.getElementById("letsPlayMusic"); 
var correctMusic = document.getElementById("correctMusic"); 
var loseMusic = document.getElementById("loseMusic"); 
var fiftyFiftyMusic = document.getElementById("fiftyFiftyMusic");
var phoneMusic = document.getElementById("phoneMusic");
var audienceMusic = document.getElementById("audienceMusic");

// Audio volume
correctMusic.volume = 0.4; 
loseMusic.volume = 0.4; 
fiftyFiftyMusic.volume = 0.4; 



//Makkelijke vragen lijst
var makkelijkeVragen = [
    {
        vraag: "How many soccer players should each team have on the field at the start of each match?",
        afbeelding: "soccer.jpg",
        goedeAntwoord: "11",
        antwoord2: "12",
        antwoord3: "10",
        antwoord4: "13"
    },
    {
        vraag: "What kind of fruit is a braeburn?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Apple",
        antwoord2: "Banana",
        antwoord3: "Strawberry",
        antwoord4: "Peach"
    },
    {
        vraag: "What catastrophically collided with the Titanic in 1912?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "An iceberg",
        antwoord2: "A whale",
        antwoord3: "A cruise ship",
        antwoord4: "A submarine"
    },
    {
        vraag: "What shape does a dartboard have?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Circle",
        antwoord2: "Square",
        antwoord3: "Rectangular",
        antwoord4: "Triangular"
    },  
    {
        vraag: "A papaya is a tropical...",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Fruit",
        antwoord2: "Storm",
        antwoord3: "Fish",
        antwoord4: "Dance"
    }
];

//Gemiddelde vragen lijst
var gemiddeldeVragen = [
    {
        vraag: "What is the capital of Australia?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Canberra",
        antwoord2: "Sydney",
        antwoord3: "Melbourne",
        antwoord4: "Brisbane"
    },
    {
        vraag: "When did Steve Jobs pass away?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "2011",
        antwoord2: "2012",
        antwoord3: "2013",
        antwoord4: "2014"
    },
    {
        vraag: "How many bones are there in a human body?",
        afbeelding: "skeletons.gif",
        goedeAntwoord: "206",
        antwoord2: "204",
        antwoord3: "202",
        antwoord4: "200"
    },
    {
        vraag: "Which battles took place between the Royal Houses of York and Lancaster?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "War of the Roses",
        antwoord2: "Thirty Years War",
        antwoord3: "Hundred Years War",
        antwoord4: "English Civil War"
    }, 
    {
        vraag: "The word 'aristocracy' literally means power in the hands of whom?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "The best",
        antwoord2: "The few",
        antwoord3: "The barons",
        antwoord4: "The rich"
    },
    {
        vraag: "Which of the following is there more of on Earth?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Plankton",
        antwoord2: "Sheeps",
        antwoord3: "Ants",
        antwoord4: "Humans"
    },
    {
        vraag: "Seaweed is a form of what?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Algae",
        antwoord2: "Bacteria",
        antwoord3: "Fungus",
        antwoord4: "Sea urchin"
    },
    {
        vraag: "For over 50 years, what treat was tradionally included in packs of baseball trading card?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Bubblegum",
        antwoord2: "Chocolate wafer",
        antwoord3: "Gummi bear",
        antwoord4: "Mint stick"
    },
    {
        vraag: "In the 2000's movie 'Gladitor', Russell Crowes character is a gladiator under what Roman emperor?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Commodus",
        antwoord2: "Titus",
        antwoord3: "Nero",
        antwoord4: "Claudius"
    },
    {
        vraag: "In 1911, what did explorer Hiram Bingham discover between two peaks in the Andes mountains",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "City of Machu Picchu",
        antwoord2: "Frozen woolly mammoth",
        antwoord3: "Lake Tibicaca",
        antwoord4: "Meteorite from Mars"
    }
];

//Moeilijke vragen lijst
var moeilijkeVragen = [
    {
        vraag: "The Earth is approximately how many km away from the Sun?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "149.668.992 km",
        antwoord2: "14.966.899,2 km",
        antwoord3: "62.764.416 km",
        antwoord4: "310.603.392 km"
    },
    {
        vraag: "'Nephelococcygia' is the practice of doing what?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Finding shapes in clouds",
        antwoord2: "Sleeping with your eyes open",
        antwoord3: "Breaking glass with your voice",
        antwoord4: "Swimming in freezing water"
    },
    {
        vraag: "Which insect inspired the term 'computer bug'?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Moth",
        antwoord2: "Beetle",
        antwoord3: "Fly",
        antwoord4: "Cockroach"
    },
    {
        vraag: "Which man does NOT have a chemical element named after him?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Isaac Newton",
        antwoord2: "Enrico Fermi",
        antwoord3: "Albert Einstein",
        antwoord4: "Niels Bohr"
    },
    {
        vraag: "Which scientific unit is named after an Italian nobleman?",
        afbeelding: "miljonairs.png",
        goedeAntwoord: "Volt",
        antwoord2: "Ohm",
        antwoord3: "Pascal",
        antwoord4: "Hertz"
    }
];


//Vragen array met de volgorde: vraag, afbeelding, goed antwoord, fout antwoord, fout antwoord, fout antwoord
var vragen = [];

//prijzenLijst DOM object en prijzen array
var prijzenLijst = document.querySelector('ol');
var prijzen = [  
    "€50,-",
    "€100,-",
    "€150,-",
    "€250,-",
    "€500,-",
    "€1.000,-",
    "€2.000,-",
    "€4.000,-",
    "€8.000,-",
    "€16.000,-",
    "€32.000,-",
    "€64.000,-",
    "€125.000,-",
    "€250.000,-",
    "€1.000.000,-"   
];

var vraagCounter = 0; //vraag counter op 0, dus de eerste vraag wordt gepakt


//Start functie
function start()
{

    //Husselt alle vragenlijsten
    shuffle(makkelijkeVragen);
    shuffle(gemiddeldeVragen);
    shuffle(moeilijkeVragen);

    for(i = 0; i < 5; i++)
    {
        vragen.push(makkelijkeVragen[i]);
    }
    for(i = 0; i < 5; i++)
    {
        vragen.push(gemiddeldeVragen[i]);
    }
    for(i = 0; i < 5; i++)
    {
        vragen.push(moeilijkeVragen[i]);
    }

    //Verberg het start scherm
    resetScherm.classList.add("verbergResetScherm");
    startScherm.hidden = true;
    startScherm.classList.remove("startScherm");

    //Prijzen worden weergeven in de ordered list
    for(i = 0; i < 15; i++)
    {
        if(i == 4 || i == 9 || i == 14)
        {
            //Check points li's krijgen een andere class
            prijzenLijst.innerHTML += `<li class="checkPoint">` + prijzen[i] +`</li>`;
        }
        else
        {
            prijzenLijst.innerHTML += `<li>` + prijzen[i] +`</li>`;
        }
    }
    
    //Speel muziek af
    letsPlayMusic.play();

    //Weergeeft vraag, antwoorden en afbeelding
    weergeefVraag();

    //Husselt de knoppen posities
    husselKnoppen(); 

    //Wacht tot dat het muziekje afgelopen is om de timer te starten
    setTimeout(startTimer, 4700); 
}

//Weergeeft vraag, antwoorden en afbeelding
function weergeefVraag()
{
    //Gebruikt vraagCounter als index welke vraag er weergeven moet worden
    vraagText.textContent  = vragen[vraagCounter].vraag;
    antwoordKnoppen[0].textContent = vragen[vraagCounter].goedeAntwoord;
    antwoordKnoppen[1].textContent = vragen[vraagCounter].antwoord2;
    antwoordKnoppen[2].textContent = vragen[vraagCounter].antwoord3;
    antwoordKnoppen[3].textContent = vragen[vraagCounter].antwoord4;
    vraagAfbeelding.src = 'images/' + vragen[vraagCounter].afbeelding;
}

//Husselt de posities van de knoppen
function husselKnoppen()
{   
    //Wisselt de knop posities array
    shuffle(posities);
    
    for(i = 0; i < 4; i++)
    {
        //Verwijderd de vorige posities van alle knoppen
        antwoordKnoppen[i].classList.remove('linksBoven', 'rechtsBoven', 'linksOnder', 'rechtsOnder');
        //Voegt de niewe gehusselde posities toe aan alle knoppen
        antwoordKnoppen[i].classList.add(posities[i]);
    }
}

//Shuffle functie
//Bron: https://www.jstips.co/en/javascript/shuffle-an-array/
function shuffle(lijst)
{
    var i, j, temp; 
    //Deze loop shuffled van het laatste item tot het eerste item in de array lijst
    //Deze loop gaat net zo lang door tot dat i niet hoger is dan 0
    for (i = lijst.length - 1; i > 0; i--) 
    {
        //j krijg een afgeronde (willekeurig waarde maal de waarde van i + 1)
        j = Math.floor(Math.random() * (i + 1));
        //lijst i wordt tijdelijk opslagen in temp
        temp = lijst[i];
        // lijst i wordt vervangen door lijst j
        lijst[i] = lijst[j];
        //lijst j wordt temp, de vorige waarde van lijst i
        lijst[j] = temp;
    }    
}


var stopTimer = false;
//Aantal seconden (-1) die je hebt om een vraag te beantwoorden
var timerSec = 11;

// Start Timer functie
//Bron https://www.w3schools.com/js/js_timing.asp
function startTimer()
{
    var timerFunction = setInterval(
        function myTimer() 
        {
            if (stopTimer == true)
            {
                //Als boolean stopTimer true is, wordt de timer gestopt
                this.clearInterval(timerFunction);
            }
            else
            {
                //Elke seconde gaat timerSec omlaag
                timerSec--;
                //En wordt de breedte van de timer kleiner
                timer.style.setProperty("width", timerSec + "0%", "");
                //Hoeveel tijd je nog over hebt wordt weergeven op de pagina
                timer.textContent = timerSec;

                //Als timerSec 0 is, stopt de timer en stopt het spel
                if(timerSec == 0)
                {
                    this.clearInterval(timerFunction);
                    klikFoutAntwoord();
                }   
            }
        } 
      , 1000);//Om de 1000 milliseconden (1 seconde), gaat de functie myTimer af
}


// Als je op het goede antwoord klikt
function klikGoedAntwoord() 
{
    //stopTimer wordt true, zodat de timer stopt
    stopTimer = true;
    //Timer wordt gereset
    timerSec = 11;
    timer.style.setProperty("width", timerSec + "0%", "");

    //Knoppen worden tijdelijk gedisabled en de muziek wordt gestopt, zodat je niet op andere knoppen kan klikken
    disableKnoppen();
    stopMuziek();
    
    //Als de laatste vraag goed is heb je gewonnnen
    if(vraagCounter == 14)
    {
        liArray[14].classList.add('huidigBedrag');
        vraagText.textContent = "You won 1.000.000!"  ///////////
        //Spel stopt
    }
    else
    {
        //Speel correctMusic af
        correctMusic.play();
        setTimeout(updateBedrag, 1600); // Wacht 1600 miliseconden voor dat je het goede antwoord groen maakt, zodat het timed met de muziek
    }
}

//Stop alle muziek
function stopMuziek()
{   
    letsPlayMusic.pause();
    letsPlayMusic.currentTime = 0;
    fiftyFiftyMusic.pause();
    fiftyFiftyMusic.currentTime = 0;
    phoneMusic.pause();
    phoneMusic.currentTime = 0;
    audienceMusic.pause();
    audienceMusic.currentTime = 0;
}

//Update het huidige bedrag
function updateBedrag()
{
    //Maak het goede antwoord groen
    antwoordKnoppen[0].classList.add('goedAntwoord')
    
    //Geeft het huidig bedrag aan
    var liArray = document.querySelectorAll("li");
    liArray[vraagCounter].classList.add('huidigBedrag');

    setTimeout(volgendeVraag, 5400); // Wacht 5400 miliseconden tot dat correctMusic klaar is met afspelen
}

//Toont de volgende vraag
function volgendeVraag()
{
    //Verberg de beller hulplijn
    beller.hidden == false;
    beller.style.setProperty("display", "none", "");

    //Verberg de publiek hulplijn
    publiek.hidden == false;
    publiek.style.setProperty("display", "none", "");

    //Maak alle antwoordknoppen zichtbaar en de antwoordknoppen en hulplijn knoppen (als dat nodig is)
    maakAlleAntwoordenZichtbaar();
    enableKnoppen();
    antwoordKnoppen[0].classList.remove('goedAntwoord')

    //volgende vraag index
    vraagCounter++; 

    //Weergeeft de volgende vraag, antwoorden en afbeelding
    weergeefVraag();
    //Speelt letsPlayMusic af
    letsPlayMusic.play();

    // Husselt de knoppen
    husselKnoppen(); 
    //Zorgt ervoor dat de timer weer kan starten
    stopTimer = false;
    setTimeout(startTimer, 4700);//Start na 4700 milliseconden de timer, dus pas als letsPlayMusic klaar is
}

//Enabled de knoppen
function enableKnoppen()
{
    //Maak knoppen enabled
    for(i = 0 ; i < 4; i++)
    {
        antwoordKnoppen[i].disabled = false; 
    }
    
    //Als de hulplijn niet is gebruikt, maak ze enabled
    if(fiftyFiftyGebruikt == false)
    {
        fiftyFiftyKnop.disabled = false;
    }
    if(phoneGebruikt == false)
    {
        phoneKnop.disabled = false;
    }
    if(audienceGebruikt == false)
    {
        audienceKnop.disabled = false;
    }

    opgeefKnop.disabled = false;
}

//Disabled alle knoppen
function disableKnoppen()
{
    //Maak alle antwoord knoppen disabled
    for(i = 0 ; i < 4; i++)
    {
        antwoordKnoppen[i].disabled = true; 
    }
    //Maak alle hulplijn knoppen disabled
    fiftyFiftyKnop.disabled = true;
    phoneKnop.disabled = true;
    audienceKnop.disabled = true;
    opgeefKnop.disabled = true;
}

// Als je op het fout antwoord klikt
function klikFoutAntwoord() 
{
    //Laat het goede antwoord zien waar je op had moeten klikken
    antwoordKnoppen[0].classList.add('goedAntwoord')
    //Stop de timer
    stopTimer = true;
    //Disabled alle knoppen
    disableKnoppen();
    //Stop alle muziek
    stopMuziek();
    //Speelt loseMusic af
    loseMusic.play();

    if(vraagCounter > 9)
    {
        //Als je een vraag fout hebt na de 10de vraag dan win je de prijs op index 9
        vraagText.textContent = "You won " +  prijzen[9];
    }
    else if(vraagCounter > 4)
    {
        //Als je een vraag fout hebt voor de 10de vraag dan win je de prijs op index 4
        vraagText.textContent = "You won " +  prijzen[4];
    }
    else if(vraagCounter < 4)
    {
        //Als je een vraag fout hebt voor de 5de vraag, dan win je niks
        vraagText.textContent = "You lost!";
    }
}

// Maak Knop 2 rood
function maakKnop2Rood() 
{
    antwoordKnoppen[1].classList.add('foutAntwoord');
    klikFoutAntwoord();
}

// Maak Knop 3 rood
function maakKnop3Rood()
{
    antwoordKnoppen[2].classList.add('foutAntwoord');
    klikFoutAntwoord();
}

// Maak Knop 4 rood
function maakKnop4Rood()
{
    antwoordKnoppen[3].classList.add('foutAntwoord');
    klikFoutAntwoord();
}

//Verbergt 2 antwoorden en laat 1 goed en 1 fout antwoord zichtbaar
function gebruikFiftyFifty()
{
    fiftyFiftyMusic.play();

    //Bron: JavaScript & jQuery - interactive front-end web development - Jon Duckett
    //Maakt een willkeurig getal aan van 1 tot 3
    var knopDieOverblijft = Math.floor((Math.random() * 3) + 1);

    if(knopDieOverblijft == 1)
    {
        //Als het getal 1 is, verberg antwoordKnop 3 en 4
        antwoordKnoppen[2].hidden = true;
        antwoordKnoppen[3].hidden = true;
    }
    else if (knopDieOverblijft == 2)
    {
        //Als het getal 2 is, verberg antwoordKnop 2 en 4
        antwoordKnoppen[1].hidden = true;
        antwoordKnoppen[3].hidden = true;
    }
    else
    {
        //Als het getal 3 is, verberg antwoordKnop 2 en 3
        antwoordKnoppen[1].hidden = true;
        antwoordKnoppen[2].hidden = true;
    }

    //Disabled de fiftyFiftyKnop en maakt het rood, zodat je het niet nog een keer kan gebruiken
    fiftyFiftyKnop.disabled = true;
    fiftyFiftyKnop.classList.add("disabledKnop");
    fiftyFiftyGebruikt = true;
}

//Bel een vriend die het goede antwoord geeft, tenzij het na vraag 9 is
function gebruikPhone()
{
    stopMuziek();
    phoneMusic.play();

    //Toont het beller DOM object
    beller.hidden == true;
    beller.style.setProperty("display", "block", "");

    //Bron: JavaScript & jQuery - interactive front-end web development - Jon Duckett
    //Maakt een willkeurig getal aan van 0 tot 1 die aangeeft of de beller het antwoord weet
    var bellerWeetHet = Math.floor((Math.random() * 2));

    //Als weetHijHetAntwoord 0 is OF vraag counter is lager dan 9, dan krijg het het goede antwoord
    if(bellerWeetHet == 0 || vraagCounter < 10)
    {
        bellerText.textContent = "Ik denk dat het antwoord " + antwoordKnoppen[0].textContent + " is.";
    }
    else
    {
        //Anders wordt een willekeurig fout antwoord gegeven
        var foutAntwoord = Math.floor((Math.random() * 3) + 1);
        bellerText.textContent = "Ik denk dat het antwoord " + antwoordKnoppen[foutAntwoord].textContent + " is.";
    }
    
    //Disabled de phoneKnop en maakt het rood, zodat je het niet nog een keer kan gebruiken
    phoneKnop.disabled = true;
    phoneKnop.classList.add("disabledKnop");
    phoneGebruikt = true;
}


//Bron: https://stackoverflow.com/questions/19277973/generate-4-random-numbers-that-add-to-a-certain-value-in-javascript/19278123
function randomNumberBetween(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Laat het publiek je helpen achter het goede antwoord te komen, tenzij het na vraag 9 is
function gebruikAudience()
{
    stopMuziek();
    audienceMusic.play();

    //Toont het audience DOM object
    publiek.hidden == true;
    publiek.style.setProperty("display", "block", "");

    //Bron: https://stackoverflow.com/questions/19277973/generate-4-random-numbers-that-add-to-a-certain-value-in-javascript/19278123
    var max = 100;
    var randomNumbers = [];
    //Genereert 4 willekeurig getallen die samen 100 vormen
    randomNumbers[0] = randomNumberBetween(1, max - 3);
    randomNumbers[1] = randomNumberBetween(1, max - 2 - randomNumbers[0]);
    randomNumbers[2] = randomNumberBetween(1, max - 1 - randomNumbers[0] - randomNumbers[1]);
    randomNumbers[3] = max - randomNumbers[0] - randomNumbers[1] - randomNumbers[2];

    //Als het vraag nummer onder de 10 is, krijgt het goeie antwoord altijd de meeste stemmmen
    if(vraagCounter < 10)
    {   
        //Bron: https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958
        //Normale sort methode sorteert alfabetisch, dus dan krijg je iets als: 1 10 2 3
        //daarom heb ik deze sort methode gebruikt, die sorteert van hoogste naar laagste getal
        //dus randomNumbers[0] heeft nu altijd het hoogste getal
        randomNumbers.sort((a,b)=>b-a);
        var temp;

        if(antwoordKnoppen[0].className == 'rechtsBoven')//Als het goede antwoord rechtsBoven staat
        {
            //Sla randomNumbers[0] tijdelijk op
            temp = randomNumbers[0];
            //Vervang randomNumbers[0] met randomNumbers[1]
            randomNumbers[0] = randomNumbers[1];
            //Stop de oude waarde van randomNumbers[0] in randomNumbers[1]
            randomNumbers[1] = temp;
        }
        else if(antwoordKnoppen[0].className == 'linksOnder')//Als het goede antwoord linksOnder staat
        {
            //Sla randomNumbers[0] tijdelijk op
            temp = randomNumbers[0];
            //Vervang randomNumbers[0] met randomNumbers[2]
            randomNumbers[0] = randomNumbers[2];
            //Stop de oude waarde van randomNumbers[0] in randomNumbers[2]
            randomNumbers[2] = temp;
        }
        else if(antwoordKnoppen[0].className == 'rechtsOnder')//Als het goede antwoord rechtsOnder staat
        {
            //Sla randomNumbers[0] tijdelijk op
            temp = randomNumbers[0];
            //Vervang randomNumbers[0] met randomNumbers[3]
            randomNumbers[0] = randomNumbers[3];
            //Stop de oude waarde van randomNumbers[0] in randomNumbers[3]
            randomNumbers[3] = temp;
        }
    }

    //Weergeeft het aantal stemmen per antwoord en veranderd de grafiek
    for(i = 0; i < 4; i++)
    {   
        audienceAntwoordenText[i].textContent = randomNumbers[i] + "%"; 
        audienceAntwoorden[i].style.setProperty("height",  (randomNumbers[i] * 3)  + "px", "");    
    }

    //Disabled de audienceKnop en maakt het rood, zodat je het niet nog een keer kan gebruiken
    audienceKnop.disabled = true;
    audienceKnop.classList.add("disabledKnop");
    audienceGebruikt = true;
}

//Maakt alle antwoord knoppen zichtbaar
function maakAlleAntwoordenZichtbaar()
{
    for(i = 1; i < 4; i++)
    {
        antwoordKnoppen[i].hidden = false;
    }
}

//Stopt het spel en laat zien met welke prijs je naar huis gaat
function opgeven()
{
    //Stop de timer
    stopTimer = true;

    stopMuziek();
    //Laat het resetScherm zien
    resetScherm.hidden = false;
    resetScherm.classList.remove("verbergResetScherm");
    if(vraagCounter == 0)
    {
        //Als je nog niet eens een vraag hebt beantwoordt en opgeeft
        resetText.textContent = "You didn't even try!";
    }
    else
    {
        resetText.textContent = "You won " + liArray[ vraagCounter - 1 ].textContent + "!";//ERROR
    }
}

//Reset het spel
function reset() 
{
    location.reload(); 
}

//eventListeners
startKnop.addEventListener('click', start);
opgeefKnop.addEventListener('click', opgeven);
resetKnop.addEventListener('click', reset);
antwoordKnop1.addEventListener('click', klikGoedAntwoord);
antwoordKnop2.addEventListener('click', maakKnop2Rood);
antwoordKnop3.addEventListener('click', maakKnop3Rood);
antwoordKnop4.addEventListener('click', maakKnop4Rood);
fiftyFiftyKnop.addEventListener('click', gebruikFiftyFifty);
phoneKnop.addEventListener('click', gebruikPhone);
audienceKnop.addEventListener('click', gebruikAudience);