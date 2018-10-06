<template>
  <div class="hello">
    <ul>
      <li>
        <i v-if="gallery.loading">loading...</i>
        <button @click="actions.getPhotos(5)" >ciclk</button>
      </li>
      <li v-for="photo in gallery.photos">
      <img :src="photo.images.original_still.url" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["actions", "gallery"],
  data() {
    return {
      msg: ""
    };
  },
  components: {
      
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
