<template>
  <NuxtLink :to="`/deliverable/${to}`">
    <div class="bg-white100 border-slate-200 dark:bg-slate-800 dark:border-slate-600 border-2 md:h-[700px] max-h-[700px] pb-4 lg:pb-0 md:pb-0 max-w-[460px] flex flex-col rounded-3xl relative m-0.5 custom-hover transition-all ease-in-out">
      <!-- Skeleton Loader -->
      <div v-if="!loaded" class="skeleton-loader bg-black20 dark:bg-slate-500 rounded-t-3xl aspect-square" />
      <!-- Actual content -->
      <div v-else class="relative">
        <div class="flex justify-center">
          <img
            v-if="loaded"
            :src="`/img/deliverables/${imageName}.png`"
            :alt="imageName"
            class="w-max rounded-t-3xl"
          >
        </div>
        <div v-if="projectType" class="absolute left-2 bottom-2 bg-black50 w-max rounded-2xl h-3 px-2 flex justify-center items-center">
          <div v-if="projectPeople === 'individual'" class="mr-1 h-2.5 flex items-center">
            <User2 color="white" class="h-2.5" />
          </div>
          <div v-if="projectPeople === 'group'" class="mr-1 h-2.5 flex items-center">
            <Users2 color="white" class="h-2.5" />
          </div>
          <UiTypography type="p" size="paragraph-extra-small" color="text-white100">
            {{ projectType }}
          </UiTypography>
        </div>
      </div>
      <div class="flex mt-1.5">
        <div class="flex flex-col pl-1.5">
          <div v-if="lo1" class="rounded-full bg-red100 w-2 h-2 my-0.5" title="UI (Analysis & Advice)" />
          <div v-if="lo2" class="rounded-full bg-orange100 w-2 h-2 my-0.5" title="UI (Execution & Validation)" />
          <div v-if="lo3" class="rounded-full bg-yellow100 w-2 h-2 my-0.5" title="Software Design & Development" />
          <div v-if="lo4" class="rounded-full bg-green100 w-2 h-2 my-0.5" title="Future Oriented Organisation" />
          <div v-if="lo5" class="rounded-full bg-blue100 w-2 h-2 my-0.5" title="Investigative Problem Solving" />
          <div v-if="lo6" class="rounded-full bg-purple100 w-2 h-2 my-0.5" title="Personal Leadership" />
          <div v-if="lo7" class="rounded-full bg-pink100 w-2 h-2 my-0.5" title="Goal-oriented Interaction" />
        </div>
        <div class="flex flex-col ml-2.5 mr-1.5">
          <UiTypography type="h4" size="heading4">
            {{ deliverableName }}
          </UiTypography>
          <UiTypography type="p" size="paragraph-small">
            {{ deliverableDescription }}
          </UiTypography>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { User2, Users2 } from 'lucide-vue-next'

const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})

</script>

<script>
export default defineComponent({
  name: 'Deliverable',
  props: {
    imageName: {
      type: String,
      required: true
    },
    deliverableName: {
      type: String,
      required: true
    },
    deliverableDescription: {
      type: String,
      required: true
    },
    projectType: {
      type: String,
      required: false,
      default: ''
    },
    projectPeople: {
      type: String,
      required: false,
      default: ''
    },
    to: {
      type: String,
      required: true
    },
    lo1: Boolean,
    lo2: Boolean,
    lo3: Boolean,
    lo4: Boolean,
    lo5: Boolean,
    lo6: Boolean,
    lo7: Boolean
  }
})
</script>

<style>
.custom-hover:hover {
  transform: translateY(-12px) !important;
}

.skeleton-loader {
  height: 65%;
  width: 100%;
  aspect-ratio: 1/1;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style>
