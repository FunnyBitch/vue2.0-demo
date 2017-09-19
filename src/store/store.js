// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import api from './../api/fetch';
import {
    TEST_ADD,
    TEST_CUT,
    CLEAR_COUNT,
    SAVE_TOKEN,
    STORE_MOVIE_ID,
} from './mutation-types'
Vue.use(Vuex) // 要记得use一下哦

export default new Vuex.Store({
    state: {
        count: '1',
        token:"",
        contextPathSrc: '后台接口公共部分',
        language:"zh"
    },
    //同步操作运用
    mutations: {
        //加数字
        [TEST_ADD](state){
            state.count++
        },
        //减数字
        [TEST_CUT](state){
            state.count--
        },
        //初始化数字
        [CLEAR_COUNT](state){
            state.count = 1
        },
        [SAVE_TOKEN](state,token){
            state.token = token
        },
        [STORE_MOVIE_ID]( state, res) {
            state.token = res;      //state.数据名 = data
        },
    },
    //异步操作运用
    actions: {
        //登录后保存token
        saveToken({ commit }, res) {
            //此处是触发mutation的 STORE_MOVIE_ID为"mutation名"
            commit(STORE_MOVIE_ID, res);
        },
    },
    getters: {

    }
})
