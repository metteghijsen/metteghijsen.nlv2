<template>
  <div>
    <div :class="[darkModeClass, 'gradient-background-light']" class="select-none">
      <UiProjectHeader
        header-text="Warner Music Follow Module"
        description-text="Stel jouw ultieme reisafspeellijst samen met de Onderwegapp van 9292."
        image-name="warnermusicfollowmodule"
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
          <UiProjectProperty property-text="Web" />
          <UiProjectProperty property-text="Nuxt" />
          <UiProjectProperty property-text="Tailwind" />
          <UiProjectProperty property-text="Design" />
          <UiProjectProperty property-text="Figma" />
        </div>
      </UiTextbox>
      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="OnderwegApp" project-link="/onderwegapp" is-previous-project />
          <UiProjectButton project-title="Werken Bij Partou" project-link="/werkenbijpartou" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
