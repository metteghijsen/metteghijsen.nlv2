<template>
  <NuxtLink :to="to">
    <div class="bg-white100 border-slate-200 dark:bg-black dark:border-slate-600 border-2 lg:h-[700px] md:max-w-[680px] flex flex-col items-center rounded-3xl mb-4 hover:translate-y-[-15px] transition-all ease-in-out">
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
  </NuxtLink>
</template>

<script lang="ts">
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
  }
})
</script>
