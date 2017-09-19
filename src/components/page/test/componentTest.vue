<template>
    <div class="compontent-box">
        <mt-button size="small" type="primary" @click = "goFarter()">{{contentInfo}}</mt-button>
    </div>
</template>

<script>

    export default {
        name: 'hello',
        data () {
            return {

            }
        },
        props: ['contentInfo'],
        methods:{
            goFarter(){
                let that = this;
                let info = '';
                if(that.contentInfo == "改变了"){
                    info = '父组件传给子组件的内容'
                }else{
                    info = '改变了'
                };
                that.$emit('change-info',info);
            }
        }
    }
</script>


<style type="text/css" lang="less" scoped>
.compontent-box{
    margin: 20px auto;
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
</style>
