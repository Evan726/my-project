import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Login.vue'
import Index from '@/pages/index.vue'
import MainPage from '@/pages/MainPage.vue'
//  import HomePage from '@/pages/pages/HomePage.vue'
import ArticlePage from '@/pages/pages/ArticlePage.vue'
import ArticleDetailsPage from '@/pages/pages/ArticleDetailsPage.vue'
import ComponentsPage from '@/pages/pages/ComponentsPage.vue'
import VueComponentsIndexPage from '@/pages/pages/VueComponentsIndexPage.vue'
import VueComponentsDetailsPage from '@/pages/pages/VueComponentsDetailsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [{
        path: '/index/:pages',
        name: 'MainPage',
        component: MainPage,
        children: [
          {
            path: 'article/:componentId',
            name: 'ArticlePage',
            component: ArticlePage
          }, {
            path: 'articledetails/:componentId',
            name: 'ArticleDetailsPage',
            component: ArticleDetailsPage
          }, {
            path: 'components/:componentId',
            component: ComponentsPage,
            children: [{
              path: '',
              name: 'VueComponentsIndexPage',
              component: VueComponentsIndexPage
            }, {
              path: 'details/:componentName',
              name: 'VueComponentsDetailsPage',
              component: VueComponentsDetailsPage
            }]
          }
        ]
      }]
    }
  ]
})
