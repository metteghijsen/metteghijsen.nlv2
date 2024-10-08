<template>
  <div>
    <div :class="[darkModeClass, 'gradient-background-light']" class="select-none">
      <UiProjectHeader
        header-text="Onderwegapp"
        description-text="Stel jouw ultieme reisafspeellijst samen met de Onderwegapp van 9292."
        image-name="onderwegapp"
      />
      <UiTextbox id="firstarticle" title-text="stel een afspeellijst samen voor onderweg">
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

      <UiTextbox title-text="branding kleuren & typografie">
        Voor de OnderwegApp heb ik een styleguide gemaakt met Adobe XD. Deze guide zorgt ervoor dat het ontwerp en de
        gebruikerservaring consistent blijven. LiveWall wilde dat de nieuwe versie niet te veel zou afwijken van de
        oude, dus ik heb ervoor gezorgd dat het bestaande ontwerp de basis bleef. Alle standaardstijlen zijn in de
        styleguide verzameld, wat het programmeren eenvoudiger maakt en toekomstige updates makkelijker uitvoerbaar.
        Daarnaast zorgt de guide ervoor dat collega's, ook als ze niet bij het oorspronkelijke ontwerp betrokken waren,
        toch op een consistente manier kunnen werken.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/onderwegapp/brandguideonderwegapp.jpg" class="w-full pt-4" />
      </UiTextbox>
      <UiTextbox title-text="het nieuwe design">
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
      <UiTextbox title-text="testen met de gebruiker">
        Om te testen of de nieuwe versie van de OnderwegApp gebruiksvriendelijker is geworden, heb ik opnieuw
        gebruikerstests uitgevoerd. Dit keer heb ik mensen gevraagd die ook al hadden meegeholpen bij het testen van
        versie 1, maar ook nieuwe gebruikers die de app nog niet kenden. Zo kon ik zowel zien of de verbeteringen
        aansloegen bij bestaande gebruikers als hoe nieuwkomers de app ervoeren.
        <br><br>
        Tijdens de tests doorliepen de deelnemers verschillende scenario’s, zoals “Kun je de veelgestelde vragen
        makkelijk vinden?” en “Maak een afspeellijst op basis van je reistijd.” Deze scenario’s hielpen me te ontdekken
        of de aanpassingen de app gebruiksvriendelijker hadden gemaakt.
        <br><br>
        De reacties waren overwegend positief: mensen vonden de interface overzichtelijker en het maken van een
        afspeellijst ging soepel. Met hun feedback kon ik nog een paar puntjes verbeteren, zodat de app nog prettiger in
        gebruik werd.
      </UiTextbox>
      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="Grip op Geluid" project-link="gripopgeluid" is-previous-project />
          <UiProjectButton project-title="Follow Module" project-link="warnermusicfollowmodule" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
