<template>
    <div class="my-zone">
        <head-top head-title="上传组件" show-logout = "ratation" back="drag"></head-top>
        <div class="my-zone-content">
            <div id="wrapper">
                <div id="scroller">
                    <div id="pullDown">
                        <span>下拉刷新…</span>
                    </div>
                    <ul id="list">
                        <li>llll 1</li>
                        <li>llll 2</li>
                        <li>llll 3</li>
                        <li>llll 4</li>
                        <li>llll 5</li>
                        <li>llll 6</li>
                        <li>llll 7</li>
                        <li>llll 8</li>
                        <li>llll 9</li>
                        <li>llll 10</li>
                        <li>llll 11</li>
                        <li>llll 12</li>
                        <li>llll 13</li>
                        <li>llll 14</li>
                        <li>llll 15</li>
                        <li>llll 16</li>
                        <li>llll 17</li>
                        <li>llll 18</li>
                        <li>llll 19</li>
                        <li>llll 20</li>
                        <li>llll 21</li>
                        <li>llll 22</li>
                        <li>llll 23</li>
                        <li>llll 24</li>
                        <li>llll 25</li>
                        <li>llll 26</li>
                        <li>llll 27</li>
                        <li>llll 28</li>
                    </ul>
                    <div id="pullUp">
                        <span>上拉加载更多…</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from './../../common/header'
    import iScroll from 'iscroll'
    export default {
        name: 'hello',
        data () {
            return {
                language:"zh",
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
        methods:{

        }
    }
</script>

<style lang="less" type="text/css" scoped>
    .my-zone{
        background: #fff;
        min-height:300px;
    }
    .my-zone-content{
        overflow: hidden;
        margin-top: 44px;
        width:100%;
    }
    /**
    *
    * Pull down styles
    *
    */
    #wrapper {
        position: absolute;
        z-index: 1;
        top: 45px;
        bottom: 0px;
        left: 0;
        width: 100%;
        background: #ccc;
        overflow: hidden;
    }

    #scroller {
        position: absolute;
        z-index: 1;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        width: 100%;
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -o-text-size-adjust: none;
        text-size-adjust: none;
    }

    #scroller ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: left;
    }

    #scroller li {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #fff;
        background-color: #fafafa;
        font-size: 14px;
    }
    #pullDown,#pullUp,.pulldown-tips{
        height:40px;
        line-height:40px;
        text-align:center;
    }
    .pulldown-tips{
        position:absolute;
        top:-40px;
        left:0;
        width:100%;
    }

</style>
