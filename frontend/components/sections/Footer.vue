<template>
  <div :class="[darkModeClass, 'gradient-background-light']">
    <div class="flex justify-center">
      <div class="w-full bg-white100 dark:bg-[#020520] grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-2 lg:px-[400px] px-[200px] py-[120px] flex justify-center">
        <UiLogo image-name="fontys" invert to="https://www.fontys.nl/Home.htm" />
        <UiLogo image-name="kea" invert keep-inverted="" to="https://kea.dk/en/" />
        <UiLogo image-name="livewall" invert keep-inverted to="https://www.livewall.nl/" />
        <UiLogo image-name="sogeti" invert to="https://www.sogeti.nl/" />

        <UiLogo image-name="9292" to="https://9292.nl/" class="md:p-4" />
        <UiLogo image-name="warnermusic" invert to="https://www.wmg.com/" />
        <UiLogo image-name="partou" to="https://www.werkenbijpartou.nl/?utm_source=googleads&utm_campaign=18773651246&utm_medium=ad&utm_content=670754134683&utm_term=werken+bij+partou&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw0MH2NWr98Skszax908DrasgF6UXzMTW2UV8SCRp436CjrR_p6BBcQaAvYkEALw_wcB" />
        <UiLogo image-name="salvemundi" invert to="https://www.salvemundi.nl" />
      </div>
    </div>
    <div class="flex lg:flex-row flex-col lg:justify-evenly justify-center px-5 py-[120px]">
      <div>
        <UiTypography type="h1" size="heading1" class="pb-5">
          let's talk!
        </UiTypography>
        <UiTypography type="p" size="paragraph-extra-small" class="opacity-70">
          Heb je een nieuwe uitdaging voor mij, of wil je gewoon even hallo zeggen? <br>
          Contacteer me dan vooral via email of sociale media. Spreek je daar!
        </UiTypography>
        <UiTypography type="p" size="paragraph-extra-small" class="mt-12">
          Mette Ghijsen © 2021- {{ currentYear }}
        </UiTypography>
      </div>
      <div>
        <UiTypography type="h4" size="heading4" class="pb-0.5">
          Say hello
        </UiTypography>
        <a href="mailto:info@metteghijsen.nl" target="_blank">
          <UiTypography type="p" size="paragraph-extra-small" class="pb-6 opacity-70">
            →  info@metteghijsen.nl
          </UiTypography>
        </a>
        <UiTypography type="h4" size="heading4" class="pb-0.5">
          Social media
        </UiTypography>
        <a href="https://github.com/metteghijsen" target="_blank">
          <UiTypography type="p" size="paragraph-extra-small" class="opacity-70">
            →  GitHub
          </UiTypography>
        </a>
        <a href="https://www.linkedin.com/in/mette-ghijsen-857594203/" target="_blank">
          <UiTypography type="p" size="paragraph-extra-small" class="opacity-70">
            →  LinkedIn
          </UiTypography>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
.zoom-80{
  zoom: 80%;
}
.gradient-background-light {
  background: linear-gradient(-45deg, #ffdace, #ffd2e1, #c4efff, #c0ffef);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
}

.dark .gradient-background-light {
  background: linear-gradient(-45deg, #020520, #03583d, #020520, #022d54);
  background-size: 250% 250%;
  animation: gradient 20s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
