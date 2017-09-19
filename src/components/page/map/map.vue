<template>
    <div class="map">
        <head-top head-title="map" showLogout show-logout = "map"></head-top>
        <div class="map-content">
            <div class="v-for-demo">
                <span class="map-header">v-for列子加filter自定义过滤</span>
                <template v-for = "item in list">
                    <div class="v-for-list" :style = "item.type != 0 ? 'color:#E43B60' : 'color:#1b1b1b'" @click="changeColor(item)">{{item | testFilter}}</div>
                </template>
            </div>
            <div class="watch-demo">
                <span class="map-header">自定义监听事件</span>

                <input type="number"  class="watch-input" v-model.number = "testWatch"/>
                <span class="watch-hint">{{watchHint}}</span>
            </div>
            <div class="v-else-if-demo">
                <span class="map-header">v-else-if例子</span>
                <!--.trim去掉前后空格-->
                <input type="text"  class="watch-input" v-model.trim = "type"/>
                <div style="line-height: 30px;text-align: center" v-if="type === 'A'">A</div>
                <div style="line-height: 30px;text-align: center" v-else-if="type === 'B'">B</div>
                <div style="line-height: 30px;text-align: center" v-else-if="type === 'C'">C</div>
                <div style="line-height: 30px;text-align: center" v-else>Not A/B/C</div>
            </div>
            <div class="v-for-component-demo">
                <span class="map-header">v-for用计算属性对数组进行处理</span>
                <div style="margin-left: 10px;font-size: 14px;color: #1b1b1b;line-height: 30px;">循环原数组[1,2,3,4,5,6,7,8,9]</div>
                <span style="display: inline-block;line-height: 30px;text-align: center;width: 10%;" v-for="n in evenNumbers">{{ n }}</span>
            </div>
            <div class="preventDefault-demo">
                <!--在@click事件后加.stop就阻止了事件冒泡-->
                <span class="map-header">事件冒泡列子</span>
                <div style="height: 100px;width: 100px;background: red;margin: 20px auto;overflow: hidden;" @click = "clickWai()">
                    <div style="height: 60px;width: 60px;background: blue;margin: 20px auto;overflow: hidden;" @click.stop = "clickMid()">
                        <div style="height: 20px;width: 20px;background: darkgreen;margin: 20px auto;overflow: hidden;" @click.stop = "clickLi()"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from './../common/header'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                test:"map",
                testWatch:"",
                watchHint:"你输入了才会有答案",
                list:[{
                    name:"测试1",
                    type:0
                },{
                    name:"测试2",
                    type:0
                },{
                    name:"测试3",
                    type:1
                },{
                    name:"测试4",
                    type:0
                },{
                    name:"测试5",
                    type:0
                }],
                type:"",
                numbers:[1,2,3,4,5,6,7,8,9]
            }
        },
        //计算属性
        computed: {
            //找出只能被3整除的数字显示出来
            evenNumbers: function () {
                return this.numbers.filter(function (number) {
                    return number % 3 === 0
                })
            }
        },
        components: {
            headTop,
        },
        methods:{
            changeColor(obj){
                let that = this;
                console.log(obj);
            },
            getAnswer(){
                let that = this;
                //模拟请求
                setTimeout(function(){
                    if(that.testWatch == "正确"){
                        that.watchHint = '输入正确'
                    }else{
                        that.watchHint = '输出错误请重新输入'
                    }
                },2000)
            },
            clickWai(){
                let that = this;
                alert("外")
            },
            clickMid(){
                let that = this;
                alert("中")
            },
            clickLi(){
                let that = this;
                alert("里")
            }
        },
        watch: {
            type(){
                let that = this;
                that.type = that.type;
            },
            // 如果 testWatch 发生改变，这个函数就会运行
            testWatch() {
                let that = this;
                that.watchHint = 'Waiting for you to stop typing...'
                that.getAnswer()
            }
        },
    }
</script>

<style scoped>
    .map{
        width:100%;
        overflow: hidden;
    }
    .v-for-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
    }
    .v-for-list{
        float: left;
        width:20%;
        height:30px;
        text-align: center;
        font-size: 12px;
        line-height:30px;
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
    .map-content{
        margin-top: 44px;
        width:100%;
        overflow: hidden;
        margin-bottom: 48px;
    }
    .watch-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
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
    .watch-hint{
        height: 40px;
        line-height:40px;
        font-size: 14px;
        color: #E43B60;
        display: block;
        width:100%;
        text-align: center;
    }
    .v-else-if-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
    }
    .v-for-component-demo,.preventDefault-demo{
        overflow: hidden;
        margin: 20px;
        border: 1px solid #c8c8c8;
    }
</style>
