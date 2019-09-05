<template>
    <div class="top-box">
        <div v-for="(v,i) in arr" :key="i" class="top-one">
            <a href="https://m.douban.com/group/649980/">
                <p>{{v.title}}</p>
                <div class="img-box">
                    <div class="img-top">
                        <img :src="v.images.small">
                        <span class="span-tit">{{v.title}}</span>
                        <div class="right-box">
                            <span>{{v.group_member}}</span>
                            <b>人</b>
                        </div>
                    </div>
                    <div class="middle-box">
                        <p>
                            <span>{{v.group_topic.time}}</span>
                            <span>{{v.group_topic.title}}</span>
                        </p>
                </div>
                </div>
            </a>
        </div>
        <p class="">更多相关小组</p>
    </div>
</template>
<script>
export default {
    props:{
        arr:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .top-box{
        padding:.1rem 0rem;
        margin:0rem .2rem;
    }
    .top-one{
        border-bottom:.01rem solid #eee;
        margin-top:.1rem;
    }
    a{
        color:#111;
    }
    p{
        font-size: .168rem;
        font-weight: 400;
        color: #111;
    }
    .img-box{
        font-size:0;
        padding:0.1rem 0;
        overflow: hidden;
        /* background: skyblue; */
    }
    .img-box img{
        width:.4rem;
        height:.4rem;
        float: left;
        margin-right:.1rem;
    }
    .img-box span{
        font-size:.16rem;
        float:left;
        margin-top:.1rem;
    }
    .span-tit{
        white-space:nowrap;
        width:2rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .right-box{
        float:right;
        color:#ccc;
    }
    .img-top{
        overflow: hidden;
    }
    .img-box b{
        font-size:.18rem;
        font-weight:100;
        line-height: .4rem;
    }
    .middle-box{
        float: left;
    }
    .middle-box p{
        float: left;
        color:#aaa;
    }
    .middle-box p span:nth-child(2){
        white-space:nowrap;
        margin-left:.1rem;
        width:2rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .p-foot{
        margin-bottom: .3rem;
        padding: .15rem 0;
        font-size: .16rem;
        line-height: .18rem;
        text-align: center;
        color: #42bd56;
    }
</style>