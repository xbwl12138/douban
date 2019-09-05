<template>
    <div class="ul-box">
        <div class="look-box">
            <h2>分类浏览</h2>
        </div>
        <ul>
            <li v-for="(v,i) in arr" :key="i">{{v}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            arr:[
                "经典","冷门佳作","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"
            ]
        }
    }
}
</script>
<style scoped>
    .ul-box{
        font-size:.16rem;
        padding:0 .2rem;
        overflow: hidden;
    }
    .look-box h2{
        color: #111;
        font-size:.16rem;
        font-weight:500;
        padding:.12rem 0;
    }
    .ul-box li{
        width:50%;
        float:left;
        box-sizing:border-box;
        height:.4rem;
        line-height: .4rem;
        border:.01rem solid #eee;
        border-left:none;
        border-bottom:none;
        color: #42bd56;
    }
    .ul-box li:nth-child(2n){
        text-indent: .12rem;
    }
    .ul-box li::after{
        content:"";
        width:.1rem;
        height:.1rem;
        border:.01rem solid #555;
        border-left:none;
        border-bottom:none;
        float:right;
        margin-top:.14rem;
        margin-right:.1rem;
        transform: rotate(45deg);
    }
</style>