import Vue from "vue"
import Router from "vue-router"
import { Photo, Photos } from "@/containers"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path      : "/",
      name      : "Photos",
      component : Photos
    },
    {
      path      : "/photo/:id",
      name      : "Photo",
      component : Photo,
      props     : true
    }
  ]
})
