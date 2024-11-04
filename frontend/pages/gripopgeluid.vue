<template>
  <div>
    <div :class="[darkModeClass, 'gradient-background-light']" class="select-none">
      <UiProjectHeader
        header-text="Grip op Geluid"
        description-text="Dé app om gehoorsbeschadiging te voorkomen onder gymdocenten"
        image-name="gripopgeluid"
      />
      <UiTextbox id="firstarticle" title-text="Een plan tegen gehoorsschade">
        <!-- <UiTypography type="p" size="paragraph-small" class="opacity-50 py-3">
          Januari 2024
        </UiTypography> -->
        Grip op Geluid is een project dat helpt om het geluidsniveau in gymzalen inzichtelijk te maken voor gymdocenten in het basisonderwijs. Door een nieuwe wet in Nederland moeten kinderen minstens twee uur per week gymles krijgen, wat betekent dat gymdocenten meer tijd in de gymzaal doorbrengen. Helaas zijn de geluidsniveaus in gymzalen vaak zo hoog dat ze kunnen leiden tot gehoorproblemen, hoofdpijn en stress.
        <br><br>
        Ons doel was om een prototype te ontwerpen van een app die gymdocenten eenvoudig inzicht geeft in de geluidsniveaus tijdens de les. De app helpt hen om de geluidsomgeving beter te begrijpen en aan te passen om zo gehoorschade en stress te verminderen.
        <br><br>
        Ik heb dit project uitgevoerd samen met een projectgroep, in de laatste helft van mijn derde jaar op Fontys ICT. We hebben een klikbaar prototype ontwikkeld in Figma en deze getest met gebruikers om ervoor te zorgen dat de app gebruiksvriendelijk is. De app toont belangrijke gegevens op een overzichtelijke manier en geeft gymdocenten een plantool om hun dagelijkse geluidsinname te kunnen reguleren.
        <div class="flex flex-wrap md:flex-row md:gap-2 gap-1 pt-5">
          <UiProjectProperty property-text="Mobile" />
          <UiProjectProperty property-text="Branding" />
          <UiProjectProperty property-text="Design" />
          <UiProjectProperty property-text="Figma" />
        </div>
      </UiTextbox>
      <NuxtImg src="/img/gripopgeluid/gripopgeluidbrandguide.png" class="w-full" />
      <UiTextbox title-text="Kleuren, logo en typografie">
        Het maken van de brandguide was een belangrijk onderdeel van het project, dat als werktitel "Noise Control" had. Deze naam hebben we ook gebruikt voor de app. Voor de visuele identiteit heb ik gekozen voor een simpele, professionele stijl met een speels tintje. Het lettertype "Inter" sloot hier perfect op aan, omdat het strak en leesbaar is zonder te veel op te vallen. <br><br> Een belangrijk element in de brandguide was het ontwerp van het logo. We hebben gekozen voor een oor-vormig logo met soundwaves, dat direct verwijst naar het doel van de app: inzicht geven in geluid en de impact ervan. Dit logo sluit goed aan bij de rest van de visuele stijl, die strak en professioneel is, maar toch een speelse uitstraling heeft om de gebruikerservaring licht en toegankelijk te houden. <br><br> De brandguide heb ik volledig in Figma gemaakt en daarna als PDF aangeleverd bij de opdrachtgever. Deze was erg blij met het eindresultaat, en het project wordt nu doorontwikkeld tot een daadwerkelijke app die binnenkort beschikbaar zal zijn in zowel de App Store als de Play Store.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/gripopgeluid/gripopgeluidoortjes.png" class="w-full mt-3" />
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/gripopgeluid/gripopgeluidphones.png" class="w-full" />
      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="Printpal" project-link="/printpal" is-previous-project />
          <UiProjectButton project-title="Salve Mundi" project-link="/salvemundi" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
