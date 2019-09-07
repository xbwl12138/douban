<template>
    <div class="big-box">
        <div class="top-box">
            <div class="name-box">
                <h2>{{arr.title}}</h2>
                <div class="xin-box">
                    <div>
                        <reta :values="arr.rating.average"></reta>
                    </div>
                    <div>
                        {{arr.collect_count}}
                        <i>人评价</i>
                    </div>
                </div>
                <p>{{arr.year}}/<span v-for="(v,i) in arr.genres" :key="i">{{v}}/</span><span v-for="(v,i) in arr.casts" :key="i">{{v.name}}/</span>{{arr.subtype}}</p>
                <router-link to="/home">用APP查看{{arr.casts[0].name}}资料</router-link>
            </div>
            <div class="img-box">
                <img :src="arr.images.large">
            </div>
            
        </div>
        <div class="think-box">
            <span>想看</span>
            <span>看过</span>
        </div>
        <div class="deta-box">
            <p>{{arr.title}}<span>的简介</span></p>
            <span id="spanId"></span>
            <span>简介暂无，如需访问，请点击连接<a href='http://www.baidu.com'>链接</a>
                <b @click="funb()">(展开)</b>
            </span>
        </div>
        <div class="feng-box">
            <p>查看更多相关分类</p>
            <span v-for="(v,i) in arr.genres" :key="i">{{v}}</span>
        </div>
        <div class="imgs-box">
            <p>{{arr.title}}<span> 演职人员的图片</span></p>
            <!-- <movie-ban :arr="arr"></movie-ban> -->
            <div class="img-nav">
                <img v-for="(v,i) in arr.casts" :src="v.avatars.small" :key="i">
            </div>
        </div>
        <div class="imgs-box">
            <p>{{arr.title}}<span>的短评</span></p>
        </div>
        <ping-lun></ping-lun>
        <ping-lun></ping-lun>
        <ping-lun></ping-lun>
        <ping-lun></ping-lun>
        <p class="ping-lun">显示更多评论</p>
        <div class="guang-gao">
            <img src="../../static/bm.jpg">
        </div>
        <div class="imgs-box">
            <p><span>关于 </span>{{arr.title}}<span> 的问答</span></p>
            <div class="wen-da">
                <p>大家对演员王超的喜爱程度为何如此之高？</p>
                <span>2.2万个回答</span>
            </div>
            <div class="wen-da">
                <p>篮球天才王飞转战演艺圈会怎样？</p>
                <span>3.2万个回答</span>
            </div>
            <div class="wen-da">
                <p>演员刘超转战NBA</p>
                <span>2万个回答</span>
            </div>
            <div class="wen-da">
                <p>韩国欧巴马文周进军国内演艺界</p>
                <span>1.9万个回答</span>
            </div>
            <div class="wen-da">
                <p>考研最高分被师大一米姓学生夺取</p>
                <span>1.8万个回答</span>
            </div>
        </div>
        <p class="ping-lun">显示更多问答</p>
        <div class="ban-box">
            <ban :v="arrb[0]"></ban>
            <banb :arr="arrc"></banb>
        </div>
    </div>
</template>
<script>
import reta from '../components/move/reta'
// import movieBan from '../components/movieBan'
import pingLun from '../components/pingLun'
import ban from '../components/ban'
import banb from '../components/banb'
export default {
    components:{
        reta,
        // movieBan,
        pingLun,
        ban,
        banb
    },
    data(){
        return {
            arrb:["推荐的豆列"],
            arrc:[]
        }
    },
    props:{
        arr:{
            type:Array,
            required:true
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/movienav"
        }).then((data)=>{
            console.log(data.data.faxianhaodianying);
            this.arrc = data.data.faxianhaodianying;
        },(err)=>{
            console.log(err);
        })
    }
    
    
}
</script>
<style scoped>
    .big-box{
        padding: .2rem;
        overflow: hidden;
    }
    .top-box{
        overflow: hidden;
    }
    .name-box{
        font-size:0;
        float: left;
        width:70%;
    }
    .name-box h2{
        font-size:.18rem;
        font-weight: 500;
    }
    .xin-box{
        overflow: hidden;
    }
    .xin-box div:nth-child(1){
        float: left;
    }
    .xin-box div:nth-child(2){
        float: right;
        font-size:.12rem;
        line-height: .21rem;
        /* margin-right:.2rem; */
    }
    .xin-box i{
        font-style: normal;
    }
    
    p{
        font-size:.16rem;
        padding:.2rem 0 .1rem;
        line-height: .28rem;
        color: #222;
    }
    a{
        font-size:.2rem;
        color:#42bd56;
        font-weight: 400;
    }
    .img-box{
        width:30%;
        float: right;
        text-align: center;
        margin-top:.24rem;
    }
    .img-box img{
        width:1rem;
        height:1.4rem;
    }
    .img-nav{
        /* background: skyblue; */
        display: flex;
        overflow: auto;
    }
    .img-nav img{
        margin-right:.2rem;
        width: 5rem;
        height:3rem;
    }
    .think-box{
        font-size:0;
    }
    .think-box span{
        font-size:.16rem;
        color:#ffac2d;
        display:inline-block;
        width:44%;
        text-align: center;
        border:1px solid #ffac2d;
        box-sizing:border-box;
        margin:.1rem;
        padding:.04rem 0;
        border-radius: .06rem;
    }
    .deta-box{
        font-size:0;
    }
    .deta-box p{
        padding:0;
    }
    .deta-box p:nth-child(1){
        color: #bbb;
    }
    .deta-box span:nth-child(2){
        color: #111;
        font-size:.16rem;
    }
    .deta-box span:nth-child(3){
        font-size:.16rem;
        color: #42bd56;
        color: #111;
    }
    .deta-box span:nth-child(3) b{
        color: #42bd56;
        font-weight:normal;
    }
    .feng-box{
        font-size:0;
    }
    .feng-box p{
        color:#bbb;
        padding:0;
        margin:.12rem 0;
    }
    .feng-box span{
        display: inline-block;
        background-color: #eee;
        border-radius: .08rem;
        font-size:.16rem;
        margin-right:.1rem;
        padding:.02rem .1rem;
        text-align: center;
    }
    .imgs-box p{
        color:#bbb;
    }
    .ping-lun{
        text-align: center;
        color: #42bd56;
    }
    .guang-gao img{
        width:100%;
        height:30%;
    }
    .wen-da{
        font-size:0;
        margin-bottom:.1rem;
    }
    .wen-da p{
        color: #111;
        padding:0;
    }
    .wen-da span{
        font-size:.16rem;
        color: #42bd56;
    }
</style>