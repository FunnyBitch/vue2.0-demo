<template>
    <div class="login-box">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" class="pwd-box"></mt-field>
        <mt-button type="primary" size="large" @click = "goMain()" class="btn">登录</mt-button>
        <!--<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">蓝色</button>-->
        <mt-button type="primary" style="margin-top: 30px" @click="toastTest()">测试</mt-button>
        <mt-button type="primary" style="margin-top: 30px" @click="toast()">提示</mt-button>
        <sui-botton :buttom-obj = 'buttomObj' v-reclick="()=>helloFn()"></sui-botton>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import {sendLogin} from '../../../service/getData'
    import {mapMutations} from 'vuex'
    import api from './../../../api/fetch';
    import suiBotton from 'sui-botton'
    export default {
        name: 'hello',
        data () {
            return {
                username:'suigang',
                password:'123456',
                buttomObj:{
                    color:'#26a2ff',
                    text:"公共按钮"
                }
            }
        },
        components: {
            suiBotton
        },
        methods:{
            ...mapMutations([
                'SAVE_TOKEN'
            ]),
            helloFn:function(){
                let that = this;
                alert("测试通过")
            },
            toastTest(){
                let that = this;
                that.$testSui.top("我就是想测试一下啊");
//                that.$loading()
            },
            goMain(){
                let that = this;
//                that.$store.dispatch('saveToken',"4645tkfdjg");
//                this.$router.push('/homepage/map')
                 if(that.username != "suigang"){
                     Toast({
                         message: '账号错误',
                         position: 'bottom',
                         duration: 2000
                     })
                 }else if(that.password != "123456"){
                     Toast({
                         message: '密码错误',
                         position: 'bottom',
                         duration: 2000
                     })
                 }else{
                     let params = {
                         type:1,
                         account: 18888888888,
                         password: 'e10adc3949ba59abbe56e057f20f883e',
                         application:2,
                     };
                     api.commonApi('/business/auth/login',params)
                         .then(res => {
                             console.log('调用封装后的axios成功');
                             if(res.code == 0){
                                 that.$store.dispatch('saveToken',res.data.token);
                                 Toast({
                                     message: '登录成功',
                                     iconClass: 'iconfont icon-normal',
                                     duration: 1000
                                 });
                                 this.$router.push('/homepage/map')
                             }else{
                                 Toast({
                                     message: res.message,
                                     iconClass: 'iconfont icon-normal',
                                     duration: 1000
                                 });
                             }

                     });
                 }

            },
            toast(){
                let that = this;
                mui.toast("mui提示框")
            }
        }
    }
</script>
<style scoped>
    @import "../../../../less/globalVariable.less";
    /*@import "../../../plugins/css/toast.css";*/
    .login-box{
        padding: 180px 20px 20px;
        overflow: hidden;
    }
    .btn{
        margin-top: 20px;
    }
    .pwd-box{
        border-bottom: 1px solid #ccc;
    }
</style>
