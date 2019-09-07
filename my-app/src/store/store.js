import Vue from 'vue'
import Vuex from 'vuex'
// 使用中间件使用vuex
Vue.use(Vuex);
// 需要让外部使用实例化的store对象  export导出
export let store = new Vuex.Store({
    // 数据源
    state:{
        num:1
    },
    mutations: {
        funa(state){
            state.num = 0;
        },
        funb(state){
            state.num = 1;
        }
    }
})
