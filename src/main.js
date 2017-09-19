// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router-config'
import VueLazyload from 'vue-lazyload'
import store from './store/store'  // 引入store
import FastClick from 'fastclick'//移动端点击延时300处理
import Mint from 'mint-ui'

import 'mint-ui/lib/style.css'
import axios from 'axios'
import 'animate.css'
import ToggleButton from 'vue-js-toggle-button'

Vue.prototype.$ajax = axios

// directive(自定义指令)
import './directive/Commondirective'
// filter(自定义过滤器)
import './filter/filter'


Vue.use(ToggleButton)
Vue.use(Mint);
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
//图片懒加载配置项
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/logo.png'),
    loading: require('./assets/logo.png'),
    try: 1 // default 1
})
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    //mode: 'history',//需不要加hash值（地址后面，history不加，并且在回退可以控制回退的位置）
    scrollBehavior(to, from, savedPosition) {//控制滚动,只有将mode设置成history才能控制位置
        console.log("进入位置");
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
        //if (savedPosition) {
        //    return savedPosition
        //} else {
        //    if (from.meta.keepAlive) {
        //        from.meta.savedPosition = document.body.scrollTop;
        //    }
        //    return { x: 0, y: to.meta.savedPosition ||0}
        //}
    }
})
router.beforeEach((to, from, next) => {
    //console.log(to);
    //console.log(from);
    //console.log(next);
    if(to.fullPath == "/homepage/order"){
        console.log("到order那一页，不跳转");
        next(false)
    }else if(to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }else {
        next();
    }

})

/* eslint-disable no-new */
new Vue({
    router,
    store,
}).$mount('#app')
