<template>
    <div class="app">
        <!--vue2.0用来写过渡效果的-->
        <!--需求描述：当页面在进行轮播操作的时候希望能记录当前显示的轮播ID(activeIndex)。-->
        <!--当进入下一个页面再返回的时候能记住之前的选择，将轮播打到之前的ID位置。-->
        <!--所以我想将这部分信息固化在url中，轮播发生变化时，修改URL。-->
        <!--这样实现比较符最小修改原则，其余页面不用变动。  会使用到 <keep-alive>-->
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>
<script>
    //mui框架
    export default {
        name: 'app',
        //没在<keep-alive>标签下始终进入 created,和mounted钩子函数中
        created: function () {
            window.onpopstate = () => {
                if (!this.$store.state.allowBack) {    //    这个allowBack 是存在vuex里面的变量
                    history.go(1)
                }
            }
        },
        mounted: function () {

        },
        methods: {


        }
    }
</script>
<style src="./components/iconfont/iconfont.css"></style>
<style type="text/css" lang="less" scoped>
    @import 'commonStyle/common.css';
    /*@import './plugins/css/mui.min.css';*/
    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity 1s;
    }

    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
