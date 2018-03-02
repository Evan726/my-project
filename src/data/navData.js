export default [{
  navId: '0',
  title: '首页',
  route: 'index'
}, {
  navId: '1',
  title: '前端开发',
  route: 'javascript',
  children: [{
    navId: '1-1',
    title: 'VueJs',
    children: [{
      navId: '1-1-1',
      title: '学习心得',
      route: 'article'
    }, {
      navId: '1-1-2',
      title: '学习资料',
      route: 'article'
    }, {
      navId: '1-1-3',
      title: '组件',
      route: 'components'
    }]
  }, {
    navId: '1-2',
    title: 'React',
    smallName: 'react',
    children: [{
      navId: '1-2-1',
      title: '学习心得',
      route: 'article'
    }, {
      navId: '1-2-2',
      title: '学习资料',
      route: 'resources'
    }, {
      navId: '1-2-3',
      title: '组件',
      route: 'components'
    }]
  }, {
    navId: '1-3',
    title: 'Angular',
    smallName: 'angular',
    children: [{
      navId: '1-3-1',
      title: '学习心得',
      route: 'article'
    }, {
      navId: '1-3-2',
      title: '学习资料',
      route: 'article'
    }, {
      navId: '1-3-3',
      title: '组件',
      route: 'pages'
    }]
  }, {
    navId: '1-4',
    title: 'NodeJs',
    smallName: 'node',
    children: [{
      navId: '1-4-1',
      title: '学习心得',
      route: 'article'
    }, {
      navId: '1-4-2',
      title: '学习资料',
      route: 'article'
    }]
  }]
}, {
  navId: '2',
  title: '后端开发',
  route: 'server',
  children: [{
    navId: '2-1',
    title: 'JAVA',
    children: [{
      navId: '2-1-1',
      title: '列表1',
      route: 'article'
    }, {
      navId: '2-1-2',
      title: '列表2',
      route: 'article'
    }]
  }, {
    navId: '2-2',
    title: 'PHP',
    children: [{
      navId: '2-2-1',
      title: '列表1',
      route: 'article'
    }, {
      navId: '2-2-2',
      title: '列表2',
      route: 'article'
    }]
  }]
}]
