<template>
    <div class="test-box">
        <head-top head-title="test" show-logout = "test"></head-top>
        <div class="test-box-content">
            <div class="vueX-demo">
                <span class="map-header">vueX store使用</span>
                <div style="line-height: 30px;text-align: center;color: #7b007b;font-size: 30px;">{{count}}</div>
                <div style="margin: 20px auto;overflow: hidden;width: 50%;">
                    <mt-button size="small" style="min-width:60px" type="primary" @click="addNumber('+',5)">+</mt-button>
                    <mt-button size="small" style="margin-left: 30px;min-width:60px" type="primary" @click="cutNumber('-',5)">-</mt-button>
                </div>
                <div style="margin: 10px auto;overflow: hidden;width: 30%;">
                    <mt-button type="danger" @click = "clearCount()">数字清1</mt-button>
                </div>
                <span style="line-height: 30px;display: inline-block;text-align: center;width: 100%;">语言:{{language}}</span>
            </div>
            <div class="vueX-demo">
                <span class="map-header">子组件向父组件传参</span>
                <input type="text"  class="watch-input" v-model.trim = "compontent"/>
                <component-test :contentInfo = 'compontent' @change-info = "change"></component-test>
            </div>
            <div class="animate-demo">
                <!--在cmd中npm install animate.css --save,然后在main.js中 import 引用-->
                <span class="map-header">vue过渡结合animate.css</span>
                <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="show = !show">改变</mt-button>
                <transition enter-active-class="animated bounceInDown" leave-active-class="animated rollOut">
                    <div v-if="show" style="height: 50px;width: 50px;background: orange;margin: 0 auto"></div>
                </transition>
            </div>
            <div class="html-demo">
                <span class="map-header">vue 多元素过渡效果</span>
                <transition name="fade" mode="out-in">
                    <mt-button  key="on" v-if="hide" size="small" style="min-width:60px;margin-left: 20%;" type="primary"  @click="hide = !hide">开</mt-button>
                    <mt-button key="off" v-else size="small" style="min-width:60px;margin-left: 20%;" type="primary"  @click="hide = !hide">关</mt-button>
                </transition>
            </div>
            <div class="html-demo">
                <span class="map-header">列表增减数字过渡</span>
                <input type="checkbox">
                <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="add">增加</mt-button>
                <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="remove">减少</mt-button>
                <div></div>
                <transition-group name="list">
                    <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
                </transition-group>
            </div>
            <div class="switch-demo">
                <span class="map-header">返回保存数据</span>
                <template v-for = "item in dataList">
                    <span>{{item.name}}</span>

                </template>
            </div>
            <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="showDialog()">显示弹窗</mt-button>
            <tips :head-data="headData" ref="dialog" @sure="sure">
                <h3 slot="title">{{headData.title}}</h3>
                <div class="ceshi" slot="body">哈哈  给爷笑一个</div>
            </tips>
        </div>

    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import headTop from './../common/header'
    import componentTest from './componentTest'
    import tips from './dialog'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                compontent:'父组件传给子组件的内容(子组件)',
                show:true,
                isEditing:false,
                hide:true,
                items: [1,2,3,4,5,6,7,8,9],
                nextNum: 10,
                firstIn:true,
                dataList:[],
                headData:{
                    title:"标题(哈哈)"
                }
            }
        },
        computed: {
            //获取store的状态state的值
            ...mapState([
                'count',
                'language'
            ])
        },
        components: {
            headTop,
            componentTest,
            tips
        },
        //在<keep-alive>标签下页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。
        created: function () {

        },
        mounted: function () {

        },
        activated: function () {
            var that = this;
            if(this.firstIn){
                that.getAjax();
                this.firstIn = false;
            }else{
                console.log("不请求数据")
            }

        },
        deactivated: function () {

        },
        methods:{
            getAjax(){
                let that = this;
                let datas = {
                    token:that.$store.state.token,
                    province:'',
                    municipal:'',
                    borough:''
                };
                $.ajax({
                    type: 'get',
                    url: 'http://iot.ideyee.com/business/statistics/dischargeStatistics',
                    dataType: 'json',
                    data: datas,
                    success: function (rs) {
                        if(rs.code == '0'){
                            that.dataList = [
                                {name:"眭刚"},{name:"小李"},{name:"小刚"}
                            ]

                        }
                    }
                })
            },
            randomIndex: function () {
                return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            },
            ...mapMutations([
                'CLEAR_COUNT','TEST_ADD','TEST_CUT'
            ]),
            clearCount() {
                let that = this;
                this.CLEAR_COUNT();
            },
            addNumber(type,num){
                this.TEST_ADD({type,num});
            },
            cutNumber(type,num){
                this.TEST_CUT({type,num});
            },
            change(info){

                console.log(info);
                this.compontent = info;
            },
            showDialog(){
                let that = this;
                that.$refs.dialog.showDialog();
            },
            sure(obj){
                let that = this;
                console.log(obj)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="less" scoped>
    .test-box{
        width:100%;
        overflow: hidden;
    }
    .test-box-content{
        overflow: hidden;
        margin-top: 44px;
        widows:100%;
        margin-bottom: 48px;
    }
    .vueX-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
    }

    .map-header{
        display: block;
        line-height: 40px;
        height: 40px;
        text-align: left;
        margin-left: 10px;
        font-weight: 600;
        color: #32BCED;
    }
    .watch-input{
        display: block;
        height:30px;
        width:60%;
        margin-left: 10%;
        margin-top: 10px;
        outline: none;
        border:1px solid #32BCED;
        border-radius: 15px;
        padding: 0 10%;
    }
    .animate-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
        min-height:130px;
    }
    .html-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
        min-height:130px;
    }
    .fade-leave-active,.fade-enter-active{
        transition: all 2s;
    }
    .fade-enter, .fade-leave-active {
        transform: translateX(60px);
        opacity: 0;

    }
    .list-item {
        display: inline-block;
        margin-right: 10px;
        margin-top: 20px;
        text-align: center;
        margin-left: 3px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-active {
        opacity: 0;
        transform: translateY(-30px);
    }
    .ceshi{
        font-size: 16px;
        color: red;
    }
</style>
