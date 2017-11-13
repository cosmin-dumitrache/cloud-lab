import Vue from 'vue'
import Router from 'vue-router'
import Students from '@/components/Students'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Students',
      component: Students
    }
  ]
})
