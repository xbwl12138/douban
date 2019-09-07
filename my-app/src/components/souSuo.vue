<template>
    <div v-show="num==1?false:true">
        <div class="top-box">
            <span @click="fun()">关闭</span>
            <input type="text">
        </div>
        <ul>
            <li v-for="(v,i) in arr" :key="i">
                <router-link :to="v.url"> 
                    <h2 :style="{color:v.color}">{{v.title}}</h2>
                    <p :style="{color:v.color}">{{v.content}}</p>
                </router-link>
            </li>
        </ul>
        <div class="a-box">
            <router-link to="/reg">注册账号</router-link>
            <router-link to="/login">登陆豆瓣</router-link>
            <router-link to="/home">使用桌面版</router-link>
            <router-link to="/home">使用豆瓣APP</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bool:true,
            arr:[
                {title:"电影",content:"影院热映",color:"#2384E8",url:"/movie"},
                {title:"电视",content:"正在热播",color:"#7a6adb",url:"/home"},
                {title:"图书",content:"畅销排行",color:"#9f7860",url:"/book"},
                {title:"同城",content:"周末活动",color:"#e6467e",url:"/home"},
                {title:"小组",content:"志趣相投",color:"#2ab8cc",url:"/group"},
                {title:"音乐",content:"新碟榜",color:"#f48f2e",url:"/home"},
                {title:"阅读",content:"电子书",color:"#9f7860",url:"/home"},
                {title:"游戏",content:"虚拟世界",color:"#5774c5",url:"/home"},
                {title:"应用",content:"玩手机",color:"#596cdd",url:"/home"},
                {title:"东西",content:"心爱之物",color:"#e1644d",url:"/home"},
                {title:"PM",content:"心愿歌单",color:"#40afc9",url:"/status"},
                {title:"市集",content:"购买原创",color:"#42db56",url:"/home"}
            ]
        }
    },
    methods: {
        fun(){
            this.$store.commit("funb");
        }
    },
    props: {
        num:{
            type:Number,
            required:true
        }
    }
}
</script>
<style scoped>
    .top-box{
        height: .48rem;
        padding: 0 .18rem;
        background: #fff;
        border-bottom: .01rem solid #f3f3f3;
        font-size: 0;
        line-height: .5rem;
        display: flex;
    }
    .top-box span{
        color: #42bd56;
        font-size: .16rem;
    }
    .top-box input{
        box-sizing: border-box;
        border: 0;
        background: url(../../static/e3.png) no-repeat 50% #f3f3f3;
        background-size: .173rem;
        border-radius: .03rem;
        width: 80%;
        height: .32rem;
        font-size: .14rem;
        margin-top:.08rem;
        margin-left:.3rem;
    }
    ul{
        margin-top:.1rem;
        overflow: hidden;
    }
    ul li{
        font-weight: 400;
        font-size: .24rem;
        line-height: .28rem;
        float:left;
        text-align: center;
        width:33.3%;
        margin:.1rem 0;
    }
    ul li a{
        font-size:.16rem;
    }
    ul li a h2{
        font-weight:400;
    }
    .a-box{
        font-size:.16rem;
        color:#000;
        overflow: hidden;
        padding:0 .2rem;
    }
    .a-box a{
        display: inline-block;
        width:49%;
        text-align: center;
        padding:.12rem 0;
        color: #42bd56;
    }
</style>