<template>
    <div class="my-zone">
        <head-top head-title="自定义指令" back="drag" show-logout = "ratation"></head-top>
        <div class="my-zone-content" :style = "{height:contentHeight}">
            <div class="drag-box" v-drag></div>
            <input type="number" style="display: inline-block;height: 30px;width: 100%;outline: none;border: 1px solid orange;margin-top: 150px;" />
            <div class="drag-test"></div>
        </div>
    </div>
</template>

<script>
    import headTop from './../../common/header'
    export default {
        name: 'drag',
        data () {
            return {
                contentHeight:null,//内容区的高度
            }
        },
        components: {
            headTop,
        },
        //没在<keep-alive>标签下始终进入 created,和mounted钩子函数中
        created: function () {
        },
        mounted: function () {
            let that = this;
            //获取屏幕的高度
            let screenHeight = document.documentElement.clientHeight;
            //计算content的高度
            that.contentHeight = (screenHeight-44)+'px'
        },
        methods:{

        }
    }
</script>

<style lang="less" type="text/css" scoped>
    .my-zone{
        background: #ffffff;
    }
    .my-zone-content{
        position: relative;
        overflow: hidden;
        margin-top: 44px;
        width:100%;
    }
    .drag-box{
        position: absolute;
        top:0;
        left:0;
        height:50px;
        width:50px;
        background: orangered;
    }
    .drag-test{
        height:120px;
        width:120px;
        background: #ff27a0;
        margin: 50px auto;
    }
</style>
