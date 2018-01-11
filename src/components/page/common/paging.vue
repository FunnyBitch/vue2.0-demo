<template>
    <div class="pager pager-id"  v-if="page.pageCount>0">
        <span class="form-inline" v-show="page.switchAble">
            <select class="alarm-selects" v-model="page.pageSize" v-on:change="click(1,$event,true)"
                    number>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </span>
        <a class="btn-34-empty middle-num"  v-if="page.pageCount>=1" v-on:click="click(page.pageCurrent-1,$event)">
            <span class="iconfont icon-left icon-16"></span>
        </a>
        <a class="btn-34-text middle-num" v-if="page.pageCurrent>=1&&page.pageCount>=1" v-on:click="click(1,$event)">1</a>
        <a class="btn-34-text middle-num" v-if="page.pageCurrent>3&&page.pageCount>5">...</a>
            <!--等于三个的情况-->
            <span v-if = "page.pageCount== 3&&page.pageCurrent<=3" class="middle-btn middle-num">
                <a v-for="item in 1"   class="btn-34-text middle-num" v-on:click="click(1+$index+1,$event)">{{1+$index+1}}</a>
            </span>
            <!--等于四个的情况-->
            <span v-if = "page.pageCount== 4&&page.pageCurrent<=4" class="middle-btn middle-num">
                 <a v-for="item in 2"   class="btn-34-text middle-num" v-on:click="click(1+$index+1,$event)">{{1+$index+1}}</a>
            </span>
            <!--大于等于5个的情况-->
            <span v-if = "page.pageCount>=5&&page.pageCurrent<4" class="middle-btn middle-num">
                 <a v-for="item in 3"   class="btn-34-text middle-num" v-on:click="click(1+$index+1,$event)">{{1+$index+1}}</a>
            </span>
            <!--大于等于5个的情况并且为不显示最后的...的情况-->
            <span v-if = "page.pageCount>=5&&page.pageCurrent>=4&&(page.pageCount-page.pageCurrent)<=2" class="middle-btn middle-num">
                <a v-for="item in [3,2,1]" track-by="$index"  class="btn-34-text middle-num" v-on:click="click(page.pageCount-item,$event)">{{page.pageCount-item}}</a>
            </span>
            <!--大于等于5个的情况并且为显示最后的...的情况-->
            <span v-if = "page.pageCount>=5&&page.pageCurrent>=4&&(page.pageCount-page.pageCurrent)>2&&(page.pageCurrent-1)>=3" class="middle-btn middle-num">
                <a v-for="item in [-1,0,1]"   class="btn-34-text middle-num" v-on:click="click(page.pageCurrent+item,$event)">{{page.pageCurrent+item}}</a>
            </span>
        <a class="btn-34-text middle-num" v-if="(page.pageCount-page.pageCurrent)>2&&page.pageCount>5">...</a>
        <a class="btn-34-text middle-num" v-if="page.pageCount>1" v-on:click="click(page.pageCount,$event)">{{page.pageCount}}</a>
        <a class="btn-34-empty middle-num" v-if="page.pageCount>=1" v-on:click="click(page.pageCurrent+1,$event)">
            <span class="iconfont icon-right icon-16"></span>
        </a>
    </div>
</template>
<style type="text/css" lang="less" scoped>
    .icon-16{
        font-size:16px;
        height:16px;
        text-align:center;
    }
    .alarm-selects{
        height: 28px;
        min-width: 40px;
        border: 1px solid #D1DDEB;
        background: #fff;
        padding:0 20px;
    }
    .btn-34-text,.btn-34-empty{

        -moz-user-select:none;
    }
    .middle-btn{
        display: inline-block;
    }
    .middle-num{
        margin-right: 3px;
    }
    .middle-num:last-child{
        margin-right: 0;
    }
</style>
<script type="text/javascript">
    module.exports = {
        data: function () {
            return {
                indexsss:'',
                jumpPage:null,//跳转到那一页
            }
        },
        ready: function () {
            var that = this;
            this.showPage(that.page.pageCurrent || 1, null, true);
        },
        //父组件传递过来的数据
        props: ["page"],
        methods: {
            showPage: function (pageIndex, $event, forceRefresh) {
                var that = this;
                if (pageIndex > 0) {
                    //最后一页时下一页处理
                    if (pageIndex > that.page.pageCount) {
                        pageIndex = that.page.pageCount;
                    };

                    //列表数据
                    that.page.pageCurrent = pageIndex;
                    //计算分页按钮数据
                    if (that.page.pageCount > that.page.showPages) {
                        if (pageIndex <= (that.page.showPages - 1) / 2) {
                            that.page.showPagesStart = 1;
                            that.page.showPageEnd = that.page.showPages - 1;
                        }
                        else if (pageIndex >= that.page.pageCount - (that.page.showPages - 3) / 2) {
                            that.page.showPagesStart = that.page.pageCount - that.page.showPages + 2;
                            that.page.showPageEnd = that.page.pageCount;
                        }
                        else {
                            that.page.showPagesStart = pageIndex - (that.page.showPages - 3) / 2;
                            that.page.showPageEnd = pageIndex + (that.page.showPages - 3) / 2;
                        }
                    };
                    //处理分页点中样式
                    var buttons = $(".pager-id").find("a");
                    that.$nextTick(function () {
                        for (var i = 0; i < buttons.length; i++) {
                            if (buttons.eq(i).html() != pageIndex) {
                                buttons.eq(i).removeClass("actives");
                            } else {
                                buttons.eq(i).addClass("actives");
                            }
                        };
                    });
                }
            },
            click:function(pageIndex,$event){
                //保留vue对象
                var that = this;
                if(pageIndex > that.page.pageCount){
                    return;
                };
                if(pageIndex <1){
                  return;
                };
                that.$dispatch("pagerChange",pageIndex);
            }
        },
        events:{
            refreshPager:function(page){
                //保留vue对象
                var that = this;
                //dom加载和数据传输需要时间
                that.$nextTick(function (){
                    that.showPage(page);
                });
            }
        }
    };
    var Vue = require("vue");
    //只能输入正整数过滤器
    Vue.filter('onlyNumeric', {
        // model -> view
        // 在更新 `<input>` 元素之前格式化值
        read: function (val) {
            return val;
        },
        // view -> model
        // 在写回数据之前格式化值
        write: function (val, oldVal) {
            var number = +val.replace(/[^\d]/g, '')
            return isNaN(number) ? 1 : parseFloat(number.toFixed(2))
        }
    });
</script>
