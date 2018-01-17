import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Login.vue'

import Index from '@/pages/Index.vue'
import ArticlePage from '@/pages/ArticlePage.vue'
import ArticleDetailsPage from '@/pages/ArticleDetailsPage.vue'
import ResourcesPage from '@/pages/ResourcesPage.vue'
import ResourcesDetailsPage from '@/pages/ResourcesDetailsPage.vue'
import ComponentsPage from '@/pages/ComponentsPage.vue'
import VueComponentsIndexPage from '@/pages/VueComponentsIndexPage.vue'
import VueComponentsDetailsPage from '@/pages/VueComponentsDetailsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/index',
      component: Index,
      children: [{
        path: '/index/:bigName/:smallName/article',
        name: 'ArticlePage',
        component: ArticlePage
      }, {
        path: '/index/:bigName/:smallName/articledetails',
        name: 'ArticleDetailsPage',
        component: ArticleDetailsPage
      }, {
        path: '/index/:bigName/:smallName/resources',
        name: 'ResourcesPage',
        component: ResourcesPage
      }, {
        path: '/index/:bigName/:smallName/resourcesdetails',
        name: 'ResourcesDetailsPage',
        component: ResourcesDetailsPage
      }, {
        path: '/index/:bigName/:smallName/components',
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
      }]
    }
  ]
})
