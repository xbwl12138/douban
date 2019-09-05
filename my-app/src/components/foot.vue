<template>
    <div class="footer-box">
        <div class="img-box">
            <img src="../../static/footer.png" alt="">
            <div class="dou-box">
                <b>豆瓣</b>
                <p>我们的精神角落</p>
            </div>

        </div>
        <div class="a-box">
            <a href="#">去 App Store 免费下载 iOS 客户端</a>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer-box{
        width: 100%;
        text-align: center;
        font-size: 0;
        margin: .3rem 0;
    }
    .img-box{
        display: inline-block;
        font-size: 0;
    }
    
    .img-box img{
        margin-top: .1rem;
        width: .48rem;
        height: .48rem;
        float: left;
    }
    .dou-box{
        font-size:.14rem;
        color: #111;
        display: inline-block;
        text-align: left;
        padding-top: .14rem;
        margin-left: .1rem;
        margin-bottom:.2rem;
    }
    .a-box a{
        font-size: .12rem;
        color: #42bd56;
    }
</style>