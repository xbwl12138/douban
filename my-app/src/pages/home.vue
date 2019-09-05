<template>
    <div>
        <div>
            <top-nav @zipao="fuShou"></top-nav>
        </div>
        <div class="a-box">
            <a href="#">影院热映</a>
            <a href="#">欧美新碟榜</a>
            <router-link to="/reg">注册账号</router-link>
            <router-link to="/login">登录账号</router-link>
        </div>
        <div class="loging-box" v-if="obj.length<1?true:false">
            <img src="../../static/loading.gif">
        </div>
        <div v-else>
            <div @click="fun(v.id)" v-for="(v,i) in obj" :key="i">
                <router-link :to="{path:'/shopping',query:{id:v.id}}">
                    <home-class :title="v.title" :content="v.title" :imgUrl="v.image" :category_name="v.category_name"></home-class>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import homeClass from '../components/home/homeClass'
export default {
    components:{
        topNav,
        homeClass
    },
    data(){
        return{
            obj:[],
            // souBool:1
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/homes"
        }).then((data)=>{
            this.obj = data.data.shouye;
        })
    },
    // methods: {
    //     fuShou(v){
    //         this.souBool = v
    //     }
    // }
}
</script>
<style scoped>

div a{
    font-size:.24rem;
}  
.a-box{
    padding:0 .2rem;
    margin-top:.8rem;
    font-size: 0;
    overflow: hidden;
} 
.a-box a{
    float: left;
    width:48.8%;
    text-align: center;
    list-style: none;
    background-color: #f6f6f6;
    margin-bottom: .08rem;
    border-radius: .02rem;
    font-size:.15rem;
    display: block;
    height: .4rem;
    line-height: .4rem;
    color: #494949;
}
.a-box a:nth-child(1){
    margin-right:.08rem;
}
.a-box a:nth-child(3){
    margin-right:.08rem;
}
.loging-box{
    text-align: center
}
</style>