<template>
    <div class="cover" v-show = "show">
        <div class="dialog-box" >
            <div class="dialog-head">
                <div class="dialog-title">
                    <slot name="title"></slot>
                </div>
                <div class="dialog-close" @click.stop="closeDialog()">X</div>
            </div>
            <div class="dialog-body">
                <slot class="body"></slot>
            </div>
            <div class="dialog-footer">
                <mt-button size="small" style="min-width:60px;margin-left: 20%" type="primary" @click="sure">确定</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show:false
            }
        },
        props: ['headData'],
        mounted: function () {
            let that = this;
            let clientHeight = document.body.clientHeight;
            $(".cover").height(clientHeight)
        },
        methods:{
            closeDialog(){
                let that = this;
                console.log(1);
                that.show = false;
            },
            showDialog(){
                let that = this;
                that.show = true;
            },
            sure(){
                let that = this;
                that.show = false;
                that.$emit('sure', {name:'小刚刚', age:28}); // 触发yes事件
            },
        }
    }
</script>


<style type="text/css" lang="less" scoped>
    .cover{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        background: rgba(0,0,0,0.2);
        z-index: 9999;
        overflow: hidden;
    }
    .dialog-box{
        height:200px;
        width:200px;
        position: fixed;
        top:50%;
        left:50%;
        margin-top: -100px;
        margin-left: -100px;
        background: #fff;
        border-radius: 4px;
        z-index: 999;
    }
    .dialog-head{
        height:40px;
        width:100%;
        position: relative;
    }
    .dialog-title{
        width:100%;
        height:40px;
        text-align: center;
        line-height: 40px;
        color: #000;
        font-size: 14px;
    }
    .dialog-close{
        position: absolute;
        right:0;
        top:0;
        height:40px;
        width: 60px;
        text-align: center;
        line-height: 40px;
        color: #000;
        z-index: 1000;
    }
    .dialog-body{
        width:100%;
        overflow: hidden;
    }
</style>
