<template>
    <div class="diary-box">
        <div class="img-box">
            <img src="../../static/footer.png">
        </div>
        <div class="right-box">
            <div class="fir-box">
                <b>豆瓣</b>
                <span>写了日记</span>
                <p>2019-2-2</p>
            </div>
            <div class="txt-box">
                <h2>豆瓣App 4.12.0 主要更新</h2>
                <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
            </div>
        </div>
        <div class="footer-box">
            <span>
                <i>5</i>
            </span>
            <span>
                <i>2</i>
            </span>
            <span>
                <i>1</i>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .diary-box{
        padding:.2rem 0;
        margin:0rem .2rem;
        overflow: hidden;
        border-bottom:.01rem solid #eee;
    }
    .img-box{
        float: left;
        font-size: 0;
        height:100%;
    }
    .img-box img{
        width:.4rem;
        height:.4rem;
        border-radius:50%;
    }
    .right-box{
        float: left;
        color:#aaa;
        font-size:.16rem;
        width:85%;
        margin-left:.1rem;
    }
    .right-box .fir-box p{
        padding:.02rem 0;
    }
    .right-box b{
        color:#000;
        
    }
    .txt-box{
        margin: .1rem 0 .2rem;
        padding: .15rem;
        border-radius: .02rem;
        border: .01rem solid #d8d8d8;
    }
    .txt-box h2{
        font-size:.16rem;
        color:#494949;
        font-weight: 500;
    }
    .txt-box p{
        /* width:100%; */
        font-size:.12rem;
    }
    .footer-box{
        font-size:0;
        margin-left:.4rem;
    }
    .footer-box span{
        display: inline-block;
        width:.2rem;
        height:.2rem;
        margin-right:.4rem;
    }
    .footer-box i{
        font-size:.12rem;
        margin-left:.24rem;
        line-height: .22rem;
        font-style: normal;
    }
    .footer-box span:nth-child(1){
        background-image: url(../../static/1.svg);
    }
    .footer-box span:nth-child(2){
        background-image: url(../../static/2.svg);
    }
    .footer-box span:nth-child(3){
        background-image: url(../../static/3.svg);
    }
</style>