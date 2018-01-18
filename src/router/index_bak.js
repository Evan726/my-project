import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/pages/Login.vue'

import Index from '@/components/pages/Index.vue'
import HomePage from '@/components/pages/MainPage.vue'
import ArticlePage from '@/components/pages/ArticlePage.vue'
import ArticleDetailsPage from '@/components/pages/ArticleDetailsPage.vue'
import ResourcesPage from '@/components/pages/ResourcesPage.vue'
import ResourcesDetailsPage from '@/components/pages/ResourcesDetailsPage.vue'
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
      component: Index
    }, {
      path: '/index/:oneClassId/',
      component: Index,
      children: [{
        path: 'index',
        name: 'HomePage',
        component: HomePage,
        children: [
          {
            path: 'article',
            name: 'ArticlePage',
            component: ArticlePage
          }, {
            path: 'article/:towClassId',
            name: 'ArticlePage',
            component: ArticlePage
          }, {
            path: 'articledetails',
            name: 'ArticleDetailsPage',
            component: ArticleDetailsPage
          }, {
            path: 'articledetails/:towClassId',
            name: 'ArticleDetailsPage',
            component: ArticleDetailsPage
          }, {
            path: 'components/',
            name: 'ArticleDetailsPage',
            component: ComponentsPage
          }, {
            path: 'components/:towClassId',
            component: ComponentsPage,
            children: [{
              path: '',
              name: 'VueComponentsIndexPage',
              component: VueComponentsIndexPage
            }, {
              path: 'details',
              name: 'VueComponentsDetailsPage',
              component: VueComponentsDetailsPage
            }]
          }
        ]
      }]
    }
  ]
})
