<template>
  <div class="flex justify-center items-center">
    <NuxtLink :to="to" target="_blank">
      <NuxtImg :src="`/img/logos/partners/${imageName}.png`" :alt="imageName" :class="[invert ? 'dark:invert' : '' , keepInverted ? '' : 'dark:hover:invert-0']" class="dark:grayscale dark:hover:grayscale-0 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out lg:max-h-[100px] object-cover sm:max-h-[100px]" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Logo',
  props: {
    imageName: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    invert: {
      type: Boolean
    },
    keepInverted: {
      type: Boolean
    }
  }
})
</script>
