import Vue from "vue"
import Router from "vue-router"
import { Photo, Photos, Gallery } from "@/containers"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path      : "/",
      name      : "Photos",
      component : Photos
    },
    {
      path      : "/gallery",
      name      : "Gallery",
      component : Gallery
    },
    {
      path      : "/photo/:id",
      name      : "Photo",
      component : Photo,
      props     : true
    }
  ]
})
