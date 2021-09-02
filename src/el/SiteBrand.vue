<template>
  <router-link to="/">
    <img :src="LogoImg" class="h-8" :class="logoDisplay" />
    <img :src="LogoImgInverse" class="h-8" :class="logoInverseDisplay" />
  </router-link>
</template>
<script lang="ts" setup>
import { onResetUi } from "@factor/api"
import { ref, onMounted } from "vue"
import LogoImg from "../img/logo-zeno.svg"
import LogoImgInverse from "../img/logo-zeno-inverse.svg"
import { useRoute } from "vue-router"
const route = useRoute()
const logoDisplay = ref("")
const logoInverseDisplay = ref("")
const brandClass = () => {
  if (route.path === "/" || route.path === "/zeno/") {
    logoDisplay.value = "lg:hidden"
    logoInverseDisplay.value = "hidden lg:block"
  } else {
    logoDisplay.value = "block"
    logoInverseDisplay.value = "hidden"
  }
}

onMounted(() => {
  brandClass()
})

onResetUi(() => {
  brandClass()
})
</script>
