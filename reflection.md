# Reflektioner utifrån Clean Code

## L3-beskrivning, krav & vision

### Vision

PhotoAssistant is a web app for uploading, filtering and displaying photos in a grid gallery format. PhotoAssistant's USP (unique selling point) and twist, which sets it apart from similar apps already in the market (such as Instagram), is that PhotoAssistant comes with an actual virtual assistant - an integrated AI chatbot (powered by chatGPT API) which will help the user in their photo editing process and work flow. Photo editing with an AI photo assistant will benefit users that are complete novices in photo editing (meaning that photo editing know-how won't be required to be able to create professionally color graded photos) and professional photographers and color graders. PhotoAssistant is meant to be a "playground" for novices and professionals alike where they can, with the help of the AI photo assistant, try out different photo filtering techniques.

### Krav

#### Funktionella krav

Det ska vara möjligt att:

* Ladda upp bilder som displayas i ett grid gallery-format
* Redigera bilder genom att applicera ett eller fler CSS-filter
* Spara filtrerade bilder
* Sortera bilder i alfabetisk ordning

#### Testfall

* Testa att ladda upp bilder (i olika filformat)
* Testa att filtrera en bild med ett filter
* Testa att filtrera en bild med multipla filter
* Testa att spara ned filtrerad bild
* Testa att sortera bilder
* Testa att displaya bilder i ett galleri av olika kolumnbredd

### Bakgrund och problembeskrivning

Fotoredigering är en konst som också kräver kunskap och erfarenhet kring bl. a. färglära (color grading). Problemet som PhotoAssistant-appen är tänkt att lösa är att förenkla fotoredigering, både för nybörjare och mer vana fotoredigerare.

### Användar/mål-grupper

Alla som är intresserade av och vill lära sig mer om fotoredigering, från nybörjare till mer vana.

### Beskriv konkurrerande och liknande system samt marknad

Instagram är en liknande app där användare kan ladda upp och lägga filter på bilder och som även har inspirerat PhotoAssistant-app. Det som särskiljer PhotoAssistant-app från appar såsom Instagram, och som är dess USP (Unique Selling Point), är den inbyggda AI fotoassistenten. Jag känner inte till någon annan app som har integrerat AI med det syftet och utifrån min egen bakgrund som frilansande fotograf så kan jag se att en app som PhotoAssistant kan fylla ett behov och att det kan finnas en marknad.

### Teknik

Vanilla JavaScript, HTML & CSS.

## Reflektioner (kring både L2 & L3) utifrån kapitlen i Clean Code

### Kapitel 2

Intention-revealing, problem domain names och avoid mental mapping är tre huvudprinciperna från kapitlet kring naming som jag upplever att jag har tagit till mig av allra mest och som jag även tänker går hand i hand med varandra. Ett exempel på detta är hur jag döpte om sortedImages-arrayen till alphabeticallySortedImages i refaktoreringen av L2 (se bild nedan) för att göra den mer "intention-revealing" och images skulle jag säga är en namngivning som tillhör både problem domain och solution domain och som inte kräver någon "mental mapping".

![Intention-revealing naming exempel](./imageExamples/Naming%20and%20comments%20refactoring%20example.png)

Detta av två anledningar; att göra namngivningen mer "intention-revealing" och även utifrån "pick one word per concept" då anledning nummer två är den princip som jag tycker att jag kämpar mest med. Det är svårt att komma på bra namn och att samtidigt hålla sig konsekvent, utan att hamnar i "don't repeat yourself"-träsket, särskilt (upplever jag det som) när koden växer både i omfattning men även i abstraktionsnivå (i mitt fall har jag skrivit både L2 och L3 på ett sätt där flera små funktioner delegerar vidare en uppgift i en abstraktionskedja).

När jag nu skriver det här och letar exempel i koden så inser jag att jag har lyckats vara mer konsekvent med namngivnignen än vad jag upplevde mig vara när jag kodade (med andra ord så har den clean code-principen gjort avtryck i mitt sätt att koda - rolig upptäckt då det är en av principerna jag kämpat mest med när det gäller just namngivning). Här är ett exempel på en konsekvent namngivning genom en abstraktionskedja från View via Controllers till en service:

![Pick one word per concept exempel steg 1 i view](./imageExamples/uploadPhoto%20in%20view.png)

![Pick one word per concept exempel steg 2 i view](./imageExamples/uploadPhoto%20in%20view2.png)

![Pick one word per concept exempel i controller (ControllerOrchestrator)](./imageExamples/uploadPhoto%20in%20controller.png)

![Pick one word per concept exempel i controller (PhotoGalleryController)](./imageExamples/uploadPhoto%20in%20galleryController.png)

![Pick one word per concept exempel i service (UploadService)](./imageExamples/uploadPhoto%20in%20uploadService.png)

Däremot hade UploadService kunnat ha en mer "intention-revealing" namngivning, såsom t.ex. "ImageUploadService".

### Kapitel 3

De huvudprinciper som jag tar med mig från kapitlet som handlar om funktioner är att de ska vara små - gärna så små det bara går ("Small"), att de ska göra en sak/ha ett ansvarsområde ("Do one thing") och att hålla sig till en abstraktionsnivå per funktion ("One level of abstraction per function"). Det är lätt att skriva för stora funktioner och ge dem för många ansvarsområden men jag upplever att jag har blivit bättre även på att dela in funktionerna i fler, mindre funktioner tackvare det vi fått lära oss om Clean Code. Det där med "ett ansvarsområde" per funktion känns som att det nästa kommer lite "på köpet" när man börjar dela in funktionerna i fler, mindre funktioner. Abstraktionsnivåerna är en princip som jag upplever att jag behöver öva mer på, tycker fortfarande att det kan vara svårt att bedöma abstraktionsnivåer ibland (och då blir det såklart också svårare att alltid följa den principen).

![Small functions exempel](./imageExamples/Small%20funcs%20and%20do%20one%20thing%20refactoring%20example.png)

Ovan är ett exempel på en refaktorering av L2 där jag försökte städa upp i koden utifrån "Small" och "Do one thing"-principerna. Jag skulle dock säga att jag, trots att koden blivit mer clean, kan göras ännu mer clean än såhär då funktionen "saveImageToPhotoAssistant" gör mer än en sak - den både hämtar en bild och skickar den vidare för lagring.

![Functions exempel L3](./imageExamples/Function%20exempel%20L3.png)

Här i L3 har jag lyckats bättre både med "Small", "Do one thing" och även "One level of abstraction per function".

![Function arguments exempel](./imageExamples/Function%20args%20exempel.png)

Ännu en princip som jag tagit till mig av är att hålla antalet funktionsargument till ett minimum, om möjligt. Här är ett exempel från L3 där jag medvetet bröt mot denna regel (pga att jag då inte hittade någon bättre lösning) men där jag senare kunde gå tillbaka till koden och städa upp (vilket jag inte hade gjort om jag inte hade haft "clean code"-tänket med mig, eftersom den första kodsnutten trots allt löste problemet - men löste det fult).

### Kapitel 4

Något jag har lagt märke till i den här kursen är att jag har blivit mycket mer restriktiv med att lägga till kommentarer till koden (då jag anstränger mig mer för att försöka göra koden självbeskrivande genom bl. a. bättre namngivning), kanske så pass restriktiv att det svängt lite för mycket åt andra hållet. Hade några kommentarer i L2 som jag städade bort i refaktoreringsmomentet men som jag tänker ändå tillförde värde.

![Explanation of intent kommentarsexempel](./imageExamples/Intent%20revealing%20comment%20L2.png)

Ovan är ett exempel på en kommentar som jag städade bort men som jag skulle argumentera var en "Explanation of intent"-kommentar (varför jag tänker att det är nödvändigt att rita upp bilden på ett canvaselement - för att tillföra sparfunktionalitet) och därmed också tillförde ett värde.

I L3:an har jag varit väldigt sparsmakad med kommenterare redan från början, har därför svårt att visa något tydligt exempel på kommentarer, men JSDoc-kommentarer har jag lagt till de publika metoderna som tar emot argument (med fokus på att ange parametervärden eftersom att vanilla JS saknar typsäkerhet så blir dessa kommentarer särskilt viktiga):

![JSDoc exempel](./imageExamples/JSDoc%20exempel%20L3.png)

Det finns en meme för programmerare som direkt dök upp i minnet när vi fick lära oss om Clean Code och kommentarer  (som hänger med mig nu varje gång jag kodar): en bild på en stoppskylt med en skylt ovanför, med en pil som pekar nedåt, där det står "This is a stop sign".

### Kapitel 5

Jag försöker tänka på att göra kod så läsbar som möjligt (går själv lätt vilse i kod så jag vill inte göra det svårare än vad det behöver vara att hitta rätt) så principer såsom "Vertical openness between concepts" kändes inte främmande, även om det är bra att påminna sig själv om vilken skillnad det kan göra för läsbarheten:

![Formattering exempel](./imageExamples/Formattering%20exempel%20L2.png)

![Formattering exempel](./imageExamples/Formattering%20exempel%202.png)

Min största take away vad gäller formatteringsprinciperna är "Dependent functions" och den upplever jag har gjort stor skillnad (till det bättre) i min kod:

![Dependent functions exempel](./imageExamples/Dependent%20functions%20exempel.png)

Något så simpelt som jag upplever verkligen underlättar i att "hänga med i flödet" och gör det lättare att hitta rätt i koden (särskilt skönt när man som jag lätt går vilse annars).

### Kapitel 6

Det här är ett kapitel som jag känner att jag har lite svårare att förstå än de tidigare och några av koncepten ur det här kapitlet behöver lite mer tid att fullt ut landa hos mig men något jag reagerade på var när vi lärde oss om "Train wreck"-principen. Brukar själv inte skriva train wrecks (kan säkert ha hänt någon gång, men inget som brukar hända ofta i alla fall) men har sett många train wrecks även i mer senior kod (och då blivit lite imponerad, nu vet jag bättre).

Om jag har förstått det rätt (och rätta mig gärna om jag har fel) så skulle följande vara ett exempel på en datastruktur då den exponerar data för omvärlden men inte beteende (om den inte räknas som en hybrid då den agerar på arrayen innan den returnas?):

![Data structure exempel](./imageExamples/Kapitel%205%20exempel.png)

Medan det här är ett exempel på ett objekt där datan döljs under lager av abstraktion och inkapsling och där även beteendet döljs (både data och beteende är abstraherat i det här exemplet - vi vet att bilder sorteras i alfabetisk ordning men det avslöjas inte hur det går till - räknas det då ändå som ett objekt? Har lite svårt just nu att hitta ett exempel på objekt där beteende avslöjas då jag har försökt tänka abstraktion i flera lager, men det finns säkert exempel både på objekt och hybrider i min kod):

![Object exempel](./imageExamples/Kapitel%205%20exempel2.png)

### Kapitel 7

Kapitlet som handlar om felhantering har framförallt påverkat mig genom att jag tänker mer på i vilket lager av applikationen som kastade undantag bör fångas (och såklart att jag kastar undantagen, som enligt "Use exceptions rather than return codes"-principen):

![Object exempel](./imageExamples/Undantag%20try%20catch%20exempel.png)

![Object exempel](./imageExamples/Kasta%20undantag%20exempel.png)

Däremot så vet jag med mig själv att jag kan slarva med felhanteringen och det är lätt något som jag glömmer bort framförallt i början (när jag är fullt fokuserad på att lösa problemet) och får gå tillbaka och lägga till i efterhand, vilket innebär större risk att missa att t. ex. lägga till ett try/catch-block. Därför är principen "Write your try-catch-finally statement first" min största take away från det här kapitlet (i vad jag behöver träna ännu mer på).

### Kapitel 8

Boundries är något jag framförallt tog med mig vid utvecklandet av L2-modulen. Jag försökte tänka på att leverera ett lättförståeligt interface där det som användaren faktiskt behöver veta går att hitta i interfacet och valde medvetet att bara exponera photoAssistantOrchestrator för att ge användaren en tydlig ingångsport till applikationen (utan att behöva ge tillgång till övriga delar av modulen som istället abstraherades bort och inkapslades):

![Boundries exempel](./imageExamples/Boundries%20exempel.png)

### Kapitel 9

De tre TDD-reglerna är något jag särskilt tar med mig från kapitlet som rör testning. Har inte skrivit någon enorm mängd enhetstester såhär kort tid in i utvecklarkarriären men om manuella tester skulle ingå i TDD-regeln (det kanske det gör?) så tänker jag att det oftast är så att testfall failar någon (ofta några) gånger innan de går igenom, av egen erfarenhet, däremot så sker mycket av den testningen omedvetet (och räknas alltså inte in som strukturerad testning). Jag får, även här, stanna upp och påminna mig själv om att planera testningen först när jag redan har hunnit med några varv av manuell testning av sånt som vore bra att göra som mer strukturerad testning.

Jag försöker ha med mig principen "Keeping tests clean" när jag skriver enhetstester då jag vill att även den koden ska vara lätt att förstå, ha god läsbarhet osv och använder mig av "Build-Operate-Check"-pattern:

![Unit tests exempel](./imageExamples/Unit%20tests%20exempel.png)

### Kapitel 10

Jag försöker, precis som med funktioner, att ha med mig "Single responsibility"-principen och "Small Classes" när jag designar och delegerar ansvar till klasser. Trots det så är det lätt att falla in i fällan att ge en klass för mycket ansvar, samtidigt som en klass kan vara relativt stor men ändå ha ett tydligt ansvarsområde.

Här är ett exempel på en liten klass:

![Small Class exempel](./imageExamples/Small%20class%20exempel.png)

Det är tydligt vad denna klass gör och vad den har för ansvarsområde. Den skapar canvas element, inget mer och inget mindre.

Medan detta är ett exempel på en (i alla fall jämfört med de små klasserna) relativt stor klass:

![Large Class exempel](./imageExamples/Large%20class%20exempel.png)

Trots sin storlek så vill jag ändå hävda att även denna klass följer SRP. Det är en view-klass som har som ansvar att ta emot indata från användaren och ta emot utdata från controllers inom systemet för att rendera det tillbaka till användaren.

Jag har även, framförallt i L3an, tänkt aktivt på att försöka följa "Organizing for change"-principen genom att "bädda för" att systemet kommer att förändras kontinuerligt (såsom med alla system) och försökt göra appen mindre sårbar för såna förändringar. Detta genom att lägga till service-klasser som sköter kommunikationen med de två lib som jag importerat till L3 (min egen Photo Assistant-modul och @bytescale upload-widget). Detta innebär att appen kommer att ha lättare att hantera förändringar (såsom om någon lib skulle bli utdaterad och behöva bytas) utan att behöva bygga om hela systemet:

![Organizing for change exempel](./imageExamples/Organizing%20for%20change%20exempel.png)

### Kapitel 11

Den princip ur Systems-principerna som jag främst tagit till mig av och även implementerat i L3 (och som jag önskar att jag hade använt mig av mycket tidigare, då den tidigare applikationsdesignen ledde mig till många hinder på vägen som jag hade sluppit om jag tänkt på denna princip redan från start) är "Separation of Main". Jag hamnade i multipla instansieringar av klasser-träsket (vilket såklart ledde till problem med att bibehålla state och liknande och till mycket onödig tid på felsökning som jag hade kunnat bespara mig själv från början). Försökte först att lösa problemet genom att skapa en orchestratorsklass (controller) som skötte instantieringen och dependency-injectade instanserna till de andra controllerklasserna, försökte även med events och eventlyssnare, men efter att ha gått i vad som kändes som cirklar så var "Separation of main"-principen räddningen (försökte tänka mer som i Java):

![Separation of main exempel](./imageExamples/Separation%20of%20main%20exempel.png)

Men med en lärdom rikare (man lär sig trots allt bäst från sina misstag) så kommer den här Clean Code-principen att vara en av de principer jag kommer minnas för en lång tid framöver.

## Övrigt

Tyvärr hann jag inte realisera visionen fullt ut då jag fick skära i kraven och minska ned rätt mycket på funktionaliteten för att hinna bli klar med uppgiften i tid till deadline. Jag tänker dock att det här är version 1 och att det inte är någon nackdel att det finns en vision att jobba vidare med att kunna realisera med kommande versioner. Hann inte heller åtgärda två av de tre buggar som jag upptäckte vid testning (men att upptäcka buggar vid testning är ett bättre tecken än att inte upptäcka några buggar alls :).
