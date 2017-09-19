<template>
    <div>
        <router-view></router-view>
        <ul class="app-footer">
            <li>
                <router-link to="/homepage/map">主页</router-link>
            </li>
            <li>
                <router-link to="/homepage/order">预定</router-link>
            </li>
            <li>
                <router-link to="/homepage/myzone">颜色</router-link>
            </li>
            <li>
                <router-link :to="{ path: '/homepage/test'}">测试</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                test:"home"
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    @import "../../../../less/globalVariable.less";
    .app-footer{
        height:48px;
        width:100%;
        position: fixed;
        left:0;
        bottom:0;
        list-style-type: none;
        line-height: 48px;
        text-align: center;
        border-top:1px solid rgba(204,204,204,0.2);
        background: #fdfdfd;
    }
    .app-footer li{
        float: left;
        width:25%;
        height:48px;
    }
</style>
