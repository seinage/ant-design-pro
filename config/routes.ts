export default [
  { path: '/user',name:'登录', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { name: '欢迎页面',path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: '管理员页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { name: '管理员页面',path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList', name: '表格页' },
  {
    path: '/equipCenter',
    icon: 'crown',
    name: '设备中心',
    access: 'canAdmin',
    routes: [
      { path: '/equipCenter', redirect: '/equipCenter/list' },
      { name: '设备列表',path: '/equipCenter/list', component: './EquipCenter/EquipList' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
