
import App from '../App'
//当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
const Login = r => require.ensure([], () => r(require('../components/page/login/login')), 'Login')
const Homepage = r => require.ensure([], () => r(require('../components/page/home/Homepage')), 'Homepage')
const Order = r => require.ensure([], () => r(require('../components/page/order/Order')), 'Order')
const Myzone = r => require.ensure([], () => r(require('../components/page/myzone/Myzone')), 'Mrzone')
const Test = r => require.ensure([], () => r(require('../components/page/test/test')), 'test')
const Map = r => require.ensure([], () => r(require('../components/page/map/map')), 'Map')
const Rotation = r => require.ensure([], () => r(require('../components/page/myzone/subUnit/rotation')), 'Mrzone')
const Uploader = r => require.ensure([], () => r(require('../components/page/myzone/subUnit/uploader')), 'Mrzone')
const Drag = r => require.ensure([], () => r(require('../components/page/myzone/subUnit/drag')), 'Mrzone')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //第一次跳转login页面
        {
            path: '',
            redirect: '/login'
        },
        //登录页
        {
            path: '/login',
            component: Login,
            meta: {
                allowBack: false,  // 添加该字段，表示进入这个路由是需要登录的
            },
        },
        //轮播图页面
        {
            path: '/rotation',
            component: Rotation,
        },
        //上传页面
        {
            path: '/uploader',
            component: Uploader,
        },
        //拖拽页面
        {
            path: '/drag',
            component: Drag,
        },
        //有footer的四个页面
        {
            path: '/homepage',
            name: 'Homepage',
            component: Homepage,
            children:[
                {
                    path: '/homepage/map',
                    name: 'map',
                    component: Map,
                    meta: {
                        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                    },
                },
                {
                    path: '/homepage/order',
                    name: 'order',
                    component: Order
                },
                {
                    path: '/homepage/test',
                    name: 'test',
                    component: Test,
                    meta: { keepAlive: true },
                },
                {
                    path: '/homepage/myzone',
                    name: 'myzone',
                    component: Myzone,
                    beforeEnter: (to, from, next) => {//单个路由的钩子函数
                        console.log("进入m路由")
                        if(from.fullPath == "/homepage/map"){
                            console.log("从地图页跳转过来的");
                            next()
                        }else{
                            next()
                        }

                    }
                },
            ]
        },
        //重定向,地址错误统一跳转到login
        { path: '*', redirect: '/' }
    ]
}];
