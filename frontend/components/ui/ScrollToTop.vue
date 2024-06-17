<template>
  <button
    v-if="showButton"
    class="fixed bottom-4 right-4 bg-darkblue100 dark:bg-blue100 text-white px-2 py-2 rounded-full transition-all z-50"
    @click="scrollToTop"
  >
    <ArrowUp color="white" />
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
