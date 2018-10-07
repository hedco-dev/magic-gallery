<template>
    <div class="column">
        <slot></slot>
    </div>
</template>

<script>
const Column = {
  name: "Column"
}
export default Column

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(Column.name, Column)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    /* Create four equal columns that sits next to each other */
    .column {
      flex: 25%;
      max-width: 25%;
      padding: 0 4px;

      img {
        margin-top: 8px;
        vertical-align: middle;
      }
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media (max-width: 800px) {
      .column {
        flex: 50%;
        max-width: 50%;
      }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media (max-width: 600px) {
      .column {
        flex: 100%;
        max-width: 100%;
      }
    }
</style>
