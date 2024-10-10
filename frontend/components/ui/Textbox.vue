<template>
  <div
    class="flex justify-center items-center bg-white dark:bg-[#020520] "
  >
    <div v-motion-slide-visible-once-bottom class="py-6 xl:px-[100px] xl:grid xl:grid-cols-2 flex justify-center lg:items-start flex-col items-center px-4 cursor-default">
      <div class="mt-7 text-left w-full flex flex-row justify-start lg:max-w-[600px] xl:text-[70px] md:text-[40px] text-[30px] poppins break-words whitespace-normal cursor-default  text-black dark:text-white">
        <h1 v-motion-slide-bottom class="dark:custom-hover-darkmode transition-all ease-in-out">
          {{ titleText }}
        </h1>
      </div>
      <div class="flex justify-center md:max-w-[700px] w-full">
        <UiTypography v-motion-slide-bottom type="p" size="paragraph-small" class="text-left py-3">
          <slot />
        </UiTypography>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: 'Textbox',
  props: {
    titleText: {
      type: String,
      required: true
    }
  }
})
</script>
