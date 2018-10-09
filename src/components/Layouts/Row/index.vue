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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* Create row as container of columns */
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
