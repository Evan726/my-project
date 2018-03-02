<template>
  <div>
      <article-list></article-list>
  </div>
</template>

<script>
  import bus from '../../bus'
  import ArticleList from '../article/ArticleList.vue'
  import nav from '../../data/navData'
  export default {
    name: 'ArticlePage',
    components: {
      ArticleList
    },
    mounted: function () {
      let pageArr = nav[this.$route.params.pages].children
      for (let i = 0; i < pageArr.length; i++) {
        for (let ii = 0; ii < pageArr[i].children.length; ii++) {
          let muneArr = pageArr[i].children[ii]
          // console.log('1===>muneArr', muneArr)
          if (this.$route.params.componentId === muneArr.navId) {
            bus.$emit('uid', {
              title: muneArr.title,
              path: this.$route.path
            })
            break
          }
        }
      }
    },
    methods: {},
    watch: {
      $route (to, tofrom) {
        // console.log('1===>to', this.$route)
        let pageArr = nav[to.params.pages].children
        for (let i = 0; i < pageArr.length; i++) {
          for (let ii = 0; ii < pageArr[i].children.length; ii++) {
            let muneArr = pageArr[i].children[ii]
            // console.log('1===>muneArr', muneArr)
            if (to.params.componentId === muneArr.navId) {
              bus.$emit('uid', {
                title: muneArr.title,
                path: to.path
              })
              break
            }
          }
        }
      }
    }
  }
</script>

<style>

</style>
