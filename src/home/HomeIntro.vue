<template>
  <section class="home-hero pt-12 lg:pt-0">
    <div
      class="home-hero-img hidden lg:block bg-purple-900"
      :style="`background-image: url(${HomeFigure});`"
    />

    <div class="mx-auto px-4 py-8 md:px-16 md:py-12 le">
      <h1
        class="
          font-normal
          tracking-tight
          leading-tight
          text-3xl
          my-2
          text-purple-900
          lg:text-6xl
        "
      >
        Welcome to Zeno, <br />SaaS Factor Theme
      </h1>
      <div class="mt-6 text-lg text-gray-600 lg:text-2xl max-w-prose m-auto">
        Zeno is a minimalist theme suited for the needs of start-ups, tech
        businesses and SaaS companies. Styles are powered by Tailwind, a
        low-level CSS framework.
      </div>
      <div class="mt-4 md:mt-8 flex space-x-6">
        <ElemButton btn="primary" to="/about" size="lg">About</ElemButton>
        <ElemButton btn="default" to="/pricing" size="lg">Pricing</ElemButton>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import ElemButton from "@factor/ui/ElemButton.vue"
import HomeFigure from "../img/intro.svg"
</script>
<style lang="less">
.home-hero {
  display: grid;
  grid-template-columns: 1fr minmax(750px, 1fr);
  grid-gap: 0;
  align-items: center;
  min-height: 450px;
  height: 85vh;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: 50vh;
    height: auto;
  }

  .home-hero-img {
    height: 100%;
    width: 100%;
    background-position: 0 0;
    background-size: cover;
  }
}
</style>
