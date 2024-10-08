<template>
  <Component :is="type" :class="`${size} ${color}`">
    <slot />
  </Component>
</template>

<script>
export default defineComponent({
  name: 'Typography',
  props: {
    type: {
      default: 'p',
      required: false,
      type: String
    },
    size: {
      default: 'paragraph',
      required: false,
      type: String
    },
    color: {
      default: 'text-black100 dark:text-white100',
      required: false,
      type: String
    }
  }
})
</script>

<style>
  .font-primary {
    @apply font-poppins font-bold;
  }

  .font-button {
    @apply font-poppins font-bold uppercase;
  }

  /* Headings */
  .headinghuge {
    font-size: clamp(32px, 6vw, 110px); /* Responsive scaling in pixels */
    line-height: clamp(40px, 7vw, 150px);
    @apply font-primary;
  }

  .heading1 {
    font-size: clamp(24px, 5vw, 60px); /* Responsive scaling in pixels */
    line-height: clamp(32px, 5.5vw, 64px);
    @apply font-primary;
  }

  .heading2 {
    font-size: clamp(20px, 4vw, 40px);
    line-height: clamp(28px, 5vw, 48px);
    @apply font-primary;
  }

  .heading3 {
    font-size: clamp(16px, 3vw, 34px);
    line-height: clamp(24px, 4vw, 44px);
    @apply font-primary;
  }

  .heading4 {
    font-size: clamp(14px, 2.5vw, 24px);
    line-height: clamp(20px, 3vw, 32px);
    @apply font-primary;
  }

  /* Paragraphs */
  .paragraph {
    font-size: clamp(16px, 4vw, 24px); /* Responsive scaling in pixels */
    line-height: clamp(24px, 5vw, 32px);
    @apply font-montserrat;
  }

  .paragraph-small {
    font-size: clamp(14px, 4vw, 18px); /* Adjusted for desktop */
    line-height: clamp(20px, 5vw, 24px);
    @apply font-poppins;
  }

  .paragraph-extra-small {
    font-size: clamp(12px, 3vw, 16px); /* Responsive scaling in pixels */
    line-height: clamp(16px, 4vw, 20px);
    @apply font-poppins;
  }
</style>
