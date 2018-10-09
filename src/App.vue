<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { DEFAULT_TITLE } from "./config"

export default {
  name  : "App",
  watch : {
    $route(to, from) {
      document.title = `${DEFAULT_TITLE}: ${to.meta.title(to)}`
    }
  }
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(#a8eb00, #a8ebaa);
  }
</style>
