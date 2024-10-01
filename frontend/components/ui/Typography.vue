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
    font-size: clamp(2rem, 6vw, 6.875rem); /* Responsive scaling */
    line-height: clamp(2.5rem, 7vw, 9.375rem);
    @apply font-primary;
  }

  .heading1 {
    font-size: clamp(1.5rem, 5vw, 3.75rem); /* Responsive scaling */
    line-height: clamp(2rem, 5.5vw, 4rem);
    @apply font-primary;
  }

  .heading2 {
    font-size: clamp(1.25rem, 4vw, 2.5rem);
    line-height: clamp(1.75rem, 5vw, 3rem);
    @apply font-primary;
  }

  .heading3 {
    font-size: clamp(1rem, 3vw, 2.125rem);
    line-height: clamp(1.5rem, 4vw, 2.75rem);
    @apply font-primary;
  }

  .heading4 {
    font-size: clamp(0.875rem, 2.5vw, 1.5rem);
    line-height: clamp(1.25rem, 3vw, 2rem);
    @apply font-primary;
  }

  /* Paragraphs */
  .paragraph {
    font-size: clamp(1rem, 4vw, 1.5rem); /* Responsive scaling */
    line-height: clamp(1.5rem, 5vw, 2rem);
    @apply font-montserrat;
  }

  .paragraph-small {
    font-size: clamp(1rem, 4vw, 1.25rem); /* Responsive scaling */
    line-height: clamp(1.5rem, 5vw, 1.5rem);
    @apply font-poppins;
  }

  .paragraph-extra-small {
    font-size: clamp(0.75rem, 3vw, 1rem); /* Responsive scaling */
    line-height: clamp(1rem, 4vw, 1.25rem);
    @apply font-poppins;
  }
</style>
