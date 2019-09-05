<template>
    <div class="down-box">
        <span class="every-day">每天看点好内容</span>
        <div class="div-box">
            <span>极速下载</span>
            <span>打开</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .down-box{
        /* width: 100%; */
        height: .8rem;
        background-image: url(../../static/promotion_bg.jpg);
        background-size:100% 100%;
        font-size: .14rem;
        line-height: .8rem;
    }
    .every-day{
        padding-left: .18rem;
    }
    span{
        color: #2ca532;
    }
    .div-box{
        float: right;
        padding-right: .18rem;
    }
    .div-box span{
        border: .01rem solid #42bd56;
        border-radius: .03rem;
        text-align: center;
        padding:.03rem .1rem;
    }
    .div-box span:nth-child(1){
        color: #fff;
        background:#42bd56;
    }
</style>