import Vue from 'vue'
import Router from 'vue-router'
import { Gallery, Photo } from '@/containers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/photo/:id/:name',
      name: 'Photo',
      component: Photo
    }
  ]
})
