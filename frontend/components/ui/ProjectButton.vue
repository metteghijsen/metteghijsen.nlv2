<template>
  <NuxtLink :href="projectLink">
    <div
      :class="[
        'flex items-center justify-between border border-[#020520]/20 dark:bg-[#020520] bg-white dark:border-slate-600 rounded-2xl py-8 px-6 md:min-w-[600px] w-[300px] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-900',
        isPreviousProject ? 'flex-row-reverse text-right hover:-translate-x-2' : 'flex-row text-left hover:translate-x-2'
      ]"
    >
      <div>
        <UiTypography type="p" size="paragraph-small" class="font-medium opacity-60 py-1">
          {{ isPreviousProject ? 'Vorig Project' : 'Volgend Project' }}
        </UiTypography>
        <UiTypography type="p" size="paragraph" class="font-bold">
          {{ projectTitle }}
        </UiTypography>
      </div>
      <div class="transition-transform duration-300">
        <ArrowLeft v-if="isPreviousProject" class="dark:stroke-white stroke-black" :stroke-width="1.25" :size="32" />
        <ArrowRight v-else class="dark:stroke-white stroke-black" :stroke-width="1.25" :size="32" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
</script>

<script lang="ts">
export default defineComponent({
  name: 'ProjectButton',
  props: {
    projectTitle: {
      type: String,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    },
    isPreviousProject: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>
