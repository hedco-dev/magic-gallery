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
      flex: calc(25% - 8px);
      max-width:calc(25% - 8px);
      padding: 0 4px;

      img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
        background: #ffffff;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        border-radius: 5px;
      }
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media (max-width: 800px) {
      .column {
        flex: calc(50% - 8px);
        max-width: calc(50% - 8px);
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
