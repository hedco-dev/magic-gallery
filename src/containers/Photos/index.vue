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
        <section id="photos">
          <a v-for="photo in gallery.photos"
            :key="photo.id"
            :href="genenrateImageUrl(photo)"
            :title="photo.title">
            <img :src="photo.url">
          </a>
        </section>
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

export default {
  mixins  : [storeResolver],
  name    : "Gallery",
  methods : {
    mapStateToProps(state) {
      return {
        gallery: state.gallery
      }
    },
    mapDispatchToProps(dispatch) {
      const actions = bindActionCreators(galleryAction, dispatch)
      this.actions = actions
      return {
        actions
      }
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
    photos        : [],
    scrollLoading : false,
    pageSize      : 20
  })
}
</script>
<style lang="scss" scoped>
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

    > img {
      width: 40px;
    }
  }
  #photos {
    /* Prevent vertical gaps */
    line-height: 0;
    margin: 0 8px;
    column-count: 4;
    column-gap: 7px;

    img {
      /* Just in case there are inline attributes */
      width: 100% !important;
      height: auto !important;
      margin: 4px 0;
      background: #ffffff;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }

  @media (max-width: 1200px) {
    #photos {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    #photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 400px) {
    #photos {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }

  .more-photo-loading {
    display: flex;
    margin: 10px 0;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 6px;
    }
  }
</style>
