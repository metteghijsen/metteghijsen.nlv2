<template>
  <NuxtLink :to="to">
    <div class="movingBackground background z-0 xl:h-[750px] lg:h-[720px] lg:max-w-[720px] md:max-w-[680px] w-full flex items-center justify-center rounded-3xl">
      <div class="bg-white100 opacity-90 dark:bg-[#020520] dark:border-slate-600 border-2 flex flex-col items-center rounded-3xl dark:hover:border-blue100 hover:border-blue100 transition-all ease-in-out duration-500 xl:h-[746px] lg:h-[696px] w-full md:max-w-[676px] lg:w-[calc(100%-4px)]">
        <NuxtImg :src="`/img/projects/${imageName}.png`" :alt="imageName" class="object-cover aspect-video w-full max-h-[400px] mb-4 rounded-t-3xl" />
        <div class="flex flex-col relative mx-10 h-full">
          <UiTypography type="p" size="paragraph-extra-small" class="uppercase opacity-70 pb-1 font-semibold">
            {{ stakeholder }}
          </UiTypography>
          <UiTypography type="h3" size="heading3" class="pb-1">
            {{ projectName }}
          </UiTypography>
          <UiTypography type="p" size="paragraph-small" class="opacity-50 pb-3">
            {{ projectDescription }}
          </UiTypography>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default defineComponent({
  name: 'Project',
  props: {
    imageName: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    stakeholder: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeUnmount () {
    document.removeEventListener('mousemove', this.handleMouseMove)
  },
  methods: {
    makeBackgroundBigger () {
      const movingBackground = document.querySelector('.movingBackground')
      movingBackground.style.backgroundSize = '900px 900px'
    }
  }
})
</script>

<style>
.background {
  --background-size-width: 700px;
  --background-size-height: 700px;
  --background-position-x: center;
  --background-position-y: center;
  background-image: radial-gradient(#00ccff 0%, #00000000 65%, #00000000 99%);
  background-size: var(--background-size-width) var(--background-size-height);
  background-position: var(--background-position-x) var(--background-position-y);
  background-repeat: no-repeat;
}
</style>
