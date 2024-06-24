<template>
  <div
    :class="[darkModeClass, 'gradient-background-light']"
    class="pt-14 pb-14 flex justify-center"
  >
    <div class="w-full py-9 md:px-[250px] md:grid md:grid-cols-2 flex flex-col bg-white dark:bg-[#020520] border-y-slate-200 dark:border-y-slate-600 border-y-[1px]">
      <div class="flex justify-center max-w-[700px] mt-7 cursor-default lg:text-[70px] md:text-[45px] text-[30px] poppins break-words whitespace-normal text-black dark:text-white">
        <h1 v-motion-slide-bottom class="dark:custom-hover-darkmode transition-all ease-in-out">
          {{ titleText }}
        </h1>
      </div>
      <div class="flex justify-center max-w-[700px]">
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
