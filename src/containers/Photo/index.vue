<template>
  <div>
    <h2>Photos</h2>
  </div>
</template>

<script>
import { storeResolver } from '../../mixins'
export default {
  name: '',
  mixins: [storeResolver],
  data () {
    return {
      msg: ''
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
