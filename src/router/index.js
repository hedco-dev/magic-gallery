import Vue from "vue"
import Router from "vue-router"
import { Photo, Photos, Gallery } from "@/containers"
import { NODE_ENV } from "../config"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path      : "/",
      name      : "Photos",
      component : NODE_ENV === "development2" ? Photos : Gallery
    },
    {
      path      : "/photo/:id",
      name      : "Photo",
      component : Photo,
      props     : true
    }
  ]
})
