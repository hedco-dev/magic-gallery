<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
const Row = {
  name: "Row"
}
export default Row

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(Row.name, Row)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
