<template>
  <Provider :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store">
    <template slot-scope="{gallery, actions}">
      <main>
        <Header>
          <button @click="actions.getPhotos(pageSize)">
            <img src="/static/images/refresh.svg"
              :class="{refreshing: gallery.loading}">
          </button>
        </Header>
        <Row>
          <Column v-for="(photoChunk, index) in galleryItems"
            :key="index">
            <a v-for="photo in photoChunk"
              :key="photo.id"
              :href="genenrateImageUrl(photo)"
              :title="photo.title">
              <img :src="photo.url">
            </a>
          </Column>
        </Row>
        <ScrollHandler :handler="loadnewData"
          :prevent-handle="scrollLoading">
          <div class="more-photo-loading">
            <img src="/static/images/loader.gif">
            <strong>will see more photos...</strong>
          </div>
        </ScrollHandler>
        <section v-if="gallery.loading && gallery.photos.length===0"
          class="loading">
          <img src="/static/images/loader.gif">
        </section>
      </main>
    </template>
  </Provider>
</template>

<script>
import { bindActionCreators } from "redux"
import Provider from "vuejs-redux"
import { galleryAction } from "../../actions"
import { storeResolver } from "../../mixins"
import { Row, Header, ScrollHandler } from "../../components"
import { divideArray } from "../../utils"
export default {
  mixins : [storeResolver],
  name   : "Gallery",
  methods: {
    mapStateToProps(state) {
      const gallery = { ...state.gallery }
      this.galleryItems = divideArray(gallery.photos, 4)
      return {
        gallery
      };
    },
    mapDispatchToProps(dispatch) {
      const actions = bindActionCreators(galleryAction, dispatch)
      this.actions = actions
      return {
        actions
      };
    },

    loadnewData() {
      this.scrollLoading = true
      this.actions.getPhotos(this.pageSize)
      this.scrollLoading = false
    },

    genenrateImageUrl(photo) {
      return `/#/photo/${photo.id}`
    }
  },

  components: {
    Provider,
    Row,
    Header,
    ScrollHandler
  },

  data: () => ({
    photos       : [],
    scrollLoading: false,
    pageSize     : 20
  })
};
</script>
<style scoped>
  main {
    padding-top: 70px;
  }
  .loading {
    top: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#a8eb00, #a8ebaa);
  }
  .loading > img {
    width: 40px;
  }
  .more-photo-loading {
    display: flex;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
  }
  .more-photo-loading img {
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
</style>
