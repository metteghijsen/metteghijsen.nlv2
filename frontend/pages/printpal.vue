<template>
  <div>
    <div
      :class="[darkModeClass, 'gradient-background-light']"
      class="select-none"
    >
      <UiProjectHeader header-text="Printpal" description-text="De app om mensen met depressie te ondersteunen." image-name="printpal" />
      <UiTextbox
        id="firstarticle"
        title-text="Een manier om over je gevoelens te praten"
      >
        Printpal is een applicatie die mensen met depressie ondersteunt door positieve berichten naar een pocketprinter te sturen. Binnen de app krijg je de mogelijkheid om prints naar je vrienden en willekeurige mensen te sturen. Je kunt ook kiezen welke soort prints je wilt ontvangen en op welk tijdstip. Als je niet in de buurt van je printer bent, bijvoorbeeld omdat je reist en hem niet hebt meegenomen, biedt de app je de mogelijkheid om deze prints overal en altijd te bekijken! Je kunt ook chatten met de mensen die hebben gekozen om een reactie op hun prints te ontvangen. Op deze manier kun je samen praten over gevoelige onderwerpen en een kijkje nemen in de gedachten van iemand die hetzelfde doormaakt als jij. Hiermee hopen we mensen aan te moedigen om het gesprek aan te gaan en nieuwe vrienden te maken.
        <br><br>
        Ik heb deze app samen met mijn projectgroep gemaakt in het tweede jaar van mijn studie ICT & Media Design (2022). We deden mee aan de ProjectB-competitie van het bedrijf Sogeti. De opdracht van de competitie was: Creëer een IT-innovatie voor mensen met een (mentale) aandoening of chronische ziekte. Ik heb dit idee samen met een mede-groepslid gepresenteerd voor 120 mensen. Helaas hebben we niets gewonnen.
        <div class="flex flex-wrap md:flex-row md:gap-2 gap-1 pt-5">
          <UiProjectProperty property-text="Mobile" />
          <UiProjectProperty property-text="Vanilla" />
          <UiProjectProperty property-text="Branding" />
          <UiProjectProperty property-text="Design" />
          <UiProjectProperty property-text="Figma" />
        </div>
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage3.png" class="w-full" />

      <UiTextbox
        title-text="Branding kleuren & typografie"
      >
        Omdat we werken met een vrij kwetsbare doelgroep, willen we ervoor zorgen dat mensen niets negatiefs aan onze app overhouden. Dit hebben we geprobeerd toe te passen in ons ontwerp. Zo hebben we bijvoorbeeld gelet op ons kleur- en lettertypegebruik.
        <br><br>
        We hebben uiteindelijk gekozen voor de kleuren groen en blauw. Ons kleuronderzoek toonde aan dat groen staat voor harmonie, veiligheid en groei. Dit moet balans en rust uitstralen. Blauw staat voor veiligheid en vertrouwen. Dit moet een gevoel van bescherming en rust overbrengen. Om deze redenen hebben we voor deze kleuren gekozen.
        <br><br>
        Daarnaast hebben we bij het ontwerpen van de UI enkele ontwerpprincipes onderzocht die we graag wilden volgen. Enkele voorbeelden van ontwerpprincipes die in ons ontwerp voorkomen zijn: "Minder is Meer", "Eenvoudige Taal", "Handpositie Besturing" en "Maak Interface Elementen Duidelijk Zichtbaar".
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage2.png" class="w-full min-h-[500px] object-contain lg:py-14 py-3 px-4 xl:px-[350px]" />
      <UiTextbox
        title-text="Gebruikerstesten / inchecken met gebruikers"
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
        title-text="Prototype ontwikkelen"
      >
        Nadat we onze gebruikersinterface hadden getest, was het tijd om deze na het eerste ontwerp te gaan bouwen. Ons plan was om dit te doen via een PWA (Progressive Web App). Dit is een applicatie die je via je browser op zowel je smartphone als desktop kunt installeren. Het grote voordeel hiervan is dat je de app overal kunt gebruiken.

        <br><br>

        Omdat we met een PWA werkten, konden we de app maken met HTML, CSS en JavaScript. Aangezien we gebruikers in onze app zouden hebben, hadden we zeer grote hoeveelheden gegevens. Deze gegevens moesten ergens worden opgeslagen. Hiervoor gebruikten we Firebase. Een databasetool van Google. Mijn deel van het bouwproces was het maken van de backend. Dus ik maakte een werkende inlog- en registratiescherm met behulp van Firebase.
      </UiTextbox>
      <NuxtImg src="/img/projectimage4.png" class="w-full" />
      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="Werken bij Partou" project-link="/werkenbijpartou" is-previous-project />
          <UiProjectButton project-title="Grip op Geluid" project-link="/gripopgeluid" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
