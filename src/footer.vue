<template>
  <footer class="bg-purple-900 text-gray-200 p-8 lg:px-4">
    <div
      class="
        relative
        max-w-6xl
        mx-auto
        flex flex-col
        md:flex-row
        justify-between
      "
    >
      <figure class="absolute top-0 left-0 z-20 hidden ml-56 -mt-16 lg:block">
        <img :src="FooterFigure" />
      </figure>
      <div>
        <SiteBrand></SiteBrand>
      </div>
      <nav class="mt-8 w-full flex flex-wrap md:block md:w-auto md:mt-0">
        <template v-for="(item, index) in nav">
          <router-link
            :to="item.path"
            class="
              block
              text-xl
              mt-3
              px-2
              w-1/2
              text-gray-500
              hover:text-gray-100
              md:text-base md:inline
            "
          >
            {{ item.name }}
          </router-link>
        </template>
      </nav>
    </div>
    <div
      class="
        max-w-6xl
        mx-auto
        pt-8
        flex
        items-center
        justify-between
        text-gray-500
      "
    >
      <div class="text-xs">
        Built with
        <a href="https://factor.so/" target="_blank">Factor</a>
      </div>
      <div class="text-xs text-right">&copy; {{ currentYear() }}</div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import SiteBrand from "./el/SiteBrand.vue"
import FooterFigure from "./img/cloud-with-shadow.svg"
const currentYear = (): number => {
  return new Date().getFullYear()
}

const nav = [
  {
    _item: "home",
    path: "/",
    name: "Home",
  },
  {
    _item: "pricing",
    path: "/pricing",
    name: "Pricing",
  },
  {
    _item: "about",
    path: "/about",
    name: "About",
  },
]
</script>
