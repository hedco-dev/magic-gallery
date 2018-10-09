import Vue from "vue"
import Router from "vue-router"
import { Photo, Photos, Gallery } from "@/containers"
import { NODE_ENV, DEFAULT_TITLE } from "../config"
Vue.use(Router)

// configure router based on configuration
export default new Router({
  routes: [
    {
      path : "/",
      name : "Photos",
      meta : {
        title: () => DEFAULT_TITLE
      },
      component: NODE_ENV === "development2" ? Photos : Gallery
    },
    {
      path      : "/photo/:id/:title?",
      name      : "Photo",
      component : Photo,
      meta      : {
        title: (to) => `${to.params.title}'s Photo`
      },
      props: true
    }
  ]
})
