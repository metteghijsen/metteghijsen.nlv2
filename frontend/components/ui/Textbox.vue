<template>
  <div
    class="flex justify-center items-center bg-white dark:bg-[#020520] "
  >
    <div v-motion-slide-visible-once-bottom class="w-full py-9 xl:px-[250px] xl:grid xl:grid-cols-2 flex justify-center flex-col items-center lg:items-start px-4 cursor-default">
      <div class="w-full flex flex-row justify-start lg:max-w-[600px] mt-7 cursor-default lg:text-[70px] md:text-[45px] text-[30px] poppins break-words whitespace-normal text-black dark:text-white">
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
