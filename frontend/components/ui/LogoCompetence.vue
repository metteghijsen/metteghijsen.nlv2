<template>
  <NuxtLink :href="skillLink">
    <div class="flex justify-center items-center hover:translate-y-[-5px] transition-all ease-in-out" :title="skillName">
      <NuxtImg :src="`/img/logos/competences/${imageName}.png`" :alt="imageName" class="lg:max-h-[75px] object-cover max-h-[50px] m-4" />
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Logo',
  props: {
    imageName: {
      type: String,
      required: true
    },
    skillName: {
      type: String,
      required: true
    },
    skillLink: {
      type: String,
      required: true
    }
  }
})
</script>
