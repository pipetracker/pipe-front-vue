import Vue from 'vue'
import Router from 'vue-router'
// import store from '../vuex'

Vue.use(Router)

// const load = component => () => import(/* webpackChunkName: `${component}` */ `@/components/${component}.vue`)
const load = component => () => import(`@/components/${component}.vue`)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/activity-log',
      name: 'ActivityLog',
      components: {
        content: load('templates/ActivityLog')
      }
    },
    {
      path: '*',
      redirect: '/activity-log'
    }
  ]
})

// router.beforeEach((to, from, next) =>
//   Promise.all([
//     store.dispatch(''),
//     next()
//   ])
// )

export default router
