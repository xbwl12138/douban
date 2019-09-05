<template>
    <div>
        <div class="login-box">
            <div class="login-img">
                <img src="../../static/no-login.jpg">
                <p>请先登录</p>
            </div>
            <div class="img-right">
                <img src="../../static/footer.png">
                <img src="../../static/footer.png">
            </div>
        </div>
        <div class="login-box">
            <div class="login-img">
                <img src="../../static/no-login.jpg">
                <p>欢迎您：王兵强</p>
            </div>
            <div class="img-right">
                <img src="../../static/footer.png">
                <img src="../../static/footer.png">
            </div>
        </div>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import download from '../components/download'
export default {
    components:{
        topNav,
        download
    }
}
</script>
<style scoped>
    .top-box{
        padding-bottom:.53rem;
    }
    .login-box{
        padding:.2rem 0;
        font-size:0;
        border-bottom:.01rem solid #EEE;
    }
    .login-box span{
        font-size:.12rem;
    }
    .login-img{
        font-size:0;
        margin-left:.2rem;
        overflow: hidden;
        display: inline-block;
    }
    .login-img img{
        /* padding-top:.4rem; */
        float: left;
        border-radius:50%;
    }
    .login-img p{
        color: #111;
        vertical-align: middle;
        display: inline-block;
        font-size:.15rem;
        margin-top:.14rem;
        margin-left:.2rem;
    }
    .img-right{
        float:right;
        margin-top:.01rem;
    }
    .img-right img{
        width:.4rem;
        height:.4rem;
        margin-right:.2rem;
    }
</style>>
    