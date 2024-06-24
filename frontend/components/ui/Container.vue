<template>
  <div>
    <div v-if="gradient" :class="[darkModeClass, 'gradient-background-light']">
      <div class="min-h-screen zoom-80 pb-[106px] pt-0.5 overflow-hidden'">
        <div class="xl:max-w-[1900px] max-w-[1460px] mx-auto px-3 relative z-10">
          <slot />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="min-h-screen zoom-80 pb-[106px] pt-0.5 overflow-hidden'">
        <div class="xl:max-w-[1900px] max-w-[1460px] mx-auto px-3 relative z-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: 'Container',
  props: {
    gradient: {
      type: Boolean
    }
  }
})
</script>

<style scoped>
.zoom-80{
  zoom: 80%;
}
.gradient-background-light {
  background: linear-gradient(-45deg, #ffdace, #ffd2e1, #c4efff, #c0ffef);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
}

.dark .gradient-background-light {
  background: linear-gradient(-45deg, #020520, #023a28, #020520, #011c36);
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
