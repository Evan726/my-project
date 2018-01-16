export default [{
  navId: '1',
  title: '前端开发',
  bigName: 'javascript',
  route: '/index/javascript/vue/article',
  children: [{
    navId: '1-1',
    title: 'VueJs',
    smallName: 'vue',
    children: [{
      navId: '1-1-1',
      title: '学习心得',
      route: '/index/javascript/vue/article'
    }, {
      navId: '1-1-2',
      title: '学习资料',
      route: '/index/javascript/vue/resources'
    }, {
      navId: '1-1-3',
      title: '组件',
      route: '/index/javascript/vue/components'
    }]
  }, {
    navId: '1-2',
    title: 'React',
    smallName: 'react',
    children: [{
      navId: '1-2-1',
      title: '学习心得',
      route: '/index/javascript/react/article'
    }, {
      navId: '1-2-2',
      title: '学习资料',
      route: '/index/javascript/react/resources'
    }, {
      navId: '1-2-3',
      title: '组件',
      route: '/index/javascript/react/components'
    }]
  }, {
    navId: '1-3',
    title: 'Angular',
    smallName: 'angular',
    children: [{
      navId: '1-3-1',
      title: '学习心得',
      route: '/index/javascript/angular/article'
    }, {
      navId: '1-3-2',
      title: '学习资料',
      route: '/index/javascript/angular/resources'
    }, {
      navId: '1-3-3',
      title: '组件',
      route: '/index/javascript/angular/components'
    }]
  }, {
    navId: '1-4',
    title: 'NodeJs',
    smallName: 'node',
    children: [{
      navId: '1-4-1',
      title: '学习心得',
      route: '/index/javascript/node/article'
    }, {
      navId: '1-4-2',
      title: '学习资料',
      route: '/index/javascript/node/resources'
    }]
  }]
}, {
  navId: '2',
  title: '后端开发',
  bigName: 'server',
  route: '/index/server/java/article',
  children: [{
    navId: '2-1',
    title: 'JAVA',
    smallName: 'java',
    children: [{
      navId: '2-1-1',
      title: '列表1',
      route: '/index/server/java/article'
    }, {
      navId: '2-1-2',
      title: '列表2',
      route: '/index/server/java/resources'
    }]
  }, {
    navId: '2-2',
    title: 'PHP',
    smallName: 'php',
    children: [{
      navId: '2-2-1',
      title: '列表1',
      route: '/index/server/php/article'
    }, {
      navId: '2-2-2',
      title: '列表2',
      route: '/index/server/php/resources'
    }]
  }]
}]
