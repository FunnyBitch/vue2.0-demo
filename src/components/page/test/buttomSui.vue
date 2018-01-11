<template>
    <div class="compontent-box">
        <button :style="{background:buttomObj.color}">{{buttomObj.text}}</button>
    </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        props: ['buttomObj'],
        methods:{

        }
    }
</script>


<style type="text/css" lang="less" scoped>
    .compontent-box{
        overflow: hidden;
        margin:20px 0;
    }
    button{
        color: #fff;
        display: inline-block;
        padding:0 5px;
        font-size: 12px;
        margin: 0;
        border: 0;
        outline: none;
        border-radius: 2px;
        height:28px;
        min-width: 70px;
    }
</style>
