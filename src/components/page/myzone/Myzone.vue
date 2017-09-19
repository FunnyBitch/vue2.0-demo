<template>
    <transition name="router-order" mode="out-in">
        <div class="my-zone">
            <head-top head-title="myZone" show-logout = "mrZone"></head-top>
            <div class="my-zone-content">
                <h1>{{test}}</h1>
                <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="goRouter()">跳转轮播</mt-button>
                <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="goUploader()">第三方插件</mt-button>
                <mt-button size="small" style="min-width:60px;margin-left: 20%;margin-top: 20px;" type="primary" @click="goDrag()">自定义指令</mt-button>
            </div>
        </div>
    </transition>
</template>

<script>
    import headTop from './../common/header'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                test:"myzone",
            }
        },
        components: {
            headTop,
        },
        //没在<keep-alive>标签下始终进入 created,和mounted钩子函数中
        created: function () {
            console.log(1)
        },
        mounted: function () {
            console.log(2)
        },
        activated: function () {
            console.log(3);
        },
        deactivated: function () {
            console.log(4)
        },
        //进入路由前进行判断 ，不满足条件就不跳转。
        beforeRouteEnter (to, from, next) {
            if(true){
                console.log("正确");
                next();
            }else{
                console.log("错误");
                next(false)
            }
        },
        methods:{
            goRouter(){
                let that = this;
                that.$router.push('/rotation')
            },
            goUploader(){
                let that = this;
                that.$router.push('/uploader')
            },
            goDrag(){
                let that = this;
                that.$router.push('/drag')
            }
        }
    }
</script>

<style lang="less" type="text/css" scoped>
    .my-zone{
        background: orange;
        height:300px;
    }
    .my-zone-content{
        overflow: hidden;
        margin-top: 44px;
        width:100%;
    }
    .router-order-enter-active, .router-order-leave-active {
        transition: background 3s;
    }

    .router-order-enter, .router-order-leave-active {
        background: #fff;
    }
</style>
