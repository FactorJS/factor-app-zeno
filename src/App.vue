<template>
  <div class="zeno-content">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
</script>
<style lang="less">
@import "./style.less";
</style>
