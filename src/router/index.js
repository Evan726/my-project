import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login.vue'
import Index from '@/components/Index.vue'
import MainPage from '@/components/MainPage.vue'
//  import HomePage from '@/components/pages/HomePage.vue'
import ArticlePage from '@/components/pages/ArticlePage.vue'
import ArticleDetailsPage from '@/components/pages/ArticleDetailsPage.vue'
import ComponentsPage from '@/components/pages/ComponentsPage.vue'
import VueComponentsIndexPage from '@/components/pages/VueComponentsIndexPage.vue'
import VueComponentsDetailsPage from '@/components/pages/VueComponentsDetailsPage.vue'

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
