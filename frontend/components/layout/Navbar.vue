<template>
  <div>
    <div class="justify-center flex">
      <div class="bg-white100 dark:bg-[#020520] border-b-slate-200 dark:border-b-slate-600 border-b-2 lg:pb-2.5 lg:pt-3 py-3.5 flex flex-row items-center w-full fixed top-0 z-40">
        <NuxtLink v-if="isMenu" @click="toggleMenu">
          <UiTypography type="p" size="heading4" class="font-bold pl-4 md:pl-6 whitespace-nowrap">
            Mette Ghijsen
          </UiTypography>
        </NuxtLink>
        <NuxtLink v-else to="/">
          <UiTypography type="p" size="heading4" class="font-bold pl-4 md:pl-6 whitespace-nowrap">
            Mette Ghijsen
          </UiTypography>
        </NuxtLink>
        <div class="flex justify-end w-full">
          <div v-if="isMenu">
            <button class="lg:hidden p-1 mr-4 dark:hover:bg-[#020520] hover:bg-slate-100 rounded-md ease-in-out transition-colors" @click="toggleMenu">
              <X class="h-2.5 w-2.5" :color="isDarkMode ? 'white' : 'black'" />
            </button>
          </div>
          <div v-else>
            <button class="lg:hidden p-1 mr-4 dark:hover:bg-[#020520] hover:bg-slate-100 rounded-md ease-in-out transition-colors" @click="toggleMenu">
              <Menu class="h-2.5 w-2.5" :color="isDarkMode ? 'white' : 'black'" />
            </button>
          </div>
        </div>
        <div class="hidden lg:flex lg:justify-end lg:w-full lg:items-center">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="px-6 link"
            :class="{ 'active-link': isActive(link.to) }"
          >
            <UiTypography type="p" size="paragraph-extra-small" :class="{ 'font-bold': isActive(link.to) }" class="whitespace-nowrap">
              {{ link.text }}
            </UiTypography>
            <div
              v-if="isActive(link.to)"
              class="bg-darkblue100 dark:bg-blue100 h-0.5 rounded-full"
            />
            <div
              v-else
              class="bg-darkblue100 dark:bg-blue100 h-0.5 rounded-full stripe"
            />
          </router-link>

          <!-- <button class="p-1 ml-12 dark:hover:bg-slate-700 hover:bg-slate-100 rounded-md ease-in-out transition-colors">
            <Languages class="h-3 w-3" :color="isDarkMode ? 'white' : 'black'" />
          </button> -->

          <NuxtLink to="https://github.com/metteghijsen/metteghijsen.nlv2" class="p-1 mx-2 mr-2 ml-11 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md ease-in-out transition-colors">
            <Github class="h-2.5 w-2.5" :color="isDarkMode ? 'white' : 'black'" />
          </NuxtLink>

          <button class="p-1 mr-10 dark:hover:bg-slate-700 hover:bg-slate-100 rounded-md ease-in-out transition-colors" @click="toggleDarkMode">
            <Moon v-if="isDarkMode" class="h-3 w-3" color="white" />
            <Sun v-else class="h-2.5 w-2.5" color="black" />
          </button>
        </div>
      </div>
    </div>

    <div :class="{ 'dark': isDarkMode }">
      <div class="transition-colors ease-in-out delay-150">
        <div v-if="!isMenu">
          <slot />
        </div>
        <div v-else>
          <div v-if="isMenu" class="lg:hidden top-12 flex justify-center items-center flex-col z-30 left-0 fixed w-full bg-white100 border-b-slate-200 dark:bg-[#020520] dark:border-b-slate-600">
            <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              class="link dark:hover:bg-[#020520] hover:bg-slate-100 py-5 w-full border-b-slate-200 dark:border-b-slate-600 border-b-2 text-center"
              @click="toggleMenu"
            >
              <UiTypography type="p" size="paragraph-small">
                {{ link.text }}
              </UiTypography>
            </router-link>

            <div class="flex justify-center items-center w-full">
              <!-- <button class="p-1 my-4 dark:hover:bg-[#020520] hover:bg-slate-100 rounded-md ease-in-out transition-colors" @click="toggleDarkMode">
                <Languages class="h-3 w-3" :color="isDarkMode ? 'white' : 'black'" />
              </button> -->

              <NuxtLink to="https://github.com/metteghijsen/semester6-website" class="p-1 hover:bg-slate-100 dark:hover:bg-black rounded-md ease-in-out transition-colors">
                <Github class="h-2.5 w-2.5" :color="isDarkMode ? 'white' : 'black'" />
              </NuxtLink>

              <button class="p-1 my-4 dark:hover:bg-[#020520] hover:bg-slate-100 rounded-md ease-in-out transition-colors" @click="toggleDarkMode">
                <Moon v-if="isDarkMode" class="h-3 w-3" color="white" />
                <Sun v-else class="h-2.5 w-2.5" color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Sun, Moon, Github, Menu, X } from 'lucide-vue-next'

const isDarkMode = ref(false)
const isMenu = ref(false)

const applyDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  const storedDarkMode = localStorage.getItem('darkMode')
  if (storedDarkMode) {
    isDarkMode.value = JSON.parse(storedDarkMode)
    applyDarkMode()
  } else if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    applyDarkMode()
  } else {
    isDarkMode.value = false
    applyDarkMode()
  }
})

watch(isDarkMode, (newVal) => {
  localStorage.setItem('darkMode', JSON.stringify(newVal))
  applyDarkMode()
})

const links = [
  { text: 'About', to: '/#about' },
  { text: 'Cases', to: '/#cases' },
  { text: 'Contact', to: '#contact' }
]

const isActive = (route) => {
  if (process.client) {
    return window.location.pathname === route
  }
  return false
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

const toggleMenu = () => {
  isMenu.value = !isMenu.value

  if (isMenu.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

</script>

<style scoped>
.active-link {
  font-weight: bold;
  color: #0000FF; /* Blauwe kleur voor de actieve link */
}

.stripe {
  width: 0;
  transition: width 0.4s;
}

.link:hover .stripe {
  width: 100%;
  transition: width 0.4s;
  transition-timing-function: ease-in-out;
  opacity: 80%;
}
</style>
