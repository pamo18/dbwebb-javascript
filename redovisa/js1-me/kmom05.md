##Kmom05

Nu har jag gjort klart kmom05, vilket handlar om DOM, Document Object Model.  DOM är en programmerings interface för HTML och XML dokument.  Genom att kommunicera med en webbsidas DOM kan vi påverka element genom att tex. ändra storlek på en ”div”, ändra färg, flytta element osv.  I tidigare kursmoment har jag jobbat med sidans DOM och med hjälp av Eventlyssnare har jag kunnat ändra ett element när användaren klickar på en specifik knapp eller klickar på ett specifikt område.  Det finns mycket man kan göra och det är detta som är roligast inom webbprogrammering tycker jag.

Kursmomentet handlade om att göra många olika uppgifter på en låda, som att duplicera den eller ändra färg.  Jag skapade funktioner för varje uppgift som är kopplade till en eventlyssnare som känner av olika tangenter eller enkla och dubbla klickar.  Uppgifterna gick bra och var roliga, några tog lite längre tid men jag gjorde alla och alla fungerar som jag kunde tolka från instruktionerna.  En av de sista uppgifterna handlade om att  animera med en timer för att byta färg, form och position.  Här användande jag ”setInterval()” för att köra funktionen som gör ändringarna 5 gånger på 1 sekund, där en counter räknas till 5 och då stängs av setInterval() genom ”clearInterval()” funktionen.

Till sista uppgiften skapade jag en eventlyssnare för knappen ”f”, vilket gör att alla valda lådor blinker svart under 3 sekunder.  Jag utnyttjade ”classList.toggle()” och ”setIntervall()” funktionen för denna uppgift, vilket kändes som en lagom funktion att skapa.

Jag har tittat en del på Crockfords videor och dessa är väldigt intressanta just när det gäller historiken bakom JavaScript, samt programmering generellt.  Jag ska kolla färdigt inom kort.

Jag hade gärna gjort extra uppgiften ”Memory-spel” med mina flaggor men eftersom DOM uppgiften tog längre tid än vanligt och jag har mycket att göra i Designkursen så gör jag detta längre fram istället.

Min TIL för detta kursmoment är hur man kan använda funktioner setIntervall() och setTimer() för att skapa tidsbestämda events, detta kommer bli en viktig funktion framöver tror jag.
