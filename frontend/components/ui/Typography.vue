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
      .font-primary{
        @apply font-poppins font-bold
      }

      .font-button{
        @apply font-poppins font-bold uppercase
      }

      /* Headings */

      .heading1{
        @apply font-primary md:text-[60px] text-[46px] leading-[64px]
      }

      .heading2{
        @apply font-primary md:text-[40px] text-[30px] leading-[44px]
      }

      .heading3{
        @apply font-primary md:text-[34px] text-[26px] leading-[38px]
      }

      .heading4{
        @apply font-primary md:text-[24px] text-[18px] leading-[28px]
      }

      /* Paragraphs */

      .paragraph{
        @apply font-montserrat md:text-[24px] text-[18px] leading-[28px]
      }

      .paragraph-small{
        @apply font-poppins md:text-[20px] text-[16px] leading-[24px]
      }

      .paragraph-extra-small{
        @apply font-poppins md:text-[16px] text-[12px] leading-[20px]
      }

      /* Button fonts */

      .button-big{
        @apply font-button text-[24px] leading-[24px]
      }

      .button-regular{
        @apply font-button text-[20px] leading-[24px]
      }

    </style>
