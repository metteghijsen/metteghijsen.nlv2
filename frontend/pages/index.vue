<template>
  <div role="presentation" @mousemove="handleMouseMove">
    <div
      :class="[darkModeClass, 'gradient-background-light']"
      class="pt-14 pb-10 flex flex-col items-start justify-center min-h-[100vh]"
    >
      <div class="lg:max-w-[1400px] md:max-w-[800px] max-w-[600px] lg:px-[300px] px-7">
        <div class="mt-7 cursor-default lg:text-[70px] md:text-[45px] text-[25px] poppins whitespace-nowrap text-black dark:text-white">
          <h1 v-motion-slide-bottom class="dark:custom-hover-darkmode transition-all ease-in-out">
            I'm a web developer, <br> building things <br> on the internet.
          </h1>
        </div>
        <UiTypography v-motion-slide-bottom type="p" size="paragraph-small" class="text-left py-3">
          Mijn naam is Mette. Ik ben dol op het bouwen en ontwerpen van websites. <br>
          Wil je mijn verhaal ontdekken?
        </UiTypography>
      <!-- <div class="flex flex-row justify-center items-center mt-3">
        <div class="circle bg-transparent p-1.5 border-[8px] border-red100 rounded-full m-1.5 h-[12px] w-[12px]" />
        <div class="triangle m-1.5 h-[12px] w-[12px]" />
        <div class="square dark:bg-transparent p-1.5 border-[8px] border-orange100 m-1.5 h-[12px] w-[12px]" />
        <div class="diamond bg-green100 p-2 rotate-45 m-2 h-[12px] w-[12px]" />
      </div> -->
      </div>
    </div>
    <div id="about" class="bg-white dark:bg-[#020520] cursor-default flex justify-center py-10 border-y-slate-200 dark:border-y-slate-600 border-y-[1px]">
      <div v-motion-slide-visible-once-bottom class="lg:max-w-[1400px] md:max-w-[800px] max-w-[600px] px-6">
        <div class="title-outline dark:title-outline-darkmode poppins lg:text-[70px] md:text-[45px] text-[30px] leading-[44px]">
          <h1>nice to meet you!</h1>
        </div>
        <div class="lg:text-[70px] md:text-[45px] text-[30px] poppins whitespace-nowrap dark:text-white text-black">
          <h1>nice to meet you! </h1>
        </div>
        <div class="title-outline dark:title-outline-darkmode poppins lg:text-[70px] md:text-[45px] text-[30px] leading-[44px]">
          <h1>nice to meet you!</h1>
        </div>

        <div v-motion-slide-visible-once-bottom class="py-4 w-full h-max flex lg:flex-row md:flex-row flex-col items-center">
          <NuxtImg src="/img/mette.png" alt="mette" class="rounded-3xl md:w-1/3 w-full mr-4 object-cover" />
          <div class="pt-7 md:p-7 w-full">
            <UiTypography type="p" size="paragraph-small" class="pb-2">
              Ik ben Mette, {{ age }} jaar oud en ik kom uit Eindhoven 🇳🇱. Ik ben een front-end developer en
              UX-designer. Welkom op mijn portfolio website!
              <br><br>
              Ik ben altijd al graag creatief bezig geweest, wat uitstekend samengaat met mijn enthousiasme voor
              computers. Op dit moment zit ik in het vierde jaar van mijn studie ICT & Media Design aan Fontys
              Hogeschool in Eindhoven, en volg ik de minor Digital Product Development aan de Universiteit van Kunst &
              Technologie in Kopenhagen 🇩🇰.
              In februari 2025 ga ik beginnen met mijn afstudeerstage, en ik ben druk op zoek naar een nieuwe uitdaging!
              Mijn ambitie is om front-end webdeveloper te worden, gespecialiseerd in Vue en Nuxt. Ik sta ervoor open
              om ook nog bij te leren over React en NextJS.
              <br><br>
              Wanneer ik niet aan het werk ben, doe ik vrijwilligerswerk bij de studievereniging van Fontys ICT, genaamd
              Salve Mundi. Hier versterk ik de mediacommissie door het maken van promotiemateriaal, en help ik de
              feestcommissie met het organiseren van feestjes. Ik ben ook regelmatig bij Hubble Community Café achter de
              tap te vinden. Daarnaast vind ik het leuk om me bezig te houden met videogames, gitaar spelen, (analoge)
              fotografie, urbexen, video-editing en tekenen.
              <br><br>
              Voel je vrij om een kijkje te nemen op mijn portfolio website!
            </UiTypography>
          </div>
        </div>
        <div v-motion-slide-visible-once-bottom class="w-full lg:flex lg:flex-row grid grid-cols-5 gap-1">
          <UiLogoCompetence class="dark:flex hidden" image-name="htmldark" skill-name="HTML" skill-link="https://www.w3.org/html/" />
          <UiLogoCompetence class="dark:flex hidden" image-name="cssdark" skill-name="CSS" skill-link="https://www.w3.org/Style/CSS/Overview.en.html" />
          <UiLogoCompetence image-name="tailwind" skill-name="Tailwind CSS" skill-link="https://tailwindcss.com/" />
          <UiLogoCompetence image-name="sass" skill-name="Sass" skill-link="https://sass-lang.com/" />
          <UiLogoCompetence image-name="javascript" skill-name="JavaScript" skill-link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
          <UiLogoCompetence image-name="typescript" skill-name="TypeScript" skill-link="https://www.typescriptlang.org/" />
          <UiLogoCompetence image-name="vue" skill-name="Vue.js" skill-link="https://vuejs.org/" />
          <UiLogoCompetence image-name="nuxt" skill-name="Nuxt.js" skill-link="https://nuxt.com/" />
          <UiLogoCompetence image-name="photoshop" skill-name="Adobe Photoshop" skill-link="https://www.adobe.com/products/photoshop.html" />
          <UiLogoCompetence image-name="figma" skill-name="Figma" skill-link="https://www.figma.com/" />
        </div>
      </div>
    </div>
    <UiContainer gradient>
      <LayoutNavbar />
      <div id="cases">
        <div v-motion-slide-visible-once-bottom class="grid xl:grid-cols-3 md:grid-cols-2 md:gap-2 grid-cols-1 gap-0.5 pt-10">
          <UiProject
            to="onderwegapp"
            image-name="onderwegapp"
            project-name="Onderwegapp"
            project-description="De gebruiker geeft een startstation en eindstation aan. Spotify zal een afspeellijst voor je gaan genereren met dezelfde lengte als de rit die je zal gaan maken. Er wordt gebruik gemaakt van de Spotify API zodat de afspeellijst muziek bevat die overeenkomt met de luisteractiviteit van de gebruiker. Gemaakt met Nuxt en Figma. "
            stakeholder="Warner Music, 9292"
          />
          <UiProject
            to="warnermusicfollowmodule"
            image-name="warnermusicfollowmodule"
            project-name="Follow Module"
            project-description="
            Warner Music kan op deze website een campagne starten voor een artiest om nieuwe volgers en luisteraars te generen. De gebruiker komt op een webpagina terecht met een countdown timer voor een nieuwe albumrelease, en heeft hier de mogelijkheid om de artiest te volgen. Gemaakt met Nuxt en Figma.
"
            stakeholder="Warner Music"
          />
          <UiProject
            to="werkenbijpartou"
            image-name="werkenbijpartou"
            project-name="Werken Bij Partou"
            project-description="
            Tijdens mijn stage bij LiveWall heb ik meegewerkt aan de website voor werkenbijpartou. Ik heb Vue-componenten samengesteld met behulp van Tailwind. Werken aan deze site heeft mij ongelofelijk veel bijgebracht over samenwerken in repositories, nette code schrijven, en elkaars code lezen en begrijpen. Gemaakt met Nuxt."
            stakeholder="Partou"
          />
          <UiProject
            to="printpal"
            image-name="printpal"
            project-name="Printpal"
            project-description="
            Printpal is een app die mensen met depressie helpt door positieve berichten naar een pocketprinter te sturen. Gebruikers kunnen prints versturen en ontvangen, en chatten met anderen. Ik ontwikkelde deze app met mijn projectgroep in mijn tweede jaar ICT & Media Design voor een wedstrijd van Sogeti. Gemaakt in vanilla."
            stakeholder="Sogeti"
          />

          <UiProject
            to="gripopgeluid"
            image-name="gripopgeluid"
            project-name="Grip op Geluid"
            project-description="
Noise Control is een app die gymdocenten in het basisonderwijs helpt om inzicht te krijgen in het geluidsniveau in gymzalen. Door real-time geluidsmetingen biedt de app een gebruiksvriendelijke manier om gehoorschade en stress te voorkomen, en zo een veiligere en comfortabelere werkomgeving te creëren."
            stakeholder="Fontys Lectoraat"
          />

          <UiProject
            to="salvemundi"
            image-name="salvemundi"
            project-name="Mediacommissie"
            project-description="Sinds juni 2021 ben ik actief lid van de mediacommissie van studievereniging Salve Mundi. Als voorzitter ben ik verantwoordelijk voor het ontwerpen van posters, het beheren van de Instagram-pagina, en het ontwikkelen van merchandise, zoals hoodies voor nieuwe leden. Daarnaast heb ik de website van de vereniging opnieuw vormgegeven."
            stakeholder="Salve Mundi"
          />

          <!-- <UiProject
            to="/"
            image-name=""
            project-name="El Studio"
            project-description="
            Printpal is een app die mensen met depressie helpt door positieve berichten naar een pocketprinter te sturen. Gebruikers kunnen prints versturen en ontvangen, en chatten met anderen. Ik ontwikkelde deze app met mijn projectgroep in mijn tweede jaar ICT & Media Design voor een wedstrijd van Sogeti."
            stakeholder="El Studio"
          /> -->

          <!-- <UiProject
            to="/"
            image-name="nore"
            project-name="Nore"
            project-description="
            In mijn eerste jaar ICT & Media Design creëerde ik met drie klasgenoten de branding voor Tessa Meester van de band NORE. We hebben veel gebruikersonderzoek gedaan en ontwikkelden zo een unieke branding en website voor deze Nederlandse indie pop-rockband. "
            stakeholder="Fontys Rockacademie"
          />

          <UiProject
            to="/"
            image-name="fontys"
            project-name="Engineering & Technology in Practice"
            project-description="
            Ik heb gewerkt bij Fontys Centre of Expertise. Mijn taak was het toevoegen van projecten van studenten aan de Fontys website, promotieposters & Photoshop-sjablonen maken en LinkedIn-berichten schrijven. Ik heb ook veel geleerd over werken met content management systemen."
            stakeholder="Fontys Engineering"
          />
          <UiProject
            to="/"
            image-name="samu"
            project-name="Mediacommissie"
            project-description="
            Ik studeer ICT aan Fontys Hogescholen en ben lid van Salve Mundi (de studieverenging). Sinds juni 2021 werk ik vrijwillig in de mediacommissie en ben sinds januari 2022 een jaar lang commissieleider geweest. Ik ontwerp promotiemateriaal, beheer Instagram en heb de website herontworpen."
            stakeholder="Salve Mundi"
          /> -->
        </div>
        <div class="py-8">
          <div
            v-motion-slide-visible-once-bottom
            class="md:grid md:grid-cols-3 md:gap-3 bg-white dark:bg-[#020520] py-7 rounded-3xl overflow-none"
          >
            <div class="mb-4 md:mb-0 text-center">
              <UiTypography class="mb-1">
                Ik heb nu afgerond
              </UiTypography>
              <UiTypography type="h1" size="heading1">
                <vue3-autocounter
                  ref="semesterCounter"
                  :start-amount="0"
                  separator=""
                  :end-amount="7"
                  :duration="1.5"
                  :autoinit="false"
                />
              </UiTypography>
              <UiTypography class="mt-1" type="h3" size="heading3">
                semesters
              </UiTypography>
            </div>
            <div class="mb-4 md:mb-0 text-center">
              <UiTypography class="mb-1">
                Met in totaal meer dan
              </UiTypography>
              <UiTypography type="h1" size="heading1">
                <vue3-autocounter
                  ref="projectCounter"
                  :start-amount="0"
                  separator=""
                  :end-amount="39"
                  :duration="1.5"
                  :autoinit="false"
                />
              </UiTypography>
              <UiTypography class="mt-1" type="h3" size="heading3">
                projecten
              </UiTypography>
            </div>
            <div class="text-center">
              <UiTypography class="mb-1">
                Ervaring in ICT
              </UiTypography>
              <UiTypography type="h1" size="heading1">
                <vue3-autocounter
                  ref="deliverableCounter"
                  :start-amount="0"
                  separator=""
                  :end-amount="4"
                  :duration="1.5"
                  :autoinit="false"
                />
              </UiTypography>
              <UiTypography class="mt-1" type="h3" size="heading3">
                jaar
              </UiTypography>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter'
export default {
  name: 'Numbers',
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  data () {
    return {
      age: this.calculateAge(),
      finishedCounting: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    calculateAge () {
      const birthDate = new Date(2003, 4, 2) // 2 May 2003
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDifference = today.getMonth() - birthDate.getMonth()
      const dayDifference = today.getDate() - birthDate.getDate()

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--
      }

      return age
    },
    handleScroll () {
      const scrollY = window.scrollY

      if (scrollY >= 3000 && this.finishedCounting === false) {
        this.finishedCounting = true
        this.start()
      }
    },
    start () {
      this.$refs.semesterCounter.start()
      this.$refs.projectCounter.start()
      this.$refs.deliverableCounter.start()
    },
    handleMouseMove (event) {
      const movingBackground = document.querySelectorAll('.movingBackground')

      movingBackground.forEach((background) => {
        const elementProperties = getComputedStyle(background)
        const rect = background.getBoundingClientRect() // Vraag positie op van het element op de pagina

        // Bereken de helft van de achtergrondgrootte
        const backgroundSizeWidth = parseInt(elementProperties.getPropertyValue('--background-size-width').replace('px', '')) / 3
        const backgroundSizeHeight = parseInt(elementProperties.getPropertyValue('--background-size-height').replace('px', '')) / 3

        // Stel de achtergrondpositie in met de aangepaste berekeningen
        background.style.setProperty('--background-position-x', (event.clientX - rect.left - backgroundSizeWidth) + 'px')
        background.style.setProperty('--background-position-y', (event.clientY - rect.top - backgroundSizeHeight) + 'px')
      })
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Poppins-Bold";
  src: url("../fonts/Poppins-Bold.woff") format("woff");
}

.custom-hover {
  transition: color 0.2s ease !important;
}

.custom-hover:hover {
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
  color: transparent;
}

.dark .dark\:custom-hover-darkmode {
  transition: color 0.5s ease !important;
}

.dark .dark\:custom-hover-darkmode:hover {
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
  color: transparent;
}

.transition {
  transition: all 0.5s ease !important;
}

.poppins h1 {
  font-family: Poppins-Bold;
}

.title-outline h1 {
  white-space: nowrap;
  -webkit-text-stroke-color: #2f3141;
  -webkit-text-stroke-width: 2px;
  color: transparent;
  transition: color 0.5s ease !important;
}

.title-outline h1:hover {
  color: #2f3141;
  transition: color 0.5s ease !important;
}

.dark .dark\.title-outline-darkmode h1 {
  white-space: nowrap;
  -webkit-text-stroke-color: #333;
  -webkit-text-stroke-width: 2px;
  color: transparent;
  transition: color 0.5s ease !important;
}

.dark .dark\.title-outline-darkmode h1:hover {
  color: #333;
  transition: color 0.5s ease !important;
}

.triangle {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid var(--color-blue-100);
}
</style>
