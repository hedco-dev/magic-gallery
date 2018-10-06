<template>
  <Provider 
  :mapDispatchToProps="mapDispatchToProps" 
  :mapStateToProps="mapStateToProps" 
  :store="store">
    <template slot-scope="{gallery, actions}">
        <div>
            <ul>
            <li>
                <i v-if="gallery.loading">loading...</i>
                <button @click="actions.getPhotos(5)" >click</button>
            </li>
            <li v-for="photo in gallery.photos" :key="photo.Id">
                <img :src="photo.images.original_still.url" />
            </li>
            </ul>
        </div>
    </template>
  </Provider>
</template>

<script>
import { bindActionCreators } from 'redux'
import Provider from 'vuejs-redux'
import { galleryAction } from '../../actions'
import { storeResolver } from '../../mixins'

export default {
  mixins: [storeResolver],

  methods: {
    mapStateToProps(state) {
      return {
        gallery: state.gallery
      }
    },
    mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(galleryAction, dispatch) }
    }
  },

  components: {
    Provider
  },

  data: () => ({
    
  })
}
</script>
