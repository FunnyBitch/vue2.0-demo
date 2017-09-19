/**
 * 过滤
 */
import Vue from 'vue'
//异常和正常过滤
Vue.filter('testFilter', function (value, input) {
    if(value.type == 0){
        return value.name
    }else if(value.type == 1){
        return "未安装"
    }
});


