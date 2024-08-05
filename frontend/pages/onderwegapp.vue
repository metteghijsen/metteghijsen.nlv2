<template>
  <div>
    <div
      :class="[darkModeClass, 'gradient-background-light']"
      class="select-none"
    >
      <UiProjectHeader header-text="Onderwegapp" description-text="Stel jouw ultieme reisafspeellijst samen met de Onderwegapp van 9292." image-name="onderwegapp" />
      <UiTextbox
        id="firstarticle"
        title-text="Stel een afspeellijst samen voor onderweg"
      >
        De OnderwegApp is een applicatie die je kunt gebruiken vanuit de 9292 app bij het plannen van je reis. Vul in de 9292 app je start- en eindstation in. Druk vervolgens op de paarse knop "Een afspeellijst voor onderweg" en je wordt doorgestuurd naar de website van de OnderwegApp. Hier kun je inloggen met je Spotify-account. De OnderwegApp maakt automatisch een afspeellijst die precies is afgestemd op jouw muziekvoorkeuren en de lengte van je reistijd. Zo geniet je altijd van de perfecte muziek voor onderweg!
        <br><br>
        Deze applicatie heb ik gemaakt tijdens mijn derde jaar van de opleiding ICT, tijdens mijn stage bij LiveWall in 2023. Warner Music en 9292 waren mijn stakeholders, en na mijn stage is de OnderwegApp ook geïntegreerd in de 9292 app.
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage5.png" class="w-full" />

      <UiTextbox
        title-text="branding kleuren & typografie"
      >
        Omdat we werken met een vrij kwetsbare doelgroep, willen we ervoor zorgen dat mensen niets negatiefs aan onze app overhouden. Dit hebben we geprobeerd toe te passen in ons ontwerp. Zo hebben we bijvoorbeeld gelet op ons kleur- en lettertypegebruik.
        <br><br>
        We hebben uiteindelijk gekozen voor de kleuren groen en blauw. Ons kleuronderzoek toonde aan dat groen staat voor harmonie, veiligheid en groei. Dit moet balans en rust uitstralen. Blauw staat voor veiligheid en vertrouwen. Dit moet een gevoel van bescherming en rust overbrengen. Om deze redenen hebben we voor deze kleuren gekozen.
        <br><br>
        Daarnaast hebben we bij het ontwerpen van de UI enkele ontwerpprincipes onderzocht die we graag wilden volgen. Enkele voorbeelden van ontwerpprincipes die in ons ontwerp voorkomen zijn: "Minder is Meer", "Eenvoudige Taal", "Handpositie Besturing" en "Maak Interface Elementen Duidelijk Zichtbaar".
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage2.png" class="w-full min-h-[500px] object-contain lg:py-14 py-3 px-4 xl:px-[350px]" />
      <UiTextbox
        title-text="gebruikerstesten inchecken met gebruikers"
      >
        Voordat we de UI hadden die we nu hebben, hebben we ook verschillende rondes getest met gebruikers die binnen onze doelgroep vallen. Hiervoor gebruikten we het platform Maze. We stelden van tevoren een aantal scenario's op die de gebruikers moesten doorlopen. Bijvoorbeeld, "Maak een account aan", "Voeg een vriend toe" of "Verander je wachtwoord". Zo konden we zien of de UI logisch leek voor de gebruikers. Van Maze kregen we altijd heatmaps van waar gebruikers het meest klikten, en percentages van hoeveel gebruikers ons geselecteerde pad volgden en hoeveel afweken. De combinatie van al deze gegevens en de feedback die we ontvingen gaf ons een overzicht van de beste manier om onze elementen te positioneren zodat het logisch was voor de gebruikers.
        <br>
        <br>
        <b>Voorkeuren & Instellingen</b>
        <br>
        Over het algemeen kregen we zeer positieve feedback over de gebruikerservaring. Omdat we zo dicht mogelijk bij de human interface richtlijnen van Apple en Google bleven, vonden onze testers hun weg gemakkelijk in het prototype. Toch was voor sommigen het verschil tussen instellingen en voorkeuren onduidelijk. Daarom besloten we de voorkeuren een tabblad binnen de instellingen te maken. Zo was het veel duidelijker voor de gebruikers.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage1.png" class="w-full pt-4" />
      </UiTextbox>
      <UiTextbox
        title-text="het prototype bouwen"
      >
        Nadat we onze gebruikersinterface hadden getest, was het tijd om deze na het eerste ontwerp te gaan bouwen. Ons plan was om dit te doen via een PWA (Progressive Web App). Dit is een applicatie die je via je browser op zowel je smartphone als desktop kunt installeren. Het grote voordeel hiervan is dat je de app overal kunt gebruiken.

        <br><br>

        Omdat we met een PWA werkten, konden we de app maken met HTML, CSS en JavaScript. Aangezien we gebruikers in onze app zouden hebben, hadden we zeer grote hoeveelheden gegevens. Deze gegevens moesten ergens worden opgeslagen. Hiervoor gebruikten we Firebase. Een databasetool van Google. Mijn deel van het bouwproces was het maken van de backend. Dus ik maakte een werkende inlog- en registratiescherm met behulp van Firebase.
      </UiTextbox>
      <NuxtImg src="/img/projectimage4.png" class="w-full" />
      <UiContainer>
        <LayoutNavbar />
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
