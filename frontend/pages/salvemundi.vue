<template>
  <div>
    <div :class="[darkModeClass, 'gradient-background-light']" class="select-none">
      <UiProjectHeader
        header-text="Salve Mundi"
        description-text="Mijn creatieve werk bij de studievereniging van Fontys ICT."
        image-name="salvemundi"
      />
      <UiTextbox id="firstarticle" title-text="De media commissie">
        Ik studeer ICT aan Fontys Hogescholen in Eindhoven en ben lid van de studievereniging Salve Mundi. Sinds juni 2021 ben ik actief als vrijwilliger binnen de vereniging. Na zes maanden in de mediacommissie te hebben gezeten, ben ik in januari 2022 commissievoorzitter geworden.
        <br><br> De mediacommissie is het creatieve hart van Salve Mundi. We ontwerpen alles, van coole introshirts en hoodies tot promotiemateriaal en fotografie voor feesten en evenementen. Kortom, de mediacommissie bepaalt de uitstraling van Salve Mundi.
        <br><br> Tijdens mijn tijd in de mediacommissie heb ik talloze posters ontworpen voor feesten en evenementen. Ik heb foto's gemaakt en bewerkt, veel merchandise ontworpen en verkocht, en de Salve Mundi-website opnieuw vormgegeven. Ook beheer ik de Instagram-pagina en maak ik de posts. Naast het creatieve werk doe ik ook administratieve taken, zoals het opstellen van schema’s en het berekenen van kosten.
        <div class="flex flex-wrap md:flex-row md:gap-2 gap-1 pt-5">
          <UiProjectProperty property-text="Design" />
          <UiProjectProperty property-text="Photoshop" />
          <UiProjectProperty property-text="Figma" />
        </div>
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/salvemundi/samu-projectimage1.png" class="w-full" />
      <UiTextbox title-text="Promo voor feesten & evenementen">
        Als commissielid en later als voorzitter heb ik veel posters ontworpen voor feesten en evenementen van Salve Mundi. Ik gebruik hiervoor altijd Adobe Photoshop. Het is belangrijk om goed te overleggen met de opdrachtgever en hun wensen mee te nemen. Meestal krijg ik de informatie die op de poster moet staan en soms wat voorbeelden ter inspiratie. <br><br>
        Ik probeer elke poster een eigen stijl te geven. Soms maak ik meerdere ontwerpen, zodat de opdrachtgever kan kiezen welke het beste bevalt. Alle posters maak ik vierkant, zodat ze makkelijk op Instagram kunnen worden geplaatst.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/salvemundi/samubanners.png" class="w-full mt-4" />
      </UiTextbox>
      <UiTextbox title-text="Merchandise">
        Binnen Salve Mundi heb ik meerdere keren de kans gekregen om merchandise te ontwerpen, waaronder de jaarlijkse hoodies voor nieuwe leden en speciale hoodies voor actieve leden. In januari 2022, toen ik voorzitter werd van de mediacommissie, heb ik een nieuw concept geïntroduceerd: elk jaar een unieke hoodie voor nieuwe leden. Elke jaargang heeft een eigen kleur, zodat je in één oogopslag kunt zien wanneer iemand begonnen is met studeren. Deze hoodies worden tijdens de introductie verkocht, samen met andere merchandise zoals trainingsbroeken en zonnebrillen die ik ook heb ontworpen. <br><br>

        Daarnaast kreeg de mediacommissie de opdracht om hoodies te ontwerpen voor alle actieve leden, als bedankje voor hun inzet. Samen met een ander commissielid heb ik moodboards gemaakt en nauw overleg gevoerd met het bestuur om ervoor te zorgen dat het ontwerp voldeed aan hun verwachtingen. Na goedkeuring van het bestuur ben ik aan de slag gegaan met het ontwerp. Het proces was creatief en leuk, en het eindresultaat werd enthousiast ontvangen door de leden. <br><br>

        Deze projecten hebben me veel geleerd over het ontwerpen van merchandise en het werken met verschillende stakeholders. Het combineren van creatieve vrijheid met de wensen van het bestuur en de leden was een mooie uitdaging waar ik met trots op terugkijk.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/salvemundi/samu-projectimage3.png" class="w-full mt-4" />
      </UiTextbox>
      <UiTextbox title-text="Tapperspolo's">
        Naast het ontwerpen van hoodies en andere merchandise voor Salve Mundi, heb ik ook gewerkt aan het ontwerpen van speciale tapperspolo’s. Onze vrijwilligers staan regelmatig achter de bar bij Hubble Community Café, en het bestuur vroeg mij om polo’s te ontwerpen die ze tijdens het tappen kunnen dragen. In overleg met zowel Hubble als ons eigen bestuur heb ik een ontwerp gemaakt dat past bij de uitstraling van Salve Mundi én bij de sfeer van Hubble. Dit zorgde ervoor dat onze vrijwilligers niet alleen herkenbaar zijn, maar ook een professionele uitstraling hebben tijdens het werk achter de bar. Het was een leuke uitdaging om rekening te houden met de branding van beide partijen en tegelijkertijd iets te creëren waar onze vrijwilligers zich comfortabel in voelen.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/salvemundi/samutapperspolo.png" class="w-full mt-4" />
      </UiTextbox>
      <UiTextbox title-text="Herontwerp van de website">
        De website van Salve Mundi was al een tijdje hetzelfde en had wat problemen aan de achterkant. Omdat ze de backend van de site toch opnieuw moesten schrijven, kwam de IT-commissie bij mij met de vraag of ik de voorkant opnieuw wilde ontwerpen. Dit heb ik met plezier gedaan! <br><br>
        Voor het herontwerp van de site heb ik Figma gebruikt en hield ik rekening met de huisstijl van Salve Mundi. Tijdens het ontwerpproces hield ik voortdurend contact met de IT-commissie en verwerkte ik hun feedback netjes. Het uiteindelijke ontwerp is nu klaar, en het enige wat nog moet gebeuren is de ontwikkeling van de site.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/salvemundi/samufigma.png" class="w-full mt-4" />
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/salvemundi/samuwebsite.png" class="w-full" />
      <UiContainer>
        <LayoutNavbar />
        <div class="flex justify-center flex-wrap md:gap-4 gap-1 md:py-10 py-5">
          <UiProjectButton project-title="Grip op Geluid" project-link="/gripopgeluid" is-previous-project />
          <UiProjectButton project-title="OnderwegApp" project-link="/onderwegapp" />
        </div>
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
