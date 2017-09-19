<template>
    <div class="app-header">
        <span class="iconfont icon-left header-left" :style="back?'opacity:1':'opacity:0'" @click="goBack()"></span>
        <span class="header-mid">{{headTitle}}</span>
        <span class="header-right" v-if = "!showLogout" @click="loginOut()">退出</span>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                test:"map",
            }
        },
        props: ['headTitle','showLogout','back'],

        methods:{
            goBack() {
                let that = this;
                that.$router.go(-1)
            },
            loginOut() {
                let that = this;
                that.$router.push("/login")
            }
        }
    }
</script>
<style scoped>
.app-header{
    background: #fff;
    height:44px;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    border-bottom: 1px solid rgba(204,204,204,0.3);
}
.header-left{
    padding-left: 2%;
    float: left;
    height:44px;
    width:18%;
    font-size: 30px;
    line-height:44px;
    text-align: left;
    font-weight: 100;
    color: #32BCED;
}
.header-mid{
    float: left;
    height:44px;
    width:60%;
    line-height:44px;
    text-align: center;
}
.header-right{
    float: left;
    height:44px;
    width:20%;
    line-height:44px;
    text-align: center;
    color: #32BCED;
}
</style>
