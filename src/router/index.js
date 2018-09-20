import Vue from 'vue'
import Router from 'vue-router'
import Duration from '@/components/duration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Duration',
      component: Duration
    }
  ]
})
