<template>
  <div class="relative flex justify-center cursor-default">
    <NuxtImg :src="`/img/projects/${imageName}.png`" :alt="imageName" class="w-full h-screen bg-center bg-no-repeat object-cover object-center z-0 brightness-[35%]" />
    <div class="absolute z-10 bottom-[40%] text-center px-4"> <!-- Added padding for small screens -->
      <UiTypography v-motion-slide-bottom type="h1" size="headinghuge" class="text-white100">
        {{ headerText }}
      </UiTypography>
      <UiTypography v-motion-slide-bottom type="p" size="paragraph-small" class="text-white100 pt-2">
        {{ descriptionText }}
      </UiTypography>
    </div>
    <a href="#firstarticle" class="absolute bottom-[15%]">
      <span class="sr-only">Navigate to first article</span>
      <ArrowDown class="h-6 w-6 animate-bounce" color="white" />
    </a>
  </div>
</template>

<script setup>
import { ArrowDown } from 'lucide-vue-next'
</script>

<script>
export default defineComponent({
  name: 'ProjectHeader',
  props: {
    headerText: {
      type: String,
      required: true
    },
    descriptionText: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: true
    }
  }
})
</script>
