<template>
  <div :class="[darkModeClass, 'gradient-background-light min-h-screen zoom-80 pb-[106px] pt-0.5 overflow-hidden']">
    <div class="max-w-[1460px] mx-auto px-3 relative z-10">
      <slot />
    </div>
  </div>
</template>

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
  background: linear-gradient(-45deg, #000000, #023a28, #000000, #011c36);
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
