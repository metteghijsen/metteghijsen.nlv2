<template>
  <div class="flex justify-center items-center hover:translate-y-[-5px] transition-all ease-in-out">
    <NuxtImg :src="`/img/logos/competences/${imageName}.png`" :alt="imageName" class="lg:max-h-[75px] object-cover max-h-[50px] m-4" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Logo',
  props: {
    imageName: {
      type: String,
      required: true
    }
  }
})
</script>
