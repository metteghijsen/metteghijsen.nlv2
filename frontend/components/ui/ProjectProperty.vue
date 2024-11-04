<template>
  <div class="inline-block border border-[#020520]/20 dark:border-slate-600 rounded-md px-2 py-1 text-center">
    <UiTypography type="p" size="paragraph-extra-small" class="font-medium">
      {{ propertyText }}
    </UiTypography>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'ProjectProperty',
  props: {
    propertyText: {
      type: String,
      required: true
    }
  }
})
</script>
