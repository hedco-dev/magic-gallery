<template>
  <Provider :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store">
    <template slot-scope="{gallery, actions}">
      <main>
        <Header>
          <a href="#/">
            <img src="/static/images/return.svg" />
          </a>
        </Header>
        <section class="main">
          <div class="main-image-container">
            <img :src="actionPhotos.photo.url" />
          </div>
          <div class="action-container"
            style="width:90%;margin:0 auto">
            <div class="image-box">
              <a v-if="actionPhotos.prevPhoto"
                href="#"
                @click="changeImage($event, actionPhotos.prevPhoto.id)">
                <img :src="actionPhotos.prevPhoto.url" />
              </a>
            </div>
            <div class="return">
              <a href="#/">
                <img src="/static/images/close.svg"
                  style="width:48px" />
              </a>
            </div>
            <div class="image-box">
              <a v-if="actionPhotos.nextPhoto"
                href="#"
                @click="changeImage($event, actionPhotos.nextPhoto.id)">
                <img :src="actionPhotos.nextPhoto.url" />
              </a>
            </div>
          </div>
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
import { Row, Column, Header } from "../../components"
import { divideArray } from "../../utils"
import findIndex from "lodash/findIndex"

export default {
  mixins : [storeResolver],
  name   : "Photo",
  methods: {
    mapStateToProps(state) {
      this.photos = [...state.gallery.photos]
      return {
        gallery: state.gallery
      };
    },
    mapDispatchToProps(dispatch) {
      const actions = bindActionCreators(galleryAction, dispatch)
      this.actions = actions
      return {
        actions
      };
    },

    changeImage(e, photoId) {
      if (e) {
        e.preventDefault()
      }
      const index = findIndex(this.photos, _ => _.id === photoId)
      this.$set(this.actionPhotos, "photo", this.photos[index])
      this.$set(this.actionPhotos, "nextPhoto", this.photos[index + 1])
      this.$set(this.actionPhotos, "prevPhoto", this.photos[index - 1])
    }
  },
  props: ["id"],
  components: {
    Provider,
    Row,
    Header
  },

  mounted() {
    const index = findIndex(this.photos, _ => _.id === this.id)
    this.changeImage(null, this.photos[index].id)
  },

  data: () => ({
    photos: [],
    actionPhotos: {
      photo: {},
      prevPhoto: {},
      nextPhoto: {}
    }
  })
};
</script>
<style scoped>
  section.main {
    padding-top: 70px;
  }

  .main-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 4px 0px black;
    padding: 4px;
    margin: 0 auto;
    width: 90%;
  }

  .main-image-container > img {
    width: 100%;
  }

  .action-container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    text-align: center;
  }

  .action-container > div {
    flex: 1;
    padding: 8px;
  }
  .action-container > div.image-box {
    margin: 8px 0;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 4px 0px black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .action-container > div.return {
    align-self: center;
    text-align: center;
  }
  .action-container > div img {
    width: 100%;
    max-height: 200px;
  }
</style>
