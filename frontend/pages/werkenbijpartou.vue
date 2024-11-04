<template>
  <div>
    <div :class="[darkModeClass, 'gradient-background-light']" class="select-none">
      <UiProjectHeader
        header-text="Werken bij Partou"
        description-text="Maak solliciteren makkelijker met tools die jouw carrièrekansen inzichtelijk maken."
        image-name="werkenbijpartou"
      />
      <UiTextbox id="firstarticle" title-text="Aan de slag voor Partou">
        Tijdens mijn stage bij LiveWall werkte ik mee aan de ontwikkeling van de werken-bij-Partou website. Dit gaf me de kans om te leren hoe een groot bedrijf als LiveWall Nuxt3 gebruikt voor complexe webapplicaties. Ik heb hierdoor zowel mijn technische vaardigheden als mijn samenwerking binnen een ervaren team verder kunnen ontwikkelen.
        <br><br>
        Mijn focus lag op twee belangrijke tools: de salaristool en de diplomatool. Met de salaristool kunnen gebruikers berekenen wat ze kunnen verdienen op basis van hun diploma en werkervaring. De diplomatool helpt hen te achterhalen of ze met hun diploma kunnen werken bij de BSO of kinderopvang. Het bouwen van deze tools was technisch uitdagend, vooral door de integratie van data en het gebruiksvriendelijk presenteren van complexe informatie.
        <div class="flex flex-wrap md:flex-row md:gap-2 gap-1 pt-5">
          <UiProjectProperty property-text="Web" />
          <UiProjectProperty property-text="Nuxt" />
          <UiProjectProperty property-text="Tailwind" />
          <UiProjectProperty property-text="TypeScript" />
        </div>
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/werkenbijpartou/salaristool.gif" class="w-full pt-4" />
      </UiTextbox>

      <UiContainer>
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/werkenbijpartou/werkenbijpartou.png" class="w-full py-4" />
      </UiContainer>

      <UiTextbox title-text="Salaris- en diplomatool">
        De salaristool en diplomatool waren beide uitdagende projecten waarbij ik voor het eerst werkte met een CMS (Contentful). Voor de salaristool haalde ik data op om het salaris te berekenen op basis van werkervaring, en ontwikkelde ik zowel de berekeningslogica als de volledige frontend. Bij de diplomatool werd data uit Contentful gebruikt om een dropdown te vullen waarin elk diploma op een specifieke manier werd weergegeven. Het stijlen van de dropdown en het markeren van overeenkomende karakters in roze was technisch complex, vooral omdat de dropdown zich moest aanpassen aan het aantal resultaten. Beide projecten gaven me veel inzicht in data-integratie en het bouwen van schaalbare, interactieve tools. <br><br> Mijn werk aan beide tools was een enorme leerervaring. Ik leerde niet alleen hoe ik met een CMS moet werken, maar ook hoe ik schaalbare, data-gedreven applicaties bouw.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/werkenbijpartou/diplomatool.gif" class="w-full pt-4" />
      </UiTextbox>

      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="OnderwegApp" project-link="/onderwegapp" is-previous-project />
          <UiProjectButton project-title="Printpal" project-link="/printpal" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
