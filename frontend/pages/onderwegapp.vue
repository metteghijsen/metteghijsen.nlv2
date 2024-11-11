<template>
  <div>
    <div :class="[darkModeClass, 'gradient-background-light']" class="select-none">
      <UiProjectHeader
        header-text="Onderwegapp"
        description-text="Stel jouw ultieme reisafspeellijst samen met de Onderwegapp van 9292."
        image-name="onderwegappv2"
      />
      <UiTextbox id="firstarticle" title-text="Stel een afspeellijst samen voor onderweg">
        De OnderwegApp is een applicatie die je kunt gebruiken vanuit de 9292 app bij het plannen van je reis. Vul in de
        9292 app je start- en eindstation in. Druk vervolgens op de paarse knop "Een afspeellijst voor onderweg" en je
        wordt doorgestuurd naar de website van de OnderwegApp. Hier kun je inloggen met je Spotify-account. De
        OnderwegApp maakt automatisch een afspeellijst die precies is afgestemd op jouw muziekvoorkeuren en de lengte
        van je reistijd. Zo geniet je altijd van de perfecte muziek voor onderweg!
        <br><br>
        Deze applicatie heb ik gemaakt tijdens mijn derde jaar van de opleiding ICT, tijdens mijn stage bij LiveWall in
        2023. Warner Music en 9292 waren mijn stakeholders, en na mijn stage is de OnderwegApp ook geïntegreerd in de
        9292 app.

        <div class="flex flex-wrap md:flex-row md:gap-2 gap-1 pt-5">
          <UiProjectProperty property-text="Mobile" />
          <UiProjectProperty property-text="Nuxt" />
          <UiProjectProperty property-text="TypeScript" />
          <UiProjectProperty property-text="Tailwind" />
          <UiProjectProperty property-text="Design" />
          <UiProjectProperty property-text="Figma" />
        </div>
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/onderwegapp/onderwegappmockup.jpg" class="w-full" />

      <UiTextbox title-text="Branding kleuren & typografie">
        Voor de OnderwegApp heb ik een styleguide gemaakt met Adobe XD. Deze guide zorgt ervoor dat het ontwerp en de
        gebruikerservaring consistent blijven. LiveWall wilde dat de nieuwe versie niet te veel zou afwijken van de
        oude, dus ik heb ervoor gezorgd dat het bestaande ontwerp de basis bleef. Alle standaardstijlen zijn in de
        styleguide verzameld, wat het programmeren eenvoudiger maakt en toekomstige updates makkelijker uitvoerbaar.
        Daarnaast zorgt de guide ervoor dat collega's, ook als ze niet bij het oorspronkelijke ontwerp betrokken waren,
        toch op een consistente manier kunnen werken.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/onderwegapp/brandguideonderwegapp.jpg" class="w-full pt-4" />
      </UiTextbox>
      <UiTextbox title-text="Het nieuwe design">
        Voor het ontwerp van de nieuwe functies in de OnderwegApp heb ik Figma gebruikt, met de styleguide die ik eerder
        had gemaakt als referentie. Op basis van feedback uit gebruikerstesten en mijn eigen onderzoek heb ik
        verbeteringen doorgevoerd. Zo heb ik de belangrijkste info, zoals veelgestelde vragen, hoger op de homepagina
        gezet en de sponsoren naar beneden verplaatst. Hierdoor zien gebruikers direct de meest relevante informatie.
        <br><br>
        Ook heb ik de optie toegevoegd om genres voor afspeellijsten te kiezen, naar aanleiding van opmerkingen over
        muziekvoorkeuren. Verder heb ik kleine aanpassingen gedaan in kleurgebruik en de lay-out, zodat het design
        consistenter en prettiger werkt.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/onderwegapp/onderwegappfigma.jpg" class="w-full pt-4" />
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/onderwegapp/projectimage5.png" class="w-full" />
      <UiTextbox title-text="De development met Nuxt">
        Het ontwikkelen van de OnderwegApp was een leuke maar ook uitdagende klus met verschillende ingewikkelde stappen. De app moest functies hebben zoals inloggen, afspeellijsten maken, genres toewijzen en een maximale afspeeltijd instellen. Omdat de Spotify API geen optie biedt om een maximale afspeeltijd toe te voegen, maar alleen een maximaal aantal nummers, heb ik zelf een functie geschreven die het aantal nummers berekent op basis van de reistijd. Deze functie heb ik meerdere keren aangepast totdat deze precies deed wat ik wilde.
        <br><br>
        Daarnaast moest ik reisgegevens zoals de starttijd, eindtijd en bestemming uit de URL halen en verwerken in de naam en omschrijving van de afspeellijst. Zo was de afspeellijst altijd afgestemd op de reis van de gebruiker. Een lastig onderdeel was het proberen om een afbeelding toe te voegen aan de afspeellijst. Helaas is dit me uiteindelijk niet gelukt, ondanks dat ik er veel tijd in heb gestoken, en veel tijd heb besteed aan het lezen van de documentatie van de Spotify API.
        <br><br>
        Tijdens het ontwikkelen en testen van de Spotify functionaliteit heb ik in totaal 138 afspeellijsten aangemaakt. Het was soms wat puzzelen, maar ik ben blij met hoe de app uiteindelijk geworden is en hoe het hele proces is verlopen.
      </UiTextbox>
      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="Salve Mundi" project-link="/salvemundi" is-previous-project />
          <UiProjectButton project-title="Werken bij Partou" project-link="/werkenbijpartou" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
