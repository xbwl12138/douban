<template>
    <div>
        <div class="top-box">
            <top-nav></top-nav>
        </div>
        <div class="ban-box">
            <ban :arr="arr"></ban>
        </div>
        <banb :arr="arrb"></banb>
        <class-list></class-list>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import ban from '../components/ban'
import banb from '../components/banb'
import classList from '../components/classList'
import foot from '../components/foot'
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
            arr:["影院热映","免费在线观影","新片速递","发现好电影"],
            arrb:["电影IMDB250和豆瓣电影250的电影","2同时入选影250的电影","350和豆瓣电影250的电影","4同时入选IMDB250和豆瓣电影250的电影","","5同时入选IMDB250和豆瓣电影250的电影","6同时入选IMDB250和豆瓣电影250的电影","7同时入选IMDB250和豆瓣电影250的电影","8同时入选IMDB250和豆瓣电影250的电影","",],
        }
    }
}
</script>
<style socped>
    .top-box{
        padding-bottom:.53rem;
    }
    
</style>