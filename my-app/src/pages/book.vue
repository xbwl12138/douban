<template>
    <div>
        <div class="top-box">
            <top-nav></top-nav>
        </div>
        <ban :arr="arr"></ban>
        <div class="dou-zhi">
            <span>
                <img src="../../static/1.jpg">
            </span>
            <span class="span-first">
                <div class="book-name">
                    <span>造物</span>
                    <span>￥36</span>
                </div>
                <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
            </span>
        </div>
        <ban :arr="arrb"></ban>
        <banb :arr="arrc"></banb>   
        <class-list></class-list>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import ban from '../components/ban'
import classList from '../components/classList'
import foot from '../components/foot'
import banb from '../components/banb'

export default {
    components:{
        topNav,
        ban,
        banb,
        classList,
        foot
    },
    data(){
        return {
            arr:["最受关注图书｜虚构类","最受关注图书｜非虚构类","豆瓣纸书"],
            arrb:["发现好书"],
            arrc:["图书入选IMDB250和豆瓣电影250的电影","同时入选影250的电影","350和豆瓣电影250的电影","4同时入选IMDB250和豆瓣电影250的电影","","5同时入选IMDB250和豆瓣电影250的电影","6同时入选IMDB250和豆瓣电影250的电影","7同时入选IMDB250和豆瓣电影250的电影","8同时入选IMDB250和豆瓣电影250的电影","",],
        }
    }
}
</script>
<style socped>
    .top-box{
        padding-bottom:.53rem;
    }
    .dou-zhi{
        padding:.1rem .2rem .2rem;
        overflow: hidden;
    }
    .dou-zhi img{
        float: left;
        width: 1rem;
        margin-right: .15rem;
    }
    .book-name{
        font-size:.2rem;
        margin-top:.2rem;
        color: #494949;
        line-height: .22rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        margin-bottom:.1rem;
    }
    .book-name span:last-child{
        float:right;
        color: #e76648;
        font-size: .16rem;
        line-height: .22rem;
    }
    .span-first p{
        font-size: .13rem;
        font-weight: 300;
        /* line-height: .15; */
        color: #9b9b9b;
    }
    
    
</style>