<template>
    <div class="my-zone">
        <head-top head-title="轮播组件" back="drag" show-logout = "ratation"></head-top>
        <div class="my-zone-content">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../../../images/muwu.jpg"></div>
                    <div class="swiper-slide"><img src="../../../../images/shuijiao.jpg"></div>
                    <div class="swiper-slide"><img src="../../../../images/yuantiao.jpg"></div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
    //引用swiper插件  方法:第一步:npm install --save swiper,第二步:引用如下,第三步:开始使用
    import headTop from './../../common/header'
    import '../../../../plugins/css/swiper.min.css'
    import Swiper from 'swiper';

    export default {
        name: 'hello',
        data () {
            return {

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
            //初始化swiper
            this.$nextTick(function () {
                var swiper = new Swiper('.swiper-container', {
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    loop: true,
                    grabCursor:true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。适合pc端
                    autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
                    speed: 600,//滑动速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
                    autoplay: 3000,//可选选项，自动滑动
//                    initialSlide :2,//设定初始化时slide的索引。
                    direction : 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
                    onTouchEnd: function() {
                        swiper.startAutoplay()
                    }
                });
            })

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
        background: orange;
        height:300px;
    }
    .my-zone-content{
        overflow: hidden;
        margin-top: 44px;
        width:100%;
    }
    .swiper-container{
        width: 100%;
        height: 300px;
        .swiper-wrapper{
            width: 100%;
            height: 100%;
        }
        .swiper-slide{
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 300px;
            img{
                display: block;
                height: 300px;
                width:100%;
            }
        }
    }
</style>
