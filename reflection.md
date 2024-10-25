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

### Kapitel 5

### Kapitel 6

### Kapitel 7

### Kapitel 8

### Kapitel 9

### Kapitel 10

### Kapitel 11

## Övrigt

Tyvärr hann jag inte realisera visionen fullt ut då jag fick skära i kraven och minska ned på funktionalitet för att hinna bli klar med uppgiften i tid till deadline. Hann inte heller åtgärda de två buggar som jag upptäckte vid testning (men att upptäcka buggar vid testning är ett bättre tecken än att inte upptäcka några buggar alls :). Jag tänker dock att det här är version 1 och att det inte är någon nackdel att det finns en vision att jobba vidare med att kunna realisera med kommande versioner.
