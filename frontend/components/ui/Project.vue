<template>
  <NuxtLink :to="to">
    <div class="movingBackground background z-0 lg:h-[700px] md:max-w-[680px] w-full flex items-center justify-center rounded-3xl hover:translate-y-[-5px] ease-in-out transition-transform">
      <div class="z-10 bg-white100 opacity-90 dark:bg-[#020520] dark:border-slate-600 border-2 lg:h-[696px] md:max-w-[676px] flex flex-col items-center rounded-3xl dark:hover:border-blue100 hover:border-blue100 transition-all ease-in-out duration-150">
        <NuxtImg :src="`/img/projects/${imageName}.png`" :alt="imageName" class="object-cover aspect-video w-full max-h-[400px] mb-4 rounded-t-3xl" />
        <div class="flex flex-col mx-10">
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
  background-image: url("/img/hover.png");
  background-repeat: no-repeat;
}
</style>
