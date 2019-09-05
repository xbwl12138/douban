<template>
    <div class="deat-box">
        <div class="cont-box">
            <div class="title-box">
                <h2>
                    {{title}}
                </h2>
                <span>
                    {{address}}
                </span>
            </div>
            <div class="img-box">
                <img :src="imgUrl"/>
            </div>
            <div class="time-box">
                <span>时间:</span>
                <ul>
                    <li>{{startTime}}</li>
                    <li>{{endTime}}</li>
                </ul>
            </div>
            <div class="time-box">
                <span>地点:</span>
                <ul>
                    <li>{{juTiAddress}}</li>
                </ul>
            </div>
            <div class="time-box">
                <span>费用:</span>
                <ul class="ul-fu">
                    <li>{{price}}</li>
                </ul>
            </div>
            <div class="time-box">
                <span>类型:</span>
                <ul class="ul-fu">
                    <li>{{category_name}}</li>
                </ul>
            </div>
            <div class="time-box time-start">
                <span>起始时间:</span>
                <ul class="ul-fu">
                    <li>{{startTime}}-{{endTime}}</li>
                </ul>
            </div>
            <div class="tag-box">
                <ul>
                    <li><a href="#">艺术展</a></li>
                    <li><a href="#">国际</a></li>
                    <li><a href="#">艺术</a></li>
                    <li><a href="#">当代</a></li>
                    <li><a href="#">测站</a></li>
                </ul>
            </div>
            <div class="deta-box">
                 <h2>活动详情</h2>
                 <span>{{title}}</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title:{
            type:String,
            require:true,
            default:"奇妙的不确定性 Intriguing Uncertainties"
        },
        address:{
            type:String,
            require:true,
            default:"北京"
        },
        imgUrl:{
            type:String,
            require:true,
            default:"../../static/1.jpg"
        },
        startTime:{
            type:String,
            require:true,
        },
        endTime:{
            type:String,
            require:true,
        },
        juTiAddress:{
            type:String,
            require:true,
        },
        price:{
            type:String,
            require:true,
        },
        category_name:{
            type:String,
            require:true,
        },
        deatContent:{
            type:String,
            require:true,
        }
        
    }
}
</script>
<style scoped>
    .deat-box{
        /* width:100%; */
        padding:0rem .2rem;
    }
    .title-box{
        margin: .2rem 0;
        color: #494949;
        font-size: .1rem;
        padding:0 .1rem;
    }
    .title-box h2{
        font-weight: 600;
    }
    .title-box span{
        color: #fff;
        background-color: #ff8263;
        padding: .02rem;
        height: .12rem;
        line-height: .14rem;
    } 
    .img-box{
        width:100%;
        text-align: center;
    }
    img{
        width: 100%;
        max-width: 2.2rem;
        height: auto;
    }
    .time-box{
        font-size:.14rem;
        color: #666;
        padding-bottom:.38rem;
    }
    .time-box span{
        float: left;
        line-height: .3rem;
    }
    .time-box ul{
        float: left;
        margin-left: .08rem;
    }
    .time-box li{
        line-height: .18rem;
        width: 2.8rem;
    }
    .time-start ul li{
        width: 2rem;
    }
    .ul-fu li{
        line-height: .3rem;
    }
    .tag-box{
        padding-bottom: .3rem;
        margin-bottom:.4rem;
    }
    .tag-box ul li{
        float: left;
    }
    .tag-box ul li a{
        float: left;
        font-size:.16rem;
        color:#494949;
        padding: 0 .12rem;
        line-height: .28rem;
        font-size: .15rem;
        border-radius: .28rem;
        text-align: center;
        color: #494949;
        background: #f5f5f5;
        margin-right: .02rem
    }
    .deta-box{
        width:100%;
        margin-top: .1rem;
        margin-bottom: .1rem;
        font-size: 0;
    }
    .deta-box h2{
        color: #072;
        font-size: .14rem;
        margin-bottom: .1rem;
        display:block;
    }
    .deta-box span{
        font-size:.12rem;
    }
</style>