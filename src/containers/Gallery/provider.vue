<template>
  <Provider 
  :mapDispatchToProps="mapDispatchToProps" 
  :mapStateToProps="mapStateToProps" 
  :store="store">
    <template 
    slot-scope="{gallery, actions}">
      <Gallery 
      :actions="actions" 
      :gallery="gallery" 
      />
    </template>
  </Provider>
</template>

<script>
import { bindActionCreators } from "redux";
import Provider from "vuejs-redux";
import { galleryAction } from "../../actions";
import Gallery from "./";
import { gallery } from "../../reducers";
import { config as configStore } from "../../store/configuration";
export default {
  methods: {
    mapStateToProps(state) {
      return {
        gallery: state.gallery
      };
    },

    mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(galleryAction, dispatch) };
    }
  },

  components: {
    Gallery,
    Provider
  },

  data: () => ({
    store: configStore(),
    title: ""
  })
};
</script>
