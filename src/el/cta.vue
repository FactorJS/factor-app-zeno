<template>
  <section
    class="
      cta
      relative
      flex
      items-center
      text-center
      py-16
      px-8
      bg-purple-800
      md:py-24
    "
  >
    <figure class="absolute top-0 right-0 z-20 hidden mr-32 -mt-10 lg:block">
      <img :src="CtaImg" />
    </figure>
    <div class="max-w-xl mx-auto">
      <h1 class="font-normal tracking-tight text-3xl lg:text-4xl text-gray-100">
        Get better results with Zeno
      </h1>
      <div class="mt-2 text-lg text-gray-500 lg:text-xl">
        Save time and start with a solid foundation, then customize.
      </div>
      <div class="mt-4 md:mt-8">
        <ElemButton to="/about" class="bg-white">Free Consultation</ElemButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ElemButton from "@factor/ui/ElemButton.vue"
import CtaImg from "../img/cloud-with-shadow.svg"
</script>

<style lang="less">
.cta {
  background-image: url(../img/light-pattern.svg);
  background-position: 50% 50%;
  background-size: cover;
}
</style>
